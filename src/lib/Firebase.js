
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC37A8GxmXbEWcWKK8cDTTlSQctw_aEFaQ",
    authDomain: "srishtisinghportfolio.firebaseapp.com",
    projectId: "srishtisinghportfolio",
    storageBucket: "srishtisinghportfolio.appspot.com",
    messagingSenderId: "647281764938",
    appId: "1:647281764938:web:406dfaf8181df5cd8f54b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app)

export { storage };