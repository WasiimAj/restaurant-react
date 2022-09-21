import './Checkout.css';

import { useEffect, useState } from 'react'
import axios from 'axios';
const Contact = () => {
    const [MyMeals, setMeal] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/cart')
        .then((res) => res.data)
        .then((meal) => {
            setMeal(meal)
        })
        .catch( (error) => {
            console.log(error)
        })
    }, [])

    return (
        <>
            <div className='foods-head'>
                <div className='Blur-div'>
                    <h1>Checkout</h1>
                </div>
            </div>

            <div className="Checkout">
                <div className='fields'>
                <h2>Shipping Address</h2>
                <input placeholder='Enter your name' />
                <input placeholder='Enter your email' />
                <input placeholder='Phone number' />
                <input placeholder='Country' />
                <input placeholder='City' />
                <input placeholder='Postal code' />

                <a href='/payment'>Payment</a>
                </div>

                <div className="final-price">
                    <h2>Subtotal: $  
                    {  MyMeals.reduce((total, item)=>total+(item.price*item.quantity),0).toFixed()}
                    </h2>
                    <h2>Shipping: $30</h2>
                    <hr/>
                    <h1>Total: $
                    {  MyMeals.reduce((total, item)=>total+(item.price*item.quantity),0 +30).toFixed()}
                    </h1>

                </div>
            </div>
        </>
    )
}

export default Contact