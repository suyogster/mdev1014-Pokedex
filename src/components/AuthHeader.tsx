import { View, Text, Image } from 'react-native';
import React from 'react';

export default function AuthHeader() {
  return (
    <View>
      <View style={{ flex: 1 / 4, alignItems: 'center', marginBottom: 20 }}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={{ paddingTop: 10 }}>WELCOME TO THE POKEMON WORLD</Text>
      </View>
    </View>
  );
}
