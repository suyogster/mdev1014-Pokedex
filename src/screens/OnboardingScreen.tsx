import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

export default function OnboardingScreen(props: any) {
  useEffect(() => props.navigation.navigate('Home'));
  return (
    <View>
      <Text>Screen</Text>
    </View>
  );
}
