import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({ item }) => {

    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-img' src={url + "/food/image/" + item.imageName} alt="" />
                {
                    !cartItems[item.id] ?
                        <img className='add' onClick={() => addToCart(item.id)} src={assets.add_icon_white} alt="" /> :
                        <div className='food-item-counter'>
                            <img onClick={() => removeFromCart(item.id)} src={assets.remove_icon_red} alt="" />
                            <p>{cartItems[item.id]}</p>
                            <img onClick={() => addToCart(item.id)} src={assets.add_icon_green} alt="" />
                        </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{item.name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='food-item-desc'>{item.description}</p>
                <p className='food-item-price'>${item.price}</p>
            </div>
        </div>
    )
}

export default FoodItem