import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore , collection , onSnapshot , deleteDoc, addDoc , doc} from 'firebase/firestore';
import { useEffect  } from 'react';
import { useDispatch } from 'react-redux';
import { setUse } from '../../slices/basketSlice';



const firebaseConfig = {
    apiKey: "AIzaSyCnwCp41WUSBCUIqiisMAx9lP6EZWK5lbU",
    authDomain: "shopping-p-152d9.firebaseapp.com",
    projectId: "shopping-p-152d9",
    storageBucket: "shopping-p-152d9.appspot.com",
    messagingSenderId: "1050782429972",
    appId: "1:1050782429972:web:5a26b75272cf2835428801",
    measurementId: "G-MDPSR8119E"
  };


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export const db = getFirestore(app);
export const ref = collection(db , "items");

export const useProductListener =()=>{

  const dispatch = useDispatch();

  useEffect(()=>{
    return onSnapshot(ref , (snapshot) =>{
      dispatch(setUse(
        snapshot.docs.map((doc)=> ({id : doc.id ,...doc.data()}))
        ));
    });
  },[])
};

export const deleteProduct =(id)=>{
deleteDoc(doc(db , 'items' ,id))
}

export const addProduct = (basket)=>{
 const uid = auth.currentUser?.uid
 if(!uid) return;
  addDoc(ref , { 
    item : basket,
    uid : uid
  })
}