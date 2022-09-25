import './Order.css';

const Order = () => {
    return (
        <>
            <div className='foods-head'>
                <div className='Blur-div'>
                    <h1>Orders</h1>
                </div>
            </div>

            <div className='cart-orders'>
                <table>
                    <tr>
                        <th>🍔 Meal name</th>
                        <th>🔖 Quantity</th>
                        <th> 🛎  Take Order</th>
                        <th>🗑️ Cancelling order</th>
                    </tr>
                        <tr>
                            <td>فاصولياء</td>
                            <td>&times; 2</td>
                            <td>
                                <button className='add'>✔️</button>
                            </td>
                            <td>
                                <button className='delete'>❌</button>
                            </td>
                        </tr>
                        <tr>
                            <td>ملوخية</td>
                            <td>&times; 1</td>
                            <td>
                                <button className='add'>✔️</button>
                            </td>
                            <td>
                                <button className='delete'>❌</button>
                            </td>
                        </tr>
                    </table>
            </div>
        </>
    )
}

export default Order;