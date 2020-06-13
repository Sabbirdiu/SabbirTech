import React, { useContext } from 'react';
import EmptyCart from '../cart/EmptyCart';
import CartItem from '../cart/cartItem';
import { CartContext } from '../context/Cart';
import { Link } from 'react-router-dom';
import './Cart.scss';
const Cart = () => {
  let user = true;
  const { cart, total } = useContext(CartContext);
  console.log(cart, total);
  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>

      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <div className='total'>
        <span>TOTAL:${total}</span>
      </div>
      {user ? (
        <Link to='/checkout' className='btn btn-outline-primary'>
          Checkout
        </Link>
      ) : (
        <Link to='/login' className='btn btn-outline-primary '>
          Login
        </Link>
      )}
    </div>
  );
};

export default Cart;
