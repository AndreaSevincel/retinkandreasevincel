import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






const firebaseConfig = initializeApp({
    apiKey: "AIzaSyDrvmoMZP9DavYyKVZFVj04EmVPLsaHpus",

  authDomain: "retink-9e268.firebaseapp.com",

  projectId: "retink-9e268",

  storageBucket: "retink-9e268.appspot.com",

  messagingSenderId: "404311962410",

  appId: "1:404311962410:web:3a2f049407943abb5f6453",

  measurementId: "G-7ZSJN1CMG1"
});

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  'login_hint': 'user@example.com'
});

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });