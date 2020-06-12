import React, { createContext, useState } from 'react';

import localCart from '../utils/localCart';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  return (
    <CartContext.Provider value={{ cart, total, cartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
