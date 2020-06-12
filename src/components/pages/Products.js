import React, { useContext } from 'react';
import { ProductContext } from '../context/Products';
import Loading from '../Loading';
import ProductList from '../Products/ProductList';

const Products = () => {
  const { products, loading } = useContext(ProductContext);
  console.log(products);
  if (loading) {
    return <Loading />;
  }
  return <ProductList title='our products' products={products} />;
};

export default Products;
