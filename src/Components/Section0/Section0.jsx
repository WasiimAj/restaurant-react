import './Section0.css';
import img1 from '../../Images/order.png';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function Home () {
    return (
        <>
            <div className="homeSection">
                <div className='UI-text'>
                    <h3>Easy way to make an order</h3>
                    <h1>Hungry? <b>Just wait <br/> food at </b> your door</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, libero? Sequi autem alias accusantium deserunt.
                    </p>
                    
                    <a className='order-btn' href='/cart'>Order Now  ⦊</a>
                    <a className='allfoods-btn' href='/foods'>See all foods </a>

                    <span className='icons'><DirectionsCarIcon className='orange'/>
                        No shiping charge
                    </span>
                    <span className='icons'><AdminPanelSettingsIcon className='orange'/>
                        100% Secure checkout
                    </span>
                </div>
                <img className='Image' src={img1} alt='Order'/>
            </div>
        </>
    )
}


export default Home;