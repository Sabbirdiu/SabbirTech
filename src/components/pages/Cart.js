import React, { useContext } from 'react';
import EmptyCart from '../cart/EmptyCart';
import CartItem from '../cart/cartItem';
import { CartContext } from '../context/Cart';
const Cart = () => {
  let user = false;
  const { cart, total } = useContext(CartContext);
  console.log(cart, total);
  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div>
      <h1>Cart page</h1>
    </div>
  );
};

export default Cart;
