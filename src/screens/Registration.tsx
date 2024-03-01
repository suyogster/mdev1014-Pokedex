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
import { db } from '../../firebaseConfig';
import { collection, addDoc, getDocs } from "firebase/firestore";


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
            console.log("formData", username, email, password);

            //Add data to firebase
            const result = await addDoc(collection(db, "users"), {
                username: username,
                email: email,
                password: password,
                createdAt: new Date().toISOString(),
            });

            //list users from users collection
            const users = (await getDocs(collection(db, "users"))).docs.map(
                (doc) => doc
            );
            console.log(
                "users data ::>>",
                users.map((user) => user.data())
            );
            console.log(
                "users ID ::>>",
                users.map((user) => user.id)
            );


        } catch (e) {
            console.log("Catched an error", e);
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
                        onPress={() => handleSignUp()}
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
