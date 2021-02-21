import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';

import { PokemonService } from '../services';
import { Pokemon, PokemonUrl } from '../types';
import { getFirstPokemonType, getPokemonImage } from '../utils';
import { Card } from './Card';

interface Props {
  url: PokemonUrl;
  onTouch: (item: Pokemon) => void;
}

const initialPokemon: Pokemon = {
  id: undefined,
  name: '',
  sprites: {
    other: {
      'official-artwork': {
        front_default: ''
      },
      dream_world: {
        front_default: ''
      }
    }
  },
  types: []
};

export const PokemonCard = ({ url, onTouch }: Props) => {
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
      onTouch={() => onTouch(pokemon)}>
      {!!getPokemonImage(pokemon) && (
        <ImageBackground
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
