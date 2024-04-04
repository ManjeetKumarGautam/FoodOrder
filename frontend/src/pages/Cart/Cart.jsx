import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
const Cart = () => {

    const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
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
                                    <div className="cart-items-title cart-items-item">
                                        <img src={item.image} alt="" />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>${item.price * cartItems[item._id]}</p>
                                        <p className='cross' onClick={() => removeFromCart(item._id)}>X</p>
                                    </div>
                                    <hr />
                                </>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Cart