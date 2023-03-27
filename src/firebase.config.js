
import { initializeApp } from "firebase/app";
import  {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyADlmFXmTehUI4qcPoRMOp2o-s4jO_g4zQ",
  authDomain: "hstores-faa71.firebaseapp.com",
  projectId: "hstores-faa71",
  storageBucket: "hstores-faa71.appspot.com",
  messagingSenderId: "409354653408",
  appId: "1:409354653408:web:dabec47282a15c936fca85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth  = getAuth(app);
export const db = getFirestore(app);
export  const storage = getStorage(app)

export default app;