import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import React from 'react';

import { PokemonDetails, PokemonList } from './screens';
import { screenOptions, detailsScreenOptions } from './utils';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Pokédalhe" component={PokemonList} />
          <Stack.Screen
            name="Details"
            component={PokemonDetails}
            options={detailsScreenOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
