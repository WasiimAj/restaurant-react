import './AddProduct.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const AddProduct = () => {

    const Add = () => {
        const addTool = document.getElementById('add-meal');
        const deleteTool = document.getElementById('delete-meal');
        const applicationTools = document.getElementById('application');

        addTool.style.display = 'block';
        deleteTool.style.display = 'none';
        applicationTools.style.display = 'none';

        const active1 = document.getElementById('nav-active1');
        const active2 = document.getElementById('nav-active2');
        const active3 = document.getElementById('nav-active3');

        active1.style.backgroundColor = '#ed8f00';
        active2.style.backgroundColor = '#323232';
        active3.style.backgroundColor = '#323232';

    }

    const Delete = () => {
        const addTool = document.getElementById('add-meal');
        const deleteTool = document.getElementById('delete-meal');
        const applicationTools = document.getElementById('application');

        addTool.style.display = 'none';
        deleteTool.style.display = 'block';
        applicationTools.style.display= 'none';

        const active1 = document.getElementById('nav-active1');
        const active2 = document.getElementById('nav-active2');
        const active3 = document.getElementById('nav-active3');

        active1.style.backgroundColor = '#323232';
        active2.style.backgroundColor = '#ed8f00';
        active3.style.backgroundColor = '#323232';
    }

    const Applications = () => {
        const addTool = document.getElementById('add-meal');
        const deleteTool = document.getElementById('delete-meal');
        const applicationTools = document.getElementById('application');

        addTool.style.display = 'none';
        deleteTool.style.display = 'none';
        applicationTools.style.display= 'block';

        const active1 = document.getElementById('nav-active1');
        const active2 = document.getElementById('nav-active2');
        const active3 = document.getElementById('nav-active3');

        active1.style.backgroundColor = '#323232';
        active2.style.backgroundColor = '#323232';
        active3.style.backgroundColor = '#ed8f00';
    }

    const [chefs, setChef] = useState([]);

    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const [upload_image, setImage] = useState('');
    const [mealImage, setImageURL] = useState('');
    const [mealName, setMealName] = useState('');
    const [Quantity, setMealQuantity] = useState('');
    const [mealPrice, setmealPrice] = useState();
    const [category, setMealCategory] = useState('');

    const AddNewMeal = () => {
        axios.post('http://localhost:9000/meals', {
            mealImage,
            mealName,
            mealPrice,
            category,
            Quantity:1
        })
        .then(window.location.href = '/foods')
    }

    const GetAllChifs = () => {
        axios.get('http://localhost:9000/chif')
        .then((res) => res.data)
        .then(chif => setChef(chif))
    }

    const AddNewChif = (e) => {
        axios.post('http://localhost:9000/chif', {
            name,
            email,
            password,
            Verified: true
        })
        .then(GetAllChifs)
    }

    const RejectApplication = (e, id) => {
        e.preventDefault();
        axios.delete(`http://localhost:9000/chif/${id}`)
        .then(GetAllChifs)
    }

    const [meals, setMeals] = useState([])

    const GetAllMeals = () => {
        axios.get('http://localhost:9000/meals')
        .then(res => res.data)
        .then(meal => setMeals(meal))
    }

    const DeleteMeal = (e, id) => {
        axios.delete(`http://localhost:9000/meals/${id}`)
        .then(GetAllMeals)

    }

    useEffect(() => {
        GetAllChifs()
        GetAllMeals()
    }, [])

    return (
        <>
            <div className='admin-tools'>
                <ul>
                    <li id='nav-active1'><a onClick={Add} href='##'>Add Meal</a></li>
                    <li id='nav-active2'><a href='##' onClick={Delete}>Delete Meal</a></li>
                    <li id='nav-active3'><a href='##' onClick={Applications}>Membership Applications</a></li>
                </ul>
            </div>

            <div id='add-meal' className="product-add-delete">
                <h1>Add Meal</h1>
                <label className='product-title'>Meal Image</label>
                <input  type='file' placeholder='png | jpg | jpeg' />
                <label className='product-title'>URL Image</label>
                <input onChange={e => setImageURL(e.target.value)} placeholder='http://www.images.com' />
                <label className='product-title'>Meal Name</label>
                <input onChange={e => setMealName(e.target.value)} placeholder='Exam: Burger King' />
                <label className='product-title'>Meal Price</label>
                <input onChange={e => setmealPrice(e.target.value)} placeholder='Exam: $22' />
                <label className='product-title'>Meal Category</label>
                <input onChange={e => setMealCategory(e.target.value)} placeholder='Exam: burger' />
                <input type='hidden'  onChange={e => Quantity(1)} placeholder='Exam: burger' />
                
                <button onClick={AddNewMeal} type='submit'>Add Meal</button>
            </div>
            <div id='delete-meal' className='applications'>
                <h1>Delete Meal</h1>
                <table>
                    <tr>
                        <th> 📋 Meal Image</th>
                        <th> 🍔 Meal Name</th>
                        <th> ✔️ Meal Price</th>
                        <th> ❌ Delete</th>
                    </tr>
                    {meals.map(meal => {
                        return (
                            <tr>
                            <td key={meal.id}><img className='meal-image' src={meal.mealImage} alt={meal.mealName} /></td>
                            <td>{meal.mealName}</td>
                            <td>{meal.mealPrice}</td>
                            <td>
                                <button onClick={e => DeleteMeal(e, meal.id)} className='delete'>❌</button>
                            </td>
                        </tr>
                        )
                    })}
                </table>
            </div>
            <div id='application' className='applications'>
                <h1>Membership applications</h1>
                <table>
                    <tr>
                        <th> 📋 Chef's name</th>
                        <th> 📧 Chef's email</th>
                        <th> ✔️ Acceptance</th>
                        <th> ❌ reject</th>
                    </tr>
                    
                    {chefs.map(chif => {
                        return (
                            <tr>
                            <td key={chif.id}>{chif.name}</td>
                            <td>{chif.email}</td>
                            <td>
                                <button className='add'>✔️</button>
                            </td>
                            <td>
                                <button onClick={e => {RejectApplication(e ,chif.id)}} className='delete'>❌</button>
                            </td>
                        </tr>
                        )
                    })}
                    
                    <tr>
                        <td>
                            <input 
                                type='text' 
                                className='chef-input' 
                                placeholder="Chef's Name"
                                onChange={e => setName(e.target.value)}
                            />
                        </td>
                        <td>
                            <input 
                                type='email' 
                                className='chef-input' 
                                placeholder="Chef's Email"
                                onChange={e => setemail(e.target.value)}
                            />
                        </td>
                        <td>
                            <input 
                                type='password' 
                                className='chef-input' 
                                placeholder="Chef's Password"
                                onChange={e => setpassword(e.target.value)}
                                />
                            </td>
                        <td>
                            <button 
                            className='add' 
                            onClick={e => AddNewChif()}
                            >✔️</button>
                        </td>
                    </tr>
                    </table>
            </div>
        </>
    )
}

export default AddProduct;


