// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAX7iJ7SphwTSVpigUuGwVEncgcmH2huCQ",
authDomain: "e-bazaar-3fae6.firebaseapp.com",
projectId: "e-bazaar-3fae6",
storageBucket: "e-bazaar-3fae6.appspot.com",
messagingSenderId: "496727894829",
  appId: "1:496727894829:web:c6ab5a87033033cdcc41a4",
  measurementId: "G-FCTS5CCXBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;