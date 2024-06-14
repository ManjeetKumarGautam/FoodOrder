import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";
import { assets } from '../../assets/assets';
const Cart = () => {

    const { cartItems, food_list, addToCart, deleteFromCart, removeFromCart, getTotalCartAmount, deliveryAmount, url } = useContext(StoreContext);

    const navigate = useNavigate();

    return (
        <div className='cart'>
            {/* <div className="cart-items">
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
                        if (cartItems[item.id] > 0) {
                            return (
                                <>
                                    <div key={index} className="cart-items-title cart-items-item">
                                        <img src={url + "/food/image/" + item.imageName} alt="" />
                                        <p>{item.name}</p>
                                        <p>$ {item.price}</p>
                                        <p>{cartItems[item.id]}</p>
                                        <p>$ {item.price * cartItems[item.id]}</p>
                                        <p className='cross' onClick={() => removeFromCart(item.id)}><FaTrash /></p>
                                    </div>
                                    <hr />
                                </>
                            )
                        }
                    })
                }
            </div> */}


            <table className="cart-items">
                <tr className="cart-items-title cart-items-title-heading">
                    <th>Items</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>


                {
                    food_list.map((item, index) => {
                        if (cartItems[item.id] > 0) {
                            return (
                                <>
                                    <tr key={index} className="cart-items-title cart-items-item">
                                        <td>
                                            <img src={url + "/food/image/" + item.imageName} alt="" />
                                        </td>

                                        <td>{item.name}</td>
                                        <td>$ {item.price}</td>
                                        {/* <td>{cartItems[item.id]}</td> */}
                                        <td >
                                            <div className='qty'>
                                                {
                                                    cartItems[item.id] == 1 ? '' : <img className='qty-icon' onClick={() => removeFromCart(item.id)} src={assets.remove_icon_red} alt="" />
                                                }

                                                <p>{cartItems[item.id]}</p>
                                                <img className='qty-icon' onClick={() => addToCart(item.id)} src={assets.add_icon_green} alt="" />
                                            </div>
                                        </td>
                                        <td>$ {item.price * cartItems[item.id]}</td>
                                        <td className='cross' onClick={() => deleteFromCart(item.id)}><FaTrash /></td>
                                    </tr>
                                </>
                            )
                        }
                    })
                }
            </table>


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