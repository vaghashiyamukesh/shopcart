import React from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ siteName, totalItems }) => (
  <div className="header bg-info p-3 d-flex justify-content-between align-items-center">
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h1 className="mb-0">{siteName}</h1>
    </Link>
    <div className="nav-links">
      <Link to="/" className="nav-link me-3">
        Home
      </Link>
      <Link to="/cart" className="nav-link">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        <span className="ms-2">{totalItems} items</span>
      </Link>
    </div>
  </div>
);

export default Navbar;
