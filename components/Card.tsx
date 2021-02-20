import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { cardBackgroundStyles } from '../styles';
import { PokemonTypeName } from '../types';

interface Props {
  children: ReactNode;
  pokemonType: PokemonTypeName;
}

export const Card = ({ children, pokemonType = 'fire' }: Props) => {
  return (
    <View
      style={{
        ...styles.card,
        backgroundColor: cardBackgroundStyles[pokemonType]
      }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: 200,
    margin: 10,
    padding: 10,
    width: '45%'
  }
});
