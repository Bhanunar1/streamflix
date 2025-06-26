// Firebase configuration will be set up here
// Note: You'll need to add your Firebase config after setting up your Firebase project

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// You'll need to replace this with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyALpqZxVS1_MbQtuMxQxNANKDDrP4-jQPw",
  authDomain: "streamflix-b5fcd.firebaseapp.com",
  projectId: "streamflix-b5fcd",
  storageBucket: "streamflix-b5fcd.firebasestorage.app",
  messagingSenderId: "517216061084",
  appId: "1:517216061084:web:97cd24c56dbccd0f360f59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Analytics (only in browser environment)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;