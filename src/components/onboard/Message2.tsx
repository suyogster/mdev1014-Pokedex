import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

/*Second screen designed for the onboarding process*/

export default function Message2() {
  return (
    <>
      <Image
        style={{ width: 350, height: 350 }}
        source={require('../../../assets/Charmander.png')}
      />
      <View
        style={{
          flex: 0.8,
          paddingHorizontal: 30,
          alignContent: 'center',
        }}
      >
        <Text style={styles.onboardTitle}>Explore Pokémon</Text>
        <Text style={styles.onboardContent}>
          Swipe through the pages to explore{'\n'} different Pokémon and tap on
          to{'\n'}
          dive deeper into its details.
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
