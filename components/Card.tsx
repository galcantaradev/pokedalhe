import React, { ReactNode } from 'react';
import { GestureResponderEvent, StyleSheet, View } from 'react-native';

import { cardBackgroundStyles } from '../styles';
import { PokemonTypeName } from '../types';

interface Props {
  children: ReactNode;
  pokemonType: PokemonTypeName;
  onTouch: (event: GestureResponderEvent) => void;
}

export const Card = ({ children, pokemonType = 'fire', onTouch }: Props) => {
  return (
    <View
      onTouchEnd={onTouch}
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
    height: 180,
    margin: 10,
    padding: 10,
    width: '45%'
  }
});
