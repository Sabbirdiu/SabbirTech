import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/Products';
import { useHistory } from 'react-router-dom';
import Loading from '../Loading';

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { products } = useContext(ProductContext);
  const product = products.find(item => item.id === parseInt(id));

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
            className='btn btn-outline-primary '
            onClick={() => {
              history.push('/cart');
            }}
          >
            Add to Cart
          </button>
        </article>
      </section>
    );
  }
};

export default ProductDetails;
