// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, initializeFirestore } from 'firebase/firestore'; // Import Firestore
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase config from Constants
const firebaseConfig = {
  apiKey: "AIzaSyDqEDCO-IzgO68Lo7MOtK_kHxlsqGPAHAo",
  authDomain: "winghacks2025.firebaseapp.com",
  projectId: "winghacks2025",
  storageBucket: "winghacks2025.firebasestorage.app",
  messagingSenderId: "116000525258",
  appId: "1:116000525258:web:aa5f688e9010694603dd33"
};

// Initialize Firebase

// Initialize Firestore

const app = initializeFirestore(app, {experimentalAutoDetectLongPolling: true});
const db = getFirestore(app);


// Initialize Auth (Optional for your app, adjust if necessary)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { db, auth };
