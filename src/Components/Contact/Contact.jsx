import './Contact.css';

import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='foods-head'>
                <div className='Blur-div'>
                    <h1> Contact Us </h1>
                </div>
            </div>
            
            <form className='form'>
                <h1>What Is Your Message?</h1>
                <label>Full name</label>
                <input type='text' placeholder='Enter your Name' required/>
                <label>Email</label>
                <input type='email' placeholder='Enter your email' required/>
                <label>Phone</label>
                <input type='text' placeholder='Enter your Phone' required/>
                <label>Yore message</label>
                <input type='text' placeholder='Enter your message' required/>
                <a href='/thankyou' className='login'>Send</a>
            </form>
        </>
    )
}

export default Contact