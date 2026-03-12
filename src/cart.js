import React from 'react';

const Cart = ({ products }) => {
  const cartItems = products.filter(product => product.value > 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-muted">Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(product => (
            <div key={product.id} className="row border p-3 mb-3 align-items-center">
              <div className="col-md-3">
                <img
                  src={product.image}
                  alt={product.desc}
                  style={{ maxWidth: '150px', height: 'auto' }}
                />
              </div>
              <div className="col-md-4">
                <h5>{product.desc}</h5>
                <p className="text-muted">Rating: ⭐ {product.ratings}</p>
              </div>
              <div className="col-md-5">
                <p><strong>Quantity:</strong> {product.value}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
