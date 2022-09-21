import './Section2.css';

import img1 from '../../Images/undraw_special_event_4aj8.png';
import img2 from '../../Images/undraw_Chef_cu0r.png';

const Section2 = () => {
    return (
        <>
            <div className="Section2">
                <div className="delivery">
                    <img src={img1} className='short-image' alt='error'/>
                    <h3>Quick Delivery</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officiis aut eius ad repellat totam?
                    </p>
                </div>
                <div className="delivery">
                    <img src={img2} className='short-image' alt='error'/>
                    <h3>Super Dine In</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officiis aut eius ad repellat totam?
                    </p>
                </div>
                <div className="delivery">
                    <img src={img1} className='short-image' alt='error'/>
                    <h3>Easy Pick Up</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officiis aut eius ad repellat totam?
                    </p>
                </div>
            </div>
        </>
    )
}

export default Section2