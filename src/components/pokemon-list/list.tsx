import React from 'react';
import PokemonCard from '../pokemon-card/PokemonCard';
import { PokemonListStyle } from './styled';

interface PokemonListProps {
  results: { name: string }[]; // структура результата из fetchPokemons
}

const PokemonList: React.FC<PokemonListProps> = ({ results }) => {
  // Проверка на наличие данных
  if (!results || results.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <PokemonListStyle>
      {results.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
    </PokemonListStyle>
  );
};

export default PokemonList;