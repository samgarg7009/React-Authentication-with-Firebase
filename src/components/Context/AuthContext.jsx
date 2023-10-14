import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    //⬆ there we are actually setting the user when creating them 
    //because firebase has it's own way to notify us when the user gets set

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    const resetpassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const updateEmail = (email) => {
        return (currentUser && currentUser.updateEmail(email))
    }

    const updatpassword = (password) => {
        return currentUser.updatPassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)

        })
        return unsubscribe
        // this will unsubcribe onAuthStateChanged whenever we unmount this component
    }
        //⬆ this allows us to set the user here so the user mentioned can be either current user or it'll null
        //so when we call createUserWithEmailAndPassword or any other component it'll call setCurrentUser and set the user

        , [])
    //put the component in useEffect because we only want to run this when we mount our component

    //make sure to unsubcribe this when done because
    ///onAuthStateChanged returns a method which upon being called will unsbscribe this on/off stateChanged event 
    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetpassword,
        updateEmail,
        updatpassword
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
// export { useAuth }
