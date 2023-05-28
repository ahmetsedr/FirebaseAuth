import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


const firebaseConfig = {

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);