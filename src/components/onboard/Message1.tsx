import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

/*This is the welcome screen that is added as a part of the onboarding screen process */

export default function Message1() {
  return (
    <>
      <Image source={require('../../../assets/Onboard1.png')} />
      <View
        style={{
          flex: 0.8,
          paddingHorizontal: 30,
          alignContent: 'center',
        }}
      >
        <Text style={styles.onboardTitle}>Welcome to Pokédex</Text>
        <Text style={styles.onboardContent}>
          Know exclusive limited Pokémon {'\n'} cards that only the {'\n'}
          Pokédex have!{' '}
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
