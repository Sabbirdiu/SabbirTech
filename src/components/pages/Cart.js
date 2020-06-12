import React, { useContext } from 'react';
import EmptyCart from '../cart/EmptyCart';
import CartItem from '../cart/cartItem';
import { CartContext } from '../context/Cart';
import { Link } from 'react-router-dom';
const Cart = () => {
  let user = false;
  const { cart, total } = useContext(CartContext);
  console.log(cart, total);
  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <section className='cart-items section'>
      <h2>your cart</h2>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <h2>total : ${total}</h2>
      {user ? (
        <Link to='/checkout' className='btn btn-primary btn-block'>
          Checkout
        </Link>
      ) : (
        <Link to='/login' className='btn btn-outline-primary '>
          Login
        </Link>
      )}
    </section>
  );
};

export default Cart;
