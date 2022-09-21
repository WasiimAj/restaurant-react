import './signup.css';

const Signup = () => {
    return (
        <>
            <form className='form'>
                <h1>Signup</h1>
                <label>Full name</label>
                <input type='text' placeholder='Enter your Name' required/>
                <label>Email</label>
                <input type='email' placeholder='Enter your email' required/>
                <label>Password</label>
                <input type='password' placeholder='Enter your password' required/>
                <small>already have an account?<a href='/login'> Login</a></small>
                <a href='/' className='login'>Sign Up</a>
            </form>
        </>
    )
}

export default Signup