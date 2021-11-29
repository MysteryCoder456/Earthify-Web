import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCFEnFySHtQTgRBs0128lawmwfWupfajFo",
    authDomain: "earthify-886cf.firebaseapp.com",
    projectId: "earthify-886cf",
    storageBucket: "earthify-886cf.appspot.com",
    messagingSenderId: "207963653599",
    appId: "1:207963653599:web:81b889cee90f9f7bccf06a",
    measurementId: "G-KD51HZ5SSF",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
