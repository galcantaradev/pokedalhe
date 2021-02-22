import { Pokemon } from '../types';

export const getPokemonNumber = (pokemon: Pokemon): string => {
  return pokemon.id! < 100
    ? pokemon.id!.toString().padStart(3, '0')
    : pokemon.id!.toString();
};
