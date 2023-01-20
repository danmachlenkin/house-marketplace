import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA8VQyqnc8dImJA-a8GliFd6gLLdw94vaM",
  authDomain: "house-marketplace-87338.firebaseapp.com",
  projectId: "house-marketplace-87338",
  storageBucket: "house-marketplace-87338.appspot.com",
  messagingSenderId: "878813929470",
  appId: "1:878813929470:web:eb2194b0c8de7972202aaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);