import { StackNavigationOptions } from '@react-navigation/stack';

import { cardBackgroundStyles } from '../styles';
import { getFirstPokemonType } from './getFirstPokemonType';

export const screenOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#f74848',
    height: 100
  },
  headerTitleStyle: {
    fontSize: 26,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  headerBackTitleStyle: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  headerTintColor: '#fff',
  headerBackTitle: 'Back'
};

export const detailsScreenOptions = ({
  route
}: any): StackNavigationOptions => {
  const { pokemon } = route.params;

  return {
    title: pokemon?.name,
    headerStyle: {
      backgroundColor: cardBackgroundStyles[getFirstPokemonType(pokemon)],
      height: 100
    }
  };
};
