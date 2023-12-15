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

interface RegistrationScreenProps {
  navigation: any;
}

export default function Registration(props: RegistrationScreenProps) {
  const { navigation } = props;
  return (
    <SafeAreaView style={style.container}>
      <AuthHeader />

      <View style={{ flex: 1 / 2 }}>
        <CustomTextInput label={'Username'} />
        <CustomTextInput label={'Email'} />
        <CustomTextInput label={'Password'} secureTextEntry />
        <CustomTextInput label={'Confirm Password'} secureTextEntry />

        <View style={{ marginVertical: 50 }}>
          <TouchableOpacity
            style={style.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16,
                color: 'white',
              }}
            >
              REGISTER
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 24,
              fontWeight: '400',
              fontSize: 13,
            }}
          >
            Already a trainer?{' '}
            <Text
              onPress={() => navigation.navigate('Login')}
              style={{
                textDecorationLine: 'underline',
                color: colors.primary,
                fontWeight: 'bold',
              }}
            >
              Signin
            </Text>
          </Text>
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
