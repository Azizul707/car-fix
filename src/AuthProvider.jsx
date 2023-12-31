/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./Firebase/firebaseConfig";

export const AuthContext = createContext();

const AuthProvider = ( { children } ) => {

    const [ user, setUser ] = useState( null );
    const [ loading, setLoading ] = useState( true );

    const auth = getAuth( app )
    const createUser = ( email, password ) => {
        setLoading( true );
        return createUserWithEmailAndPassword( auth, email, password );
    }

    const singIn = ( email, password ) => {
        setLoading( true );
        return signInWithEmailAndPassword( auth, email, password );
    }



    useEffect( () => {
        const unSubscribe = onAuthStateChanged( auth, user => {
            setUser( user );

        } )
        return () => {
            unSubscribe();
        }
    }, [] )

    const singOut = () => {
        return signOut( auth );
    }



    const authInfo = {
        user,
        createUser,
        singIn,
        singOut,
        loading,
    }


    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;