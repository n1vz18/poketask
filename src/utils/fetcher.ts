import axios                               from 'axios';
import { PokemonDetails }                  from '../types/pokemon.Api';

const apiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

// Пагинация
export const fetchPokemons = async (page: number, limit: number) => {
    const response = await apiClient.get(`/pokemon?offset=${(page - 1) * 20}&limit=${limit}`);
    return response.data;
};

// Карточки
export const fetchPokemonDetails = async (name: string): Promise<PokemonDetails> => {
    const response = await apiClient.get(`/pokemon/${name}`);
    return response.data;
};

// Получение списка способностей  
// export const fetchAbilities = async () => {
//     const response = await apiClient.get('/ability?limit=100');
//     return response.data.results;
//   };