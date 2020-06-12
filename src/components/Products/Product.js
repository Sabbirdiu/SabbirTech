import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ image, title, id, price }) => {
  const url = image.url;
  return (
    <article className='product'>
      <div className='img-container'>
        <img src={url} alt={title} />
        <Link to={`products/${id}`} className='btn btn-outline-primary'>
          details
        </Link>
      </div>
      <div className='product-footer'>
        <p className='product-title'>{title}</p>
        <p className='product-price'>${price}</p>
      </div>
    </article>
  );
};

export default Product;
