import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../firebase/firebase.init';


export const authContext = createContext()

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const UserContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(true)

    //Signup With google
    const googleSignup = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const presentUser = result.user

                alert(presentUser?.displayName)
            })
            .catch(error => alert(error))
    }

    //email and password signup
    const emailAndPasswordSignUp = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // updateProfile(auth.currentUser, {
                //     displayName: name
                // })
                //     .than(() => {
                //     })
                //     .catch(() => {
                //     })
                alert("Sign Up successful")

            })
            .catch(error => {
                alert(error)
            })
    }

    //Log In 
    const userEmailAndPasswordLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                alert("login successful")


            })
            .catch(error => {
                alert(error)
            })
    }


    ///check state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })
        return unsubscribe()
    }, [])


    //Log Out
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(() => { })
    }

    const authInfo = { user, googleSignup, emailAndPasswordSignUp, userEmailAndPasswordLogIn, logout, loader }
    return (
        <div>
            <authContext.Provider value={authInfo}>{children}</authContext.Provider>
        </div>
    );
};

export default UserContext;