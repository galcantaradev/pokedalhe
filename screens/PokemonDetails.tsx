import { NavigatorScreenParams } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { PokemonInfo } from '../components';
import { pokemonTypeColors } from '../styles';
import { Pokemon, Type } from '../types';
import {
  getFirstPokemonType,
  getPokemonImage,
  getPokemonNumber
} from '../utils';

interface Props {
  route: NavigatorScreenParams<any>;
}

export const PokemonDetails = ({ route }: Props) => {
  const pokemon = route.params.pokemon as Pokemon;

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: pokemonTypeColors[getFirstPokemonType(pokemon)]
      }}>
      <View style={styles.imageContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{pokemon.name}</Text>
          <Text>
            {pokemon.types.map((type: Type, index: number) => {
              const color =
                type.type.name === getFirstPokemonType(pokemon)
                  ? '#fff'
                  : pokemonTypeColors[type.type.name];

              return (
                <Text key={type.type.name} style={{ ...styles.type, color }}>
                  {pokemon.types.length - 1 === index
                    ? type.type.name
                    : `${type.type.name}, `}
                </Text>
              );
            })}
          </Text>
        </View>
        <Text style={styles.order}>#{getPokemonNumber(pokemon)}</Text>
        <Image
          style={styles.image}
          source={{ uri: getPokemonImage(pokemon) }}
        />
      </View>
      <PokemonInfo pokemon={pokemon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
  imageContainer: {
    height: '40%',
    zIndex: 1
  },
  image: {
    height: '70%',
    resizeMode: 'contain',
    marginTop: '10%'
  },
  name: {
    fontSize: 40,
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: 'bold'
  },
  infoContainer: {
    margin: 20
  },
  order: {
    position: 'absolute',
    right: 10,
    top: 20,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  type: {
    fontWeight: 'bold'
  }
});
