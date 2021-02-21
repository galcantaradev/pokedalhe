export interface PokemonUrl {
  name: string;
  url: string;
}

export interface Sprite {
  other: {
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
  };
}

export interface Ability {
  ability: {
    name: string;
  };
  slot: number;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

export interface Pokemon {
  id: number | undefined;
  name: string;
  order: number;
  height: number;
  weight: number;
  sprites: Sprite;
  types: Type[];
  abilities: Ability[];
  stats: Stat[];
}
