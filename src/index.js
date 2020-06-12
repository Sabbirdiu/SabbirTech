import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductProvider from './components/context/Products';
import { CartProvider } from './components/context/Cart';

ReactDOM.render(
  <ProductProvider>
    <CartProvider>
      {' '}
      <App />
    </CartProvider>
  </ProductProvider>,

  document.getElementById('root')
);
