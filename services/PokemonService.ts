import { PokemonUrl, Pokemon } from '../types';

export const fetchAllPokemons = async (): Promise<PokemonUrl[]> => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await res.json();

  return data.results;
};

export const fetchPokemonData = async (
  pokemon: PokemonUrl
): Promise<Pokemon> => {
  const res = await fetch(pokemon.url);
  const data = await res.json();

  return data;
};
