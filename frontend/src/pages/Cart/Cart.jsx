import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

    const { cartItems, food_list, removeFromCart, getTotalCartAmount, deliveryAmount } = useContext(StoreContext);

    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title cart-items-title-heading">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Qty</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {
                    food_list.map((item, index) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <>
                                    <div key={index} className="cart-items-title cart-items-item">
                                        <img src={item.image} alt="" />
                                        <p>{item.name}</p>
                                        <p>$ {item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>$ {item.price * cartItems[item._id]}</p>
                                        <p className='cross' onClick={() => removeFromCart(item._id)}>X</p>
                                    </div>
                                    <hr />
                                </>
                            )
                        }
                    })
                }
            </div>
            <div className="cart-bottom">
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
                    <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>

                <div className="cart-prormocode">
                    <div>
                        <p>If you have a promo code, Enter it here</p>
                        <div className="cart-promocode-input">
                            <input type="text" name="" id="" placeholder='Promo Code' />
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart