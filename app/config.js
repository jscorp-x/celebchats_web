import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "celebchats-753f8.firebaseapp.com",
  projectId: "celebchats-753f8",
  storageBucket: "celebchats-753f8.firebasestorage.app",
  messagingSenderId: "942243350645",
  appId: "1:942243350645:web:888ecb289aa82358de103c",
  measurementId: "G-2S9E1J3RXJ"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};

