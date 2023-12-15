import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { colors } from '../theme/theme';
import IPokemon from '../types/IPokemon';

/*This is a component to display the pokemon in a form of Card component in the main screen */

interface PokemonCardProps {
  id: string;
  data: IPokemon;
  navigation: any;
}

export default function PokemonCard(props: PokemonCardProps) {
  const { id, data, navigation } = props;
  const { name, primaryColor, image, type } = data;
  return (
    <TouchableOpacity
      key={data.name}
      style={[styles.container, { backgroundColor: primaryColor }]}
      onPress={() => navigation.navigate('Detail', { data, index: id })}
    >
      <View key={data.name} style={styles.row}>
        <Text style={[styles.firstRowText, { alignSelf: 'flex-start' }]}>
          {name}
        </Text>
        <Text style={[styles.firstRowText, { alignSelf: 'flex-end' }]}>
          {id}
        </Text>
      </View>

      <View style={{ marginVertical: 2 }}></View>
      <View style={styles.row}>
        <View
          key={data.name}
          style={{
            alignSelf: 'flex-start',
            justifyContent: 'flex-start',
            width: '50%',
          }}
        >
          {type.map((type, index) => (
            <View
              key={index}
              id={index.toString()}
              style={[
                styles.typeSection,
                { backgroundColor: '#FFFFFF', opacity: 0.5 },
              ]}
            >
              <Text> {type} </Text>
            </View>
          ))}
        </View>
        <Image
          style={{
            width: 71,
            height: 71,
            alignSelf: 'flex-end',
            marginLeft: 10,
          }}
          source={image}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 20,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    justifyContent: 'space-around',
  },

  row: {
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-between',
  },

  typeSection: {
    borderRadius: 20,
    marginVertical: 10,
    padding: 1,
  },
  firstRowText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Helvetica',
  },
});
