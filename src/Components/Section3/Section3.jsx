import './Section3.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Section3 = () => { 

    const [meals, setMeals] = useState([]);

    const show = () => {
        window.location.replace("/cart");
    }

    useEffect(() => {
        axios.get('http://localhost:9000/meals')
        .then(res => res.data)
        .then(meal => setMeals(meal))
    }, [])

    const AddToCart = ( name, price, quantity) => {
        axios.post('http://localhost:9000/cart', {
            name,
            price,
            quantity
        })
        .then(show)
    }

    return (
        <>
            <header className="header">Popular Foods</header>

            <nav className='food-navbar'>
                <ul>
                    <li><a href='/'>All</a></li>
                    <li><a href='/'>Burger</a></li>
                    <li><a href='/'>Pizza</a></li>
                    <li><a href='/'>Kentachi</a></li>
                </ul>
            </nav>
            

            <div className='Foods'>
                {meals.map(meal => {
                    return (
                        <div id='success' className="food-type" key={meal.id}>
                            <img className='food-image' src={meal.mealImage} alt='error'/>
                            <h3>{meal.mealName}</h3>
                            <h4>${meal.mealPrice}</h4>
                            <button onClick={(e => AddToCart(meal.mealName,meal.mealPrice,meal.Quantity))}>Add To Cart</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Section3