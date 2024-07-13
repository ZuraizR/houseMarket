import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBEZuFOjkWNlCOo2lp56H5s5UR4YCH3WEk',
  authDomain: 'house-market-app-8973d.firebaseapp.com',
  projectId: 'house-market-app-8973d',
  storageBucket: 'house-market-app-8973d.appspot.com',
  messagingSenderId: '384902521937',
  appId: '1:384902521937:web:eeffada915e3a03618c470',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
