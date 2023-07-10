import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyD33vnNM3r30lY61h0em1dZODwDzde5G9U',
  authDomain: 'board-634e6.firebaseapp.com',
  projectId: 'board-634e6',
  storageBucket: 'board-634e6.appspot.com',
  messagingSenderId: '888954487837',
  appId: '1:888954487837:web:1fc2ad636ca5e78d49b2f4',
  measurementId: 'G-89XE1E7RW4',
};

initializeApp(firebaseConfig);
export const auth = getAuth();
