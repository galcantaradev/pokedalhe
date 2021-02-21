import { Pokemon, PokemonTypeName } from '../types';

export const getFirstPokemonType = (pokemon: Pokemon): PokemonTypeName => {
  return pokemon.types?.[0]?.type.name || 'unknown';
};
