import React, { createContext, useState, useEffect } from 'react';

import localCart from '../utils/localCart';
// import cartItem from '../cart/cartItem';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(localCart);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    //local storage
    //cart items
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItems(newCartItems);
    // total amount in cart all product
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]);
  // remove the item from the cart
  const removeItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id));
  };
  //update the quantiry from cart
  const increaseQuantity = (id) => {
    setCart(
      [...cart].map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount + 1 }
          : { ...item };
      })
    );
  };
  return (
    <CartContext.Provider
      value={{ cart, total, cartItems, removeItem, increaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
