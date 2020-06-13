import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/Products';
import { CartContext } from '../context/Cart';

import { useHistory } from 'react-router-dom';
import Loading from '../Loading';

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => item.id === parseInt(id));

  if (products.length === 0) {
    return <Loading />;
  } else {
    const {
      image: { url },
      title,
      price,
      description,
    } = product;
    return (
      <section className='single-product'>
        <img src={url} alt={title} className='single-product-image' />
        <article>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
          <button
            onClick={() => {
              addToCart(product);
              history.push('/cart');
            }}
            className='btn btn-outline-primary '
          >
            Add to Cart
          </button>
        </article>
      </section>
    );
  }
};

export default ProductDetails;
