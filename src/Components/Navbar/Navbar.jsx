import './navbar.css'
import logo from '../../Images/logo.jpg';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import PersonIcon from '@mui/icons-material/Person';


function Navbar () {

    return(
        <>
            <div className='Navbar' id='header'>
                <div className='Container'>
                    <img src={logo} className='logo' alt='logo'/>
                    <ul className='UL'>
                        <li className='LI'><a href='/'>Home</a></li>
                        <li className='LI'><a href='/foods'>Foods</a></li>
                        <li className='LI'><a href='/cart'>Cart</a></li>
                        <li className='LI'><a href='/contact'>Contact</a></li>
                    </ul>

                    <ul className='UL2'>
                        <li>
                            <a href='/cart' className='notfication' id='notfication'><LunchDiningIcon/></a>
                        </li>
                        <li>
                            <a href='/login'><PersonIcon/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Navbar;