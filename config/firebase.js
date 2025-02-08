// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase config from Constants
const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.apiKey,
  authDomain: Constants.expoConfig?.extra?.authDomain,
  projectId: Constants.expoConfig?.extra?.projectId,
  storageBucket: Constants.expoConfig?.extra?.storageBucket,
  messagingSenderId: Constants.expoConfig?.extra?.messagingSenderId,
  appId: Constants.expoConfig?.extra?.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth (Optional for your app, adjust if necessary)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { db, auth };
