import React from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ siteName, totalItems }) => (
  <div className="header bg-info p-3 d-flex justify-content-between align-items-center">
    <h1 className="mb-0">{siteName}</h1>
    <div className="cart-info">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      <span className="ms-2">{totalItems} items</span>
    </div>
  </div>
);

export default Header;
