import './Section4.css';
import img1 from '../../Images/delivery.png';

const Section4 = () => {
    return (
        <>
            <div className="delivery-man">
                <img  src={img1} alt='error'/>
                <div className='delivery-man-info'>
                    <h1>Whu <b className='orange'>Tasty Treat?</b></h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Officia possimus dignissimos earum qui quis? Ipsum quis ea a? Cumque eum, 
                        id vitae qui cupiditate aliquam dolor corrupti architecto temporibus quaerat.
                    </p>

                    <h2>✔️ Fresh and tasty foods</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, iste.</p>

                    <h2>✔️ Quality support</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, iste.</p>

                    <h2>✔️ Order from your location</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, iste.</p>
                </div>
            </div>
        </>
    )
}

export default Section4