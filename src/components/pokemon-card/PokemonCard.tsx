import React, { useEffect, useState } from 'react';
import { fetchPokemonDetails } from '../../utils/fetcher';
import { PokemonCardStyle, Vstack }         from './styled'
import { PokemonDetails } from '../../types/pokemon.Api'; 

const PokemonCard: React.FC<{ name: string }> = ({ name }) => {
  const [details, setDetails] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchPokemonDetails(name);
      setDetails(data);
    };
    getDetails();
  }, [name]);

  if (!details) return <div>Loading...</div>;

  return (
    <PokemonCardStyle>
      <Vstack>
        <h2>{name}</h2>
        <img src={details.sprites.front_default} alt={name} style={{ maxWidth: '96px' }} />
      </Vstack>
      <p>Height: {details.height}</p>
      <p>Weight: {details.weight}</p>
      <p>Base Experience: {details.base_experience}</p>
    </PokemonCardStyle>
  );
};

export default PokemonCard;