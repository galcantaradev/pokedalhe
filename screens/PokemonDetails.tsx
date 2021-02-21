import { NavigatorScreenParams } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { cardBackgroundStyles } from '../styles';
import { Pokemon } from '../types';
import { getFirstPokemonType, getPokemonImage } from '../utils';

interface Props {
  route: NavigatorScreenParams<any>;
}

export const PokemonDetails = ({ route }: Props) => {
  const pokemon = route.params?.pokemon as Pokemon;

  return (
    <View>
      <Image
        style={{
          ...styles.image,
          backgroundColor: cardBackgroundStyles[getFirstPokemonType(pokemon)]
        }}
        source={{ uri: getPokemonImage(pokemon) }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {}
});
