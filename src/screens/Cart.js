import React, { useEffect, useState } from 'react'
import { useCart } from '../hooks/useCart'

export const Cart = () => {
    const { cart } = useCart();
    const [cartItems, setCartItems] = useState([]);
    
    return (
        <div className='main_container'>
            {cartItems.map(item => {
                return <div className='cart'>
                    <h3>{item.name}</h3>
                    <h4>quantity : {item.count}</h4>
                    <h4>price : {item.price * item.count}</h4>
                </div>
            })}
        </div>
    )
}