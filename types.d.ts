export interface PokemonUrl {
  name: string;
  url: string;
}

export interface Sprite {
  other: {
    dream_world: {
      front_default: string;
    };
    'official-artwork': {
      front_default: string;
    };
  };
}

export type PokemonTypeName =
  | 'fire'
  | 'grass'
  | 'poison'
  | 'water'
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'unknown'
  | 'shadow';

export interface Type {
  slot: number;
  type: {
    name: PokemonTypeName;
    url: string;
  };
}

export interface Pokemon {
  id: number | undefined;
  name: string;
  sprites: Sprite;
  types: Type[];
}
