/** @format */

import { Storage } from "@ionic/storage";

const API = "https://pokeapi.co/api/v2/pokemon?limit=20";
// please check the api for better understanding.

export interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
}

const LOCAL_STORAGE_KEY = "pokemonData";

const storage = new Storage();
storage.create();

// to save data to "IndexedDB storage", not Web LocalStorage
export const saveToStorage = async (pokemonData: Pokemon[]) => {
  await storage.set(LOCAL_STORAGE_KEY, pokemonData);
  window.dispatchEvent(new Event("storageUpdate"));
};

export const getFromStorage = async (): Promise<Pokemon[]> => {
  const existingData = await storage.get(LOCAL_STORAGE_KEY);
  return existingData || [];
};

export const fetchPokemonData = async (): Promise<Pokemon[]> => {
  const response = await fetch(API);
  const data = await response.json();

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon: { url: string }) => {
      const res = await fetch(pokemon.url);
      return res.json();
    })
  );

  return pokemonDetails;
};

//  unique types and abilities from Pokémon data
export const extractUniqueAttributes = (pokemons: Pokemon[]) => {
  const allTypes = new Set<string>();
  const allAbilities = new Set<string>();

  pokemons.forEach((pokemon) => {
    pokemon.types.forEach((type) => allTypes.add(type.type.name));
    pokemon.abilities.forEach((ability) => allAbilities.add(ability.ability.name));
  });

  return {
    types: Array.from(allTypes),
    abilities: Array.from(allAbilities),
  };
};

// get Pokémon data from IndexedDB or fetch from the API if not present
export const getPokemons = async (): Promise<Pokemon[]> => {
  const storedPokemons = await getFromStorage();

  if (storedPokemons.length > 0) {
    console.log("Loaded Pokémon data from IndexedDB.");
    return storedPokemons;
  } else {
    console.log("Fetching Pokémon data from API.");
    const pokemonData = await fetchPokemonData();

    await saveToStorage(pokemonData);
    return pokemonData;
  }
};
