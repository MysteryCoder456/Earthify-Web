import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCFEnFySHtQTgRBs0128lawmwfWupfajFo",
    authDomain: "earthify-886cf.firebaseapp.com",
    projectId: "earthify-886cf",
    storageBucket: "earthify-886cf.appspot.com",
    messagingSenderId: "207963653599",
    appId: "1:207963653599:web:81b889cee90f9f7bccf06a",
    measurementId: "G-KD51HZ5SSF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
