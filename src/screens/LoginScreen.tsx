import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/theme';
import AuthHeader from '../components/AuthHeader';
import CustomTextInput from '../components/CustomTextInput';

interface LoginScreenProps {
  navigation: any;
}

export default function LoginScreen(props: LoginScreenProps) {
  const { navigation } = props;
  return (
    <SafeAreaView style={style.container}>
      <AuthHeader />

      <View style={{ flex: 1 / 2 }}>
        <CustomTextInput label={'Username'} />
        <CustomTextInput label={'Password'} secureTextEntry={true} />

        <View style={{ marginVertical: 50 }}>
          <TouchableOpacity
            style={style.button}
            onPress={() => navigation.navigate('Onboard')}
          >
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16,
                color: 'white',
              }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
          {/*<Text
            style={{
              textAlign: 'center',
              marginTop: 24,
              fontWeight: '400',
              fontSize: 13,
            }}
          >
            Are you a new trainer?{' '}
            <Text
              onPress={() => navigation.navigate('Registration')}
              style={{
                textDecorationLine: 'underline',
                color: colors.primary,
                fontWeight: 'bold',
              }}
            >
              Register
            </Text>
          </Text>*/}
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    marginVertical: 50,
  },

  button: {
    backgroundColor: colors.button,
    borderRadius: 20,
    height: 50,
    minWidth: '80%',
    justifyContent: 'center',
  },
});
