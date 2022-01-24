import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api';
const locallySourcedToken = localStorage.getItem('token');

const LoginForm = () => {
    
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        const loginUser = async (usernameInput, passwordInput) => {
        
            try {
                const response = await fetch(`${BASE_URL}/users/login`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                         
                            username: usernameInput,
                            password: passwordInput,
                        
                    })
                })
                console.log('this is the response:', response)
        
                if (response) {
                    const  { token }  = await response.json();
                    console.log("this is the token:", token)
                    localStorage.setItem("token", token)
                    
                }
            } catch (err) {
                console.log(err);
            }
        }
        loginUser(username, password)
        setUsername('');
        setPassword('');
    }
        
        
    

    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <h2>Log In</h2>

                <input type='text' placeholder='Username' value={username} onChange={(event) => setUsername(event.target.value)}>
                </input>
                <br></br>
                <br></br>
                <input type='text' placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)}>
                </input>
                <br></br>
                <br></br>
                <button type='submit'>
                    Log In
                </button>

                <div>
                    {
                        locallySourcedToken && locallySourcedToken.length ? <div> Logged In </div> : ''
                    }
                </div>
            </form>
        </div>


    )

}

export default LoginForm;