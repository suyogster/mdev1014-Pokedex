import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import IPokemon from '../types/IPokemon';

/* This component is used as a reusable component for listing the favourite pokemon collections in Card component */

interface PokemonCardProps {
  id: string;
  data: IPokemon;
  navigation: any;
}

export default function FavoriteCard(props: PokemonCardProps) {
  const { id, data, navigation } = props;
  const { name, primaryColor, image, type } = data;
  return (
    <TouchableOpacity
      key={data.name}
      style={[styles.container, { backgroundColor: primaryColor }]}
      onPress={() => navigation.navigate('Detail', { data, index: id })}
    >
      <View key={data.name} style={styles.row}>
        <View>
          <Text style={[styles.firstRowText, { alignSelf: 'flex-start' }]}>
            {id}
          </Text>
          <Text style={[styles.firstRowText, { alignSelf: 'flex-start' }]}>
            {name}
          </Text>
          <View
            style={{
              alignSelf: 'flex-end',
              width: '100%',
              marginTop: 50,
            }}
          >
            <View
              style={[
                styles.typeSection,
                { backgroundColor: '#FFFFFF', opacity: 0.5 },
              ]}
            >
              <Text> {type[0]} </Text>
            </View>
          </View>
        </View>

        <Image
          style={{
            width: 150,
            height: 150,
            alignSelf: 'flex-end',
            marginLeft: 10,
          }}
          source={image}
        />
      </View>
      <TouchableOpacity style={{ position: 'absolute', top: 15, right: 15 }}>
        <Image
          style={{ tintColor: 'red' }}
          source={require('../../assets/FavoriteIcon.png')}
        />
      </TouchableOpacity>

      <View style={{ marginVertical: 2 }}></View>

      <TouchableOpacity style={{ position: 'absolute', bottom: 15, right: 15 }}>
        <Image source={require('../../assets/DeleteIcon.png')} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
    paddingHorizontal: 20,
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
    width: '90%',
  },

  typeSection: {
    flex: 1 / 2,
    borderRadius: 20,
    marginVertical: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstRowText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
