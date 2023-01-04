// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJF1hb32mAIjTzgD-oPPMBjuBQb4Gcyek",
  authDomain: "facebook-clone-fbefa.firebaseapp.com",
  projectId: "facebook-clone-fbefa",
  storageBucket: "facebook-clone-fbefa.appspot.com",
  messagingSenderId: "599698230067",
  appId: "1:599698230067:web:57445736b3e989ff9f0c46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);