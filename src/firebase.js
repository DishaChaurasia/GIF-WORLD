// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6OKigbmcs9_uWVPcSsJCmAYVD_ssesCY",
  authDomain: "giphy-4c423.firebaseapp.com",
  projectId: "giphy-4c423",
  storageBucket: "giphy-4c423.appspot.com",
  messagingSenderId: "1099388402736",
  appId: "1:1099388402736:web:ede7266a7b394543d781f5",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;