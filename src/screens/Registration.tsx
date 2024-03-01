import {
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/theme';
import AuthHeader from '../components/AuthHeader';
import CustomTextInput from '../components/CustomTextInput';
import { signup } from '../../services/auth';
import { saveUserData } from '../../services/firebaseDatabase';

interface RegistrationScreenProps {
	navigation: any;
}

export default function Registration(props: RegistrationScreenProps) {
	const { navigation } = props;

	const [username, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSignUp = async () => {
		setLoading(true);
		try {
			const user = await signup(email, password);
			if (user) {
				const id = user.uid;
				await saveUserData(id, username, password);
				navigation.navigate('Login');
			}
		} catch (error: any) {
			// NOTE: Here error is typecasted temporarily.
			setLoading(false);
			if (error.code === "auth/email-already-in-use") {
				alert("Email already in use. Please use another ~! ");
			} else if (error.code === "auth/weak-password") {
				alert("Password is weak. Please choose another one.")
			} else {
				alert("Signup error::>>");
			}
		}
	};

	return (
		<SafeAreaView style={style.container}>
			<AuthHeader />

			<View style={{ flex: 1 / 2 }}>
				<CustomTextInput label={'Username'} value={username} onChange={setUserName} />
				<CustomTextInput label={'Email'} value={email} onChange={setEmail} />
				<CustomTextInput label={'Password'} value={password} onChange={setPassword} secureTextEntry />
				<CustomTextInput label={'Confirm Password'} value={confirmPassword} onChange={setConfirmPassword} secureTextEntry />

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
							onPress={() => handleSignUp()}
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
