import { NavigationHelpers } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';

import { PokemonCard } from '../components';
import { PokemonService } from '../services';
import { Pokemon, PokemonUrl } from '../types';

interface Props {
  navigation: NavigationHelpers<any>;
}

export const PokemonList = ({ navigation }: Props) => {
  const [urls, setUrls] = useState<PokemonUrl[]>([]);

  useEffect(() => {
    PokemonService.fetchAllPokemons().then(urls => setUrls(urls));
  }, []);

  const touchPokemon = (pokemon: Pokemon) => {
    navigation.navigate('Details', {
      pokemon
    });
  };

  return (
    <View style={styles.container}>
      <FlatList<PokemonUrl>
        numColumns={2}
        data={urls}
        keyExtractor={(item, index) => `${item.url}-${item.name}-${index}`}
        renderItem={({ item }: ListRenderItemInfo<PokemonUrl>) => (
          <PokemonCard key={item.name} url={item} onTouch={touchPokemon} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flex: 1,
    paddingBottom: 10
  }
});
