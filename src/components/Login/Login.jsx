import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';

const Login = () => {

    const provider = GoogleAuthProvider()

    const hendalGooglesignIn = () =>{
        console.log('Google heool')
    }
    return (
        <div>
            <button onClick={hendalGooglesignIn}>Hello Google</button>
        </div>
    );
};

export default Login;