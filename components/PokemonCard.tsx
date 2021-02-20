import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';

import { PokemonService } from '../services';
import { Pokemon, PokemonUrl } from '../types';
import { Card } from './Card';

interface Props {
  url: PokemonUrl;
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

export const PokemonCard = ({ url }: Props) => {
  const [pokemon, setPokemon] = useState(initialPokemon);

  useEffect(() => {
    if (!!url.url) {
      PokemonService.fetchPokemonData(url).then(pokemon => setPokemon(pokemon));
    }
  }, [url]);

  const pokemonType = pokemon.types[0]?.type.name;

  const imageUri = pokemon.sprites.other['official-artwork'].front_default;

  return (
    <Card key={pokemon.id} pokemonType={pokemonType}>
      {!!imageUri && (
        <ImageBackground style={styles.image} source={{ uri: imageUri }} />
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
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  }
});
