import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';

import { PokemonService } from '../services';
import { PokemonUrl } from '../types';
import { PokemonCard } from './PokemonCard';

export const PokemonList = () => {
  const [urls, setUrls] = useState<PokemonUrl[]>([]);

  useEffect(() => {
    PokemonService.fetchAllPokemons().then(urls => setUrls(urls));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList<PokemonUrl>
        numColumns={2}
        data={urls}
        keyExtractor={(item, index) => `${item.url}-${item.name}-${index}`}
        renderItem={({ item }: ListRenderItemInfo<PokemonUrl>) => (
          <PokemonCard key={item.name} url={item} />
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
