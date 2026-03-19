import React from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FacebookLogin from 'react-facebook-login';

const Navbar = ({ siteName, totalItems, isLoggedIn, user, onLogout, onLogin }) => (
  <div className="header bg-info p-3 d-flex justify-content-between align-items-center">
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h1 className="mb-0">{siteName}</h1>
    </Link>
    <div className="nav-links d-flex align-items-center">
      <Link to="/" className="nav-link me-3">
        Home
      </Link>
      <Link to="/cart" className="nav-link me-3">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        <span className="ms-2">{totalItems} items</span>
      </Link>
      {isLoggedIn ? (
        <div className="d-flex align-items-center">
          <span className="me-3">Welcome, {user.name}</span>
          <button className="btn btn-outline-light" onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <FacebookLogin
          appId="1517532589706683"
          autoLoad={false}
          fields="name,email,picture"
          callback={onLogin}
          icon="fa-facebook"
          textButton="Login with Facebook"
          cssClass="btn btn-primary"
        />
      )}
    </div>
  </div>
);

export default Navbar;
