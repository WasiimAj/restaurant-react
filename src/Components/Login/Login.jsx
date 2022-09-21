import './Login.css';

import React from 'react'

const Login = () => {
    return (
        <>
            <form className='form'>
                <h1>Login</h1>
                <label>Email</label>
                <input type='email' placeholder='Enter your email' required/>
                <label>Password</label>
                <input type='password' placeholder='Enter your password' required/>
                <small>Don't have an account yet?<a href='/signup'> SignUp</a></small>
                <a href='/' className='login'>Login</a>
            </form>
        </>
    )
}

export default Login