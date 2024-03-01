import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  showEmailAlert,
} from "firebase/auth";
import { auth } from "./config";

export const emailVerification = async () => {
  const user = auth.currentUser;
  try {
    await sendEmailVerification(user, {
      handleCodeInApp: true,
      url: 'https://noreply@pokedox-2024.firebaseapp.com',
    }).then(() => {
      showEmailAlert(user.email);
    });
  }
  catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Faced an error: !! >>', errorCode, errorMessage);
    throw error;
  }
};

export const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await emailVerification();

    //If user is sucessfully registered
    const user = userCredential.user;
    console.log("User Registered::>>>", user);

    //After successful registration, apply the new redirect process below -- //
    return user;
  } catch (error) {
    throw (error);
  }
};