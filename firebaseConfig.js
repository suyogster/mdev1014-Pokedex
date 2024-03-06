import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Intialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyAIw7vKMWcT-Bw3FKOxrlz5kd0eOlI5W7w",
    authDomain: "pokedox-2024.firebaseapp.com",
    projectId: "pokedox-2024",
    storageBucket: "pokedox-2024.appspot.com",
    messagingSenderId: "594433661760",
    appId: "1:594433661760:web:440ad6fa2f5a14a5dc38a5",
    measurementId: "G-4WGS7LPTE7",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
