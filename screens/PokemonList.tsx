import { NavigationHelpers } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { PokemonCard } from '../components';
import { PokemonService } from '../services';
import { Pokemon, PokemonUrl } from '../types';

interface Props {
  navigation: NavigationHelpers<any>;
}

export const PokemonList = ({ navigation }: Props) => {
  const [search, setSearch] = useState('');
  const [urls, setUrls] = useState<PokemonUrl[]>([]);
  const [filteredUrls, setFilteredUrls] = useState<PokemonUrl[]>([]);

  useEffect(() => {
    PokemonService.fetchAllPokemons().then(urls => {
      setUrls(urls);
      setFilteredUrls(urls);
    });
  }, []);

  useEffect(() => {
    const filtered = urls.filter(url =>
      url.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredUrls(filtered);
  }, [urls, search]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setSearch(text)}
        placeholder="Search Pokémon"
        placeholderTextColor="#fff"
      />
      <FlatList<PokemonUrl>
        numColumns={2}
        data={filteredUrls}
        keyExtractor={(item, index) => `${item.url}-${item.name}-${index}`}
        renderItem={({ item }: ListRenderItemInfo<PokemonUrl>) => (
          <PokemonCard
            key={item.name}
            url={item}
            onPress={(pokemon: Pokemon) => {
              navigation.navigate('Details', {
                pokemon
              });
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#222',
    flex: 1,
    paddingBottom: 20
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 4,
    color: '#fff',
    fontSize: 20,
    height: 40,
    marginTop: 10,
    padding: 10,
    width: '90%'
  }
});
