import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Cart';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartCount = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-counts'> {cartItems} </span>
    </div>
  );
};

export default CartCount;
