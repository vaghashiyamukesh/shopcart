import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, handleQuantityChange }) => (
  <div className="container mt-4">
    {products.map(product => (
      <ProductItem
        key={product.id}
        product={product}
        onQuantityChange={handleQuantityChange}
      />
    ))}
  </div>
);

export default ProductList;
