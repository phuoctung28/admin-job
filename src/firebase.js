import { initializeApp } from "firebase/app";
import firebaseConfig from "./configs/firebaseConfig";
import { getAuth } from "firebase/auth";
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
