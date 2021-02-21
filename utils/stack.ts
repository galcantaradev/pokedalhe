import { StackNavigationOptions } from '@react-navigation/stack';

import { pokemonTypeColors } from '../styles';
import { getFirstPokemonType } from './getFirstPokemonType';

export const screenOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#f74848',
    height: 100
  },
  headerBackTitle: 'Back',
  headerBackTitleStyle: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 26
  }
};

export const detailsScreenOptions = ({
  route
}: any): StackNavigationOptions => {
  const { pokemon } = route.params;

  return {
    title: '',
    headerStyle: {
      backgroundColor: pokemonTypeColors[getFirstPokemonType(pokemon)],
      height: 100
    }
  };
};
