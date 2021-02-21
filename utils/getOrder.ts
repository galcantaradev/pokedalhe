import { Pokemon } from '../types';

export const getOrder = (pokemon: Pokemon): string => {
  return pokemon.order < 100
    ? pokemon.order.toString().padStart(3, '0')
    : pokemon.order.toString();
};
