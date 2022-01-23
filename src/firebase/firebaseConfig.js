import {GoogleAuthProvider} from 'firebase/auth'
import { FacebookAuthProvider } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
 
const firebaseConfig = {
  apiKey: "AIzaSyDMAwLCUIEa6OTSTzpdvVRAxFGy7afgUxU",
  authDomain: "recetas-f58f7.firebaseapp.com",
  projectId: "recetas-f58f7",
  storageBucket: "recetas-f58f7.appspot.com",
  messagingSenderId: "598094234752",
  appId: "1:598094234752:web:3f273d4768012c07129265"
};

const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();
const facebook = new FacebookAuthProvider()
const db = getFirestore();
export  {
    app,
    google,
    facebook,
    db
}