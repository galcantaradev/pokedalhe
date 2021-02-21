import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Ability, Pokemon, Stat } from '../types';
import { decimetersToCentimeters, hectogramsToKilograms } from '../utils';

interface Props {
  pokemon: Pokemon;
}

interface InfoProps {
  label: string;
  value: ReactNode;
}

const Attribute = ({ label, value }: InfoProps) => (
  <View style={styles.info}>
    <Text style={styles.label}>{label}</Text>
    <Text>{value}</Text>
  </View>
);

export const PokemonInfo = ({ pokemon }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Attribute
          label="Height"
          value={decimetersToCentimeters(pokemon.height)}
        />
        <Attribute
          label="Weight"
          value={hectogramsToKilograms(pokemon.weight)}
        />
        <Attribute
          label="Abilities"
          value={
            <Text style={styles.capitalize}>
              {pokemon.abilities.map((ability: Ability, index: number) => {
                return `${
                  pokemon.abilities.length - 1 === index
                    ? ability.ability.name
                    : `${ability.ability.name}, `
                }`;
              })}
            </Text>
          }
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Base Stats</Text>
        {pokemon.stats.map((stat: Stat) => (
          <Attribute label={stat.stat.name} value={stat.base_stat} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: '75%'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  section: {
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: '12%',
    width: '100%'
  },
  types: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  info: {
    flexDirection: 'row',
    marginTop: 10,
    width: 150
  },
  label: {
    marginRight: 100,
    textTransform: 'capitalize',
    width: 110
  },
  capitalize: {
    textTransform: 'capitalize'
  }
});
