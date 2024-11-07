import React, { useState }  from 'react';
import { PokemonList }      from '../../components/pokemon-list'
import { Pagination }       from '../../components/pagination';
import { fetchPokemons }    from '../../utils/fetcher';
import { useQuery }         from 'react-query';
import { BodyHome }         from './styled'

const PAGE_SIZE = 20;

export const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError } = useQuery(['pokemons', currentPage], () => fetchPokemons(currentPage, PAGE_SIZE));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching pokemons.</div>;

  if (!data) {
    return <div>No data available</div>;
  }

  const results = data ? data.results : [];  

  return (
    <BodyHome>
      <h1>Pokemon List</h1>
      <PokemonList results={results}/>
      <Pagination
        currentPage={currentPage}
        totalCount={data.count}
        pageSize={PAGE_SIZE}
        onPageChange={setCurrentPage}
      />
    </BodyHome>
  );
};