import { Pokemon } from '../types';

export const getPokemonImage = (pokemon: Pokemon): string => {
  return pokemon.sprites.other['official-artwork'].front_default;
};
