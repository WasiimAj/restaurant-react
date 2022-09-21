import './Footer.css';
import logo from '../../Images/logo.jpg';

const Footer = () => {


    return (
        <>
            <div className='resturent-info'>
                <div className='section-1'>
                    <img src={logo} alt='logo-icon' />
                </div>
                <div className="section-2">
                    <h2>Uncle Sammy</h2>
                    <p>📅 SINCE-1974</p>
                    <p>🧾 Wasiim A. Ajrami</p>
                    <p>📱 +(972) 059 972 5919</p>
                </div>
                <div className="section-3">
                    <h2>Contact Us</h2>
                    <p>📧 ajramewasem@gmail.com</p>
                    <p>🗺️ (Ps) Palstine, Gaza, Jabalya Camp</p>
                    <p>📠 +1 555 4444</p>
                </div>
                <div className="section-3">
                    <input placeholder='suggest something?'/>
                    <button>suggest</button>
                </div>
            </div>
        </>
    )
}

export default Footer