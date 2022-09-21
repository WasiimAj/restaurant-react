import './Section0.css';
import { useState, useEffect } from 'react';
import axios from 'axios';



const Section0 = () => {

    const [AllMeals, setMeals] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/meals')
        .then(res => res.data)
        .then(meal => setMeals(meal))
    }, [])

    const AddToCart = (name, price, quantity) => {
        axios.post('http://localhost:9000/cart', {
            name,
            price,
            quantity
        })
        .then(console.log('aded'),window.location.replace("/cart"))
    }

    return (
        <>
            <div className='foods-head'>
                <div className='Blur-div'>
                    <h1> All Foods</h1>
                </div>
            </div>

            <div className='food-menu'>
                {/* Search Header & Category */}
                <div className='search-nav'>
                <button type='submit'>🔎</button>
                    <input placeholder="I'm looking for .. "/>
                    <select name="foods" className='meun'>
                        <option value="pizza">Pizza</option>
                        <option value="burger">Burger</option>
                        <option value="grils">Grils</option>
                        <option value="shawerma">Shawerma</option>
                    </select>
                </div>

                {/* Food-menu */}
                <div className="big-div">
                    {AllMeals.map(meal => {
                        return (
                        <div className="food-type" key={meal.id}>
                            <img className='food-image' src={meal.mealImage} alt='error'/>
                            <h3>{meal.mealName}</h3>
                            <h4>${meal.mealPrice}</h4>
                        <button onClick={e => AddToCart(meal.mealName, meal.mealPrice,meal.Quantity)}>Add To Cart</button>
                        </div>
                        )
                    })}
                </div>

                <div className="move">
                    <a href='/'>Prev</a>
                    <a href='/'>1</a>
                    <a href='/'>2</a>
                    <a href='/'>Next</a>
                </div>

            </div>
            


        </>
    )
}

export default Section0