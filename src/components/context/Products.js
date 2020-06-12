import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import url from '../utils/URL';
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  // const [featured, setFetured] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
    return () => {};
  }, []);
  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
