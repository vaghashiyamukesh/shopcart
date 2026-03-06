import React from 'react';

const ProductItem = ({ product, onQuantityChange }) => (
  <div className="row border p-3 mb-3">
    <div className="col-md-3">
      <img
        src={product.image}
        alt={product.desc}
        style={{ maxWidth: '150px', height: 'auto' }}
      />
    </div>
    <div className="col-md-6">
      <h5>{product.desc}</h5>
    </div>
    <div className="col-md-3">
      <input
        type="number"
        min="0"
        value={product.value}
        onChange={(e) => onQuantityChange(product.id, parseInt(e.target.value) || 0)}
        style={{ width: '80px' }}
      />
      <span className="ms-2">quantity</span>
    </div>
  </div>
);

export default ProductItem;
