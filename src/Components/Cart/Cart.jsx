import './Cart.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Cart = () => {

    const [MyMeals, setMeal] = useState([]);

    const GetAllMealsInCart = () => {
        axios.get('http://localhost:9000/cart')
        .then((res) => res.data)
        .then((meal) => {
            setMeal(meal)
        })
        .catch( (error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        GetAllMealsInCart()
    }, [])

    const CancelOrder = (e, id) => {
        e.preventDefault();
        axios.delete(`http://localhost:9000/cart/${id}`)
        .then(() => {
            GetAllMealsInCart()
        })
    }

    

    return (
        <>
            <div className='foods-head'>
                <div className='Blur-div'>
                    <h1> My Cart</h1>
                </div>
            </div>

            <div className='cart-orders'>
                <table>
                    <tr>
                        <th>🍔 Meal name</th>
                        <th>💵 Price</th>
                        <th>🔖 Quantity</th>
                        <th>🗑️ Cancelling order</th>
                    </tr>
                    {MyMeals.map(meal => {

                        return (
                                <tr key={meal.id}>
                                            <td>{meal.name}</td>
                                            <td>${meal.price}</td>
                                            <td>&times;{meal.quantity}</td>
                                            <td>
                                                <button onClick={(e) => CancelOrder(e, meal.id)} className='delete'>❌</button>
                                            </td>
                                        </tr>
                        )
                    })}

                    </table>
            </div>
            

            <div className="sub-total">
            
                <h3>Subtotal: $<p>
                    {  MyMeals.reduce((total, item)=>total+(item.price*item.quantity),0).toFixed()}
                </p></h3>
                <p>
                    Taxes and shiping will calculate at checkout
                </p>
                <a href='/'>Continue Shoping</a>
                <a href='/checkout'>Proceed to checkout</a>
            </div>
        </>
    )
}

export default Cart