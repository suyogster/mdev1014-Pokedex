// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFireStore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAIw7vKMWcT-Bw3FKOxrlz5kd0eOlI5W7w",
	authDomain: "pokedox-2024.firebaseapp.com",
	projectId: "pokedox-2024",
	storageBucket: "pokedox-2024.appspot.com",
	messagingSenderId: "594433661760",
	appId: "1:594433661760:web:440ad6fa2f5a14a5dc38a5",
	measurementId: "G-4WGS7LPTE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize Firestore
const db = getFireStore(app);

//Initialize the authentication module
const auth = getAuth(app);

export { db, app, auth };
