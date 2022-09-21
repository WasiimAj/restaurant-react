import './Section5.css';
import img1 from '../../Images/internet.png';

const Section5 = () => {
    return (
        <>
            <div className='customer-feedback'>
                <div className='feedback'>
                    <h3 className='orange'>Testimonial</h3>
                    <h1>What our <b className='orange'> customers</b> ary saying</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aspernatur nobis vitae excepturi eum consequuntur.
                    </p>
                    <br/>
                    <br/>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque dolore sit at ut ducimus illum eaque fuga totam hic laudantium. Ullam delectus sunt cumque excepturi.
                    </p>
                </div>
                <img src={img1} alt='error' />
            </div>
        </>
    )
}

export default Section5