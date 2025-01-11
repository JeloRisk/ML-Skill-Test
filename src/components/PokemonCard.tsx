/** @format */

import React from "react";
import { IonCard, IonImg, useIonRouter } from "@ionic/react";
import "./PokemonCard.css";

interface PokemonCardProps {
  id: number;
  name: string;
  sprite: string;
  types: string[];
}

// types and their color corresponding
const typeColors: Record<string, string> = {
  normal: "#A8D5B1",
  fire: "#FFA756",
  water: "#58ABF6",
  electric: "#F2CB55",
  grass: "#8BD674",
  ice: "#A0E8E6",
  fighting: "#EB4971",
  poison: "#CA91D1",
  ground: "#F78551",
  flying: "#A6CBE8",
  psychic: "#F49EB1",
  bug: "#C5E18A",
  rock: "#D6C59D",
  ghost: "#B8A6D6",
  dragon: "#9F9FE6",
  dark: "#A8A8A8",
  steel: "#BCC7CE",
  fairy: "#F1A6D6",
};

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, sprite, types }) => {
  const router = useIonRouter();

  const primaryType = types[0]?.toLowerCase();
  const cardBackgroundColor = typeColors[primaryType] || "#D3EADD";
  const formattedId = `#${id.toString().padStart(3, "0")}`;

  return (
    <IonCard
      className='pokemon-card'
      style={{ backgroundColor: cardBackgroundColor }}>
      {/* Background */}
      <div className='pokemon-card__background'>
        <IonImg
          src='/pokeball2.svg'
          alt='Pokeball background'
          className='pokemon-card__pokeball'
        />
      </div>

      {/* Pokémon Image */}
      <div className='pokemon-card__image'>
        <IonImg
          className='pokemon-card__img'
          src={sprite}
          alt={name}
        />
      </div>

      {/* Content */}
      <div className='pokemon-card__content'>
        <div className='pokemon-card__header'>
          <p className='pokemon-card__id'>{formattedId}</p>
          <p className='pokemon-card__name'>{capitalize(name)}</p>
        </div>

        {/* Pokémon Types */}
        <div className='pokemon-card__types'>
          {types.map((type) => (
            <div
              key={type}
              className='pokemon-card__type'
              style={{
                backgroundColor: darkenColor(typeColors[type.toLowerCase()] || "#D3EADD"),
              }}>
              {capitalize(type)}
            </div>
          ))}
        </div>
      </div>
    </IonCard>
  );
};

// helper functions: darkenColor to dark the color of each pokemonType, capitalize is to capitalize each text;

//   to darken a color
const darkenColor = (color: string, percent = 20): string => {
  let r = parseInt(color.substring(1, 3), 16);
  let g = parseInt(color.substring(3, 5), 16);
  let b = parseInt(color.substring(5, 7), 16);

  r = Math.max(0, r - (r * percent) / 100);
  g = Math.max(0, g - (g * percent) / 100);
  b = Math.max(0, b - (b * percent) / 100);

  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
};

//  to capitalize a string
const capitalize = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

export default PokemonCard;
