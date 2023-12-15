import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/Registration';
import HomeScreen from './src/screens/HomeScreen';
import FavouriteScreen from './src/screens/FavouriteScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnboardingScreen from './src/screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

/**
 * screeen contains
 * contains
 * @returns 
 */

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name='Registration'
          options={{ headerShown: false }}
          component={RegistrationScreen}
        />
        <Stack.Screen
          name='Onboard'
          options={{ headerShown: false }}
          component={OnboardingScreen}
        />
        <Stack.Screen
          name='Home'
          options={{ headerShown: false }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
