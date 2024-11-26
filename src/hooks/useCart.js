import { useState } from 'react'
export const useCart = () => {
    const [cart, setCart] = useState();

    const setCartItems = (cartItem) => {
        if (cart?.length)
            setCart([...cart, cartItem])
        else
            setCart(cartItem)
    }
    return {
        cart,
        setCartItems,
    }
}