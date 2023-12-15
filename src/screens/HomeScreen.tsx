import React from 'react';
import FavouriteScreen from './FavouriteScreen';
import ProfileScreen from './ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokemonListScreen from './PokemonListScreen';
import { Image, Text } from 'react-native';
import { colors } from '../theme/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetailScreen from './PokemonDetailScreen';

const Tab = createBottomTabNavigator();
const Pokemon = createNativeStackNavigator();

function PokemonStackScreens() {
  return (
    <Pokemon.Navigator initialRouteName='List'>
      <Pokemon.Screen
        name='List'
        component={PokemonListScreen}
        options={{ headerShown: false }}
      />
      <Pokemon.Screen
        name='Detail'
        component={PokemonDetailScreen}
        options={{ headerShown: false }}
      />
    </Pokemon.Navigator>
  );
}

export default function HomeScreen() {
  return (
    <Tab.Navigator initialRouteName='Dashboard'>
      <Tab.Screen
        name='Favorite'
        options={{
          headerShown: true,
          title: 'Favorites',
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                tintColor={focused ? colors.primary : 'gray'}
                source={require('../../assets/FavoriteIcon.png')}
              />
            );
          },
        }}
        component={FavouriteScreen}
      />

      <Tab.Screen
        name='Dashboard'
        options={{
          headerShown: false,
          title: 'Dashboard',
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                tintColor={focused ? colors.primary : 'gray'}
                source={require('../../assets/Pokeball.png')}
              />
            );
          },
        }}
        component={PokemonStackScreens}
      />

      <Tab.Screen
        name='Profile'
        options={{
          headerShown: true,
          title: `Trainer's Profile`,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                tintColor={focused ? colors.primary : 'gray'}
                source={require('../../assets/ProfileIcon.png')}
              />
            );
          },
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
