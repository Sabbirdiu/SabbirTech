import React from 'react';
import { Link } from 'react-router-dom';
import CartCount from './cart/CartCount';
// import './header.styles.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <div>
            <li>
              <Link  to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/Products'>Products</Link>
            </li>
            <li>
              <Link to='/login'>login</Link>
            </li>
            {/* {user.token && (
              <li>
                <Link to='/checkout'>checkout</Link>
              </li>
            )} */}
          </div>
          <div>
            {/* <LoginLink /> */}
            <CartCount />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
