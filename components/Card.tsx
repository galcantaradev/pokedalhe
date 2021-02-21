import React, { ReactNode } from 'react';
import { GestureResponderEvent, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { pokemonTypeColors } from '../styles';
import { PokemonTypeName } from '../types';

interface Props {
  children: ReactNode;
  pokemonType: PokemonTypeName;
  onPress: (event?: GestureResponderEvent) => void;
}

export const Card = ({ children, pokemonType = 'fire', onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.card,
        backgroundColor: pokemonTypeColors[pokemonType]
      }}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: 180,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    width: 180
  }
});
