/** @format */
/*
 * fetch the data
 * display to PokemonCard component
 *
 */

import { getPokemons, extractUniqueAttributes, Pokemon } from "../utils/pokemonApiStorage";
import React, { useState, useEffect } from "react";

import "./PokemonCard.css";
import PokemonCard from "./PokemonCard";
interface ContainerProps {}

const PokemonStorage: React.FC<ContainerProps> = () => {
  //pokemons, filtered, types, abilities, seleted types for background, seleted abu
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [abilities, setAbilities] = useState<string[]>([]);

  // fetch Pokémon and initialize filters
  useEffect(() => {
    const initializeData = async () => {
      try {
        const data = await getPokemons();
        setPokemons(data);

        const { types, abilities } = extractUniqueAttributes(data);
        setTypes([...types]);
        setAbilities([...abilities]);

        setFilteredPokemons(data);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    initializeData();
  }, []);

  return (
    <div id='container'>
      <div className='pokemon-list'>
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            sprite={pokemon.sprites.front_default}
            types={pokemon.types.map((type) => type.type.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonStorage;
