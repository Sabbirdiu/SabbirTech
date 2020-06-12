import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import About from './components/pages/About';
import Cart from './components/pages/Cart';
// import Checkout from './components/pages/Checkout';
import Error from './components/pages/Error';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import ProductDetails from './components/pages/ProductDetails';
import Products from './components/pages/Products';
//Header
import Header from './components/Header';
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/Products' component={Products} />
          <Route exact path='/Products/:id' children={<ProductDetails />} />

          <Route exact path='/login' component={Login} />
          <Route exact path='/Cart' component={Cart} />
          <Route exact path='*' component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
