import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjZwDsbUvbmXPEjVSON172bR8eg8_eSuA",
  authDomain: "discord-clone-8a1e3.firebaseapp.com",
  projectId: "discord-clone-8a1e3",
  storageBucket: "discord-clone-8a1e3.firebasestorage.app",
  messagingSenderId: "55265628518",
  appId: "1:55265628518:web:0984f1792d5e87ac8638a7",
  measurementId: "G-8M0ST6VMTP"
};

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);
const authentication = getAuth(app);
const provider = new GoogleAuthProvider();

export { dataBase, authentication, provider }; 
