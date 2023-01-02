import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDlxXajEgqufwuTezfwy9rDiYI17NzWB6o",
    authDomain: "web-auth-1d579.firebaseapp.com",
    projectId: "web-auth-1d579",
    storageBucket: "web-auth-1d579.appspot.com",
    messagingSenderId: "684842636495",
    appId: "1:684842636495:web:4366ef6e5967d1468253ba",
    measurementId: "G-WE1XTJCR68"
  };

  const app = initializeApp(firebaseConfig);



  export const Auth = getAuth(app)