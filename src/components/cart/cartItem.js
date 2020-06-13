import React, { useContext } from 'react';
import { CartContext } from '../context/Cart';
import './cartItem.scss';

const CartItem = ({ id, image, title, price, amount }) => {
  const { removeItem, increaseQuantity, decreaseQuantity } = useContext(
    CartContext
  );
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={image} alt='item' />
      </div>
      <span className='name'>{title}</span>
      <span className='quantity'>
        <div
          onClick={() => {
            decreaseQuantity(id, amount);
          }}
          className='arrow'
        >
          -
        </div>
        <span className='value'>{amount}</span>
        <div
          onClick={() => {
            increaseQuantity(id);
          }}
          className='arrow'
        >
          +
        </div>
      </span>
      <span className='price'>$‎{price}</span>
      <span
        onClick={() => {
          removeItem(id);
        }}
        className='remove-button'
      >
        &#10005;
      </span>
    </div>
  );
};
export default CartItem;
