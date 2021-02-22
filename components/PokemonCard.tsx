import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native';

import { PokemonService } from '../services';
import { Pokemon, PokemonUrl } from '../types';
import { getFirstPokemonType, getPokemonImage } from '../utils';
import { Card } from './Card';

interface Props {
  url: PokemonUrl;
  onPress: (item: Pokemon) => void;
}

const initialPokemon: Pokemon = {
  id: undefined,
  name: '',
  sprites: {
    other: {
      'official-artwork': {
        front_default: ''
      }
    }
  },
  height: 0,
  weight: 0,
  order: 0,
  types: [],
  abilities: [],
  stats: []
};

export const PokemonCard = ({ url, onPress }: Props) => {
  const [pokemon, setPokemon] = useState(initialPokemon);

  useEffect(() => {
    if (!!url.url) {
      PokemonService.fetchPokemonData(url).then(pokemon => setPokemon(pokemon));
    }
  }, [url]);

  return (
    <Card
      key={pokemon.id}
      pokemonType={getFirstPokemonType(pokemon)}
      onPress={() => pokemon.id && onPress(pokemon)}>
      {!!getPokemonImage(pokemon) && (
        <Image
          style={styles.image}
          source={{ uri: getPokemonImage(pokemon) }}
        />
      )}
      <Text style={styles.text}>{pokemon.name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    aspectRatio: 1,
    flex: 1
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  }
});
