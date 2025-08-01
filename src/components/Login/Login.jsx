import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import auth from '../../Firebase/Firebase_init';

const Login = () => {

    const provider = new GoogleAuthProvider()

    const hendalGooglesignIn = () =>{
        console.log(auth, provider)
        signInWithPopup(auth,provider)
        .then((res)=>{
            console.log(res)
        })
        .catch(error=>{
            console.log("ERROR" ,error)
        })
    }
    return (
        <div>
            <button onClick={hendalGooglesignIn}>Hello Google</button>
        </div>
    );
};

export default Login;