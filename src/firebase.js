//import firebase from "firebase/app";

// import {getFirestore} from "firebase/firestore";
// import "firebase/storage";
// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIRBASE_API_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIRBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIRBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIRBASE_API_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIRBASE_API_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_FIRBASE_API_ID,
// });

// 
// const db = getFirestore(app);
// export default db;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAyieiYpluyj4hfNNDW5O4N9hLO_Y04cYw",
  authDomain: "auth-production-d7ba3.firebaseapp.com",
  projectId: "auth-production-d7ba3",
  storageBucket: "auth-production-d7ba3.appspot.com",
  messagingSenderId: "503400167140",
  appId: "1:503400167140:web:bc4c25181a968eeed01ef1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);