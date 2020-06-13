import React from 'react';
import { CartContext } from '../context/Cart';
import './cartItem.scss';

const cartItem = ({ id, image, title, price, amount }) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={image} alt='item' />
      </div>
      <span className='name'>{title}</span>
      <span className='quantity'>
        <div className='arrow'>-</div>
        <span className='value'>{amount}</span>
        <div className='arrow'>+</div>
      </span>
      <span className='price'>$‎{price}</span>
      <span className='remove-button'>&#10005;</span>
    </div>
  );
};

export default cartItem;
