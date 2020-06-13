import React, { createContext, useState, useEffect } from 'react';

import localCart from '../utils/localCart';
// import cartItem from '../cart/cartItem';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
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
  const decreaseQuantity = (id, amount) => {
    if (amount === 1) {
      removeItem(id);
      return;
    } else {
      setCart(
        [...cart].map((item) => {
          return item.id === id
            ? { ...item, amount: item.amount - 1 }
            : { ...item };
        })
      );
    }
  };
  //Add to cart
  const addToCart = (product) => {
    // console.log(product);
    const {
      id,
      image: { url },
      title,
      price,
    } = product;
    const item = [...cart].find((item) => item.id === id);
    if (item) {
      increaseQuantity(id);
      return;
    } else {
      const newItem = { id, image: url, title, price, amount: 1 };
      const newCart = [...cart, newItem];
      setCart(newCart);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
