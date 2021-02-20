import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

export const Header = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Pokédalhe</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: '#f74848',
    height: 100
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10
  }
});
