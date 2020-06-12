import React from 'react';
import Product from './Product';

const ProductList = ({ products, title }) => {
  return (
    <section className='section'>
      <h2 className='section-title'>{title}</h2>
      <div className='products-center'>
        {products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
