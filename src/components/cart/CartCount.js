import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Cart';
// import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartCount = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-link-container">
    <Link to="/cart">cart</Link>
    <span className="cart-link-total">{cartItems}</span>
  </div>
  );
};

export default CartCount;
