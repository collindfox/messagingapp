"use strict";

import React, { useRef, useState } from "react";
import "./App.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDQyMIQ66TaKQ9oaAhfU0RvqT7DLXholwo",
  authDomain: "basic-messages.firebaseapp.com",
  projectId: "basic-messages",
  storageBucket: "basic-messages.appspot.com",
  messagingSenderId: "731937303281",
  appId: "1:731937303281:web:980a927fcb319ecd4f5750",
  measurementId: "G-YNG84L7HTS",
});
const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();
function App() {
  const [user] = useAuthState(auth);
}
