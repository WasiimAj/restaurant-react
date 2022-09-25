import './Payment.css';
import img1 from '../../Images/visa.png';
const Payment = () => {
    return (
        <>
            <div className='foods-head'>
                <div className='Blur-div'>
                    <h1> Payment </h1>
                </div>
            </div>
            <div className='payment'>
                <img className='payment-logo' src={img1}/>
                <form>
                <label>Card Number</label>
                <input placeholder='Examble: 4321 2587 1597 2548'/>
                <label>Card Holder</label>
                <input placeholder='Examble: Johan M. Tomas'/>
                <label>Card Expiry Date</label>
                <input placeholder='Examble: 06/22'/>
                <label>CCV</label>
                <input placeholder='Examble: 123'/>

                <a href='/done' className='btn'>Pay</a>
                </form>

            </div>
        </>
    )
}
// aa:03:85:16:51:fa
export default Payment