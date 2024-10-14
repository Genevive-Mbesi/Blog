// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBkZD1vvMFrY3ty6rdSRxGH3EfRx9_lFfM",
    authDomain: "react-73302.firebaseapp.com",
    projectId: "react-73302",
    storageBucket: "react-73302.appspot.com",
    messagingSenderId: "388928969037",
    appId: "1:388928969037:web:c5423656921cb838963f04",
    measurementId: "G-Y3M28NDMVZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
