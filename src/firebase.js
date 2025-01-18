import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCa2RBrcFb2Ydxq6UQUfEiiQqmnVFQB8kE",
  authDomain: "netflix-clone-6fb13.firebaseapp.com",
  projectId: "netflix-clone-6fb13",
  storageBucket: "netflix-clone-6fb13.firebasestorage.app",
  messagingSenderId: "907373438896",
  appId: "1:907373438896:web:995a1c026f86e81ca89875"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); //initialise authendtication
const db = getFirestore(app);   //initialise database

const signup = async (name,email,password)=>{
    try {
       const res = await createUserWithEmailAndPassword(auth,email,password);
       const user = res.user;
       await addDoc(collection(db,'user'),{
         uid : user.uid,
         name,
         authProvider : 'local',
         email,
       })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const login = async(email, password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const logout = ()=>{
    signOut(auth)
}

export {auth,db,signup,login,logout};