import React from "react";
import ReactDOM from "react-dom/client";
import './style.css';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Foods from './Components/Foods/Section0-Foods/Section0';
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup';
import Contact from "./Components/Contact/Contact";
import Thank from './Components/Thankyou/Thank.jsx';
import Payment from "./Components/Payment/Payment";
import AddProduct from "./Components/AddProduct/AddProduct";
import Done from './Components/Done/Done.jsx';
import Order from './Components/Orders/Order.jsx';

import { BrowserRouter, Route , Routes} from "react-router-dom";



const App = () => {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/foods" element={<Foods/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/thankyou" element={<Thank />}/>
                    <Route path="/Payment" element={<Payment />}/>
                    <Route path="/addproudct" element={<AddProduct />}/>
                    <Route path="/done" element={<Done />}/>
                    <Route path="/order" element={<Order />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
