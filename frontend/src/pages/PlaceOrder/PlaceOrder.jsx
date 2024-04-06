import React, { useContext } from 'react'
import './PlaceOrder.css'
const PlaceOrder = () => {

    const { getTotalCartAmount, deliveryAmount } = useContext(StoreContext);

    return (
        <div className='place-order'>
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className='multi-fields'>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Street' />
                <div className='multi-fields'>
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>
                <div className='multi-fields'>
                    <input type="text" placeholder='Country' />
                    <input type="text" placeholder='Pincode' />
                </div>
                <input type="text" placeholder='Phone Number' />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div className="cart-total-details">
                        <p>Sub Totals</p>
                        <p>$ {getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>$ {getTotalCartAmount() === 0 ? 0 : deliveryAmount}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details total">
                        <p>Total</p>
                        <p>$ {getTotalCartAmount() === 0 ? 0 : (getTotalCartAmount() + deliveryAmount)}</p>
                    </div>
                    <button>PROCEED TO PAYMENT</button>

                </div>
            </div>
        </div>
    )
}
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
export default PlaceOrder