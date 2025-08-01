import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../Firebase/Firebase_init';

const Login = () => {

    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);

    const hendalGooglesignIn = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                console.log(res.user); // ঠিক প্রপার্টি
                setUser(res.user);     // ঠিকভাবে সেট করা
            })
            .catch(error => {
                console.log("ERROR", error);
                setUser(null);
            });
    };
    const hendalSignout=()=>{
        signOut(auth)
        .then(()=>{
            console.log("Sign out successfully ")
            setUser(null)
        })
        .catch(er => {
            console.log(er)
            
        })
    }

    return (
        <div>
            {/* <button onClick={hendalGooglesignIn}>Sign in with Google</button>
            <button onClick={hendalSignout}>Sign out</button> */}
            {
                user ? <button onClick={hendalSignout}>Sign out</button> : <button onClick={hendalGooglesignIn}>Sign in with Google</button>
            }
            
                {
                    user && <div>
                        <h2>{user.displayName}</h2>
                        <h2>{user.email}</h2>
                    </div>
                }
            
        </div>
    );
};

export default Login;
