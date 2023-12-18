import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

/* Third screen designed for the onboarding process */

export default function Message3() {
  return (
    <>
      <Image
        style={{ width: 350, height: 350 }}
        source={require('../../../assets/Bulbasaur.png')}
      />
      <View
        style={{
          flex: 0.8,
          paddingHorizontal: 30,
          alignContent: 'center',
        }}
      >
        <Text style={styles.onboardTitle}>Get Ready to Know ‘Em</Text>
        <Text style={styles.onboardContent}>
          Search your favorite Pokédex {'\n'}stats in Pokémon games{'\n'} Let’s
          Go!
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  onboardTitle: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
  },
  onboardContent: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
  },
});
