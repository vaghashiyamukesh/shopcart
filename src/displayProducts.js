import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DisplayProducts = ({ products, handleQuantityChange }) => {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const handleHide = () => {
    setShow(false);
    setSelectedProduct(null);
  };

  const handleIncrement = (id) => {
    const product = products.find(p => p.id === id);
    handleQuantityChange(id, (product.value || 0) + 1);
  };

  const handleDecrement = (id) => {
    const product = products.find(p => p.id === id);
    if ((product.value || 0) > 0) {
      handleQuantityChange(id, product.value - 1);
    }
  };

  return (
    <div className="container mt-4">
      {products.map(product => (
        <div key={product.id} className="row border p-3 mb-3 align-items-center">
          <div className="col-md-3">
            <img
              src={product.image}
              alt={product.desc}
              style={{ maxWidth: '150px', height: 'auto', cursor: 'pointer' }}
              onClick={() => handleShow(product)}
            />
          </div>
          <div className="col-md-4">
            <h5>{product.desc}</h5>
            <p className="text-muted">Rating: ⭐ {product.ratings}</p>
          </div>
          <div className="col-md-5 d-flex align-items-center">
            <button
              className="btn btn-outline-secondary btn-sm me-2"
              onClick={() => handleDecrement(product.id)}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input
              type="number"
              min="0"
              value={product.value || 0}
              onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 0)}
              style={{ width: '60px', textAlign: 'center' }}
              className="form-control form-control-sm me-2"
            />
            <button
              className="btn btn-outline-secondary btn-sm me-2"
              onClick={() => handleIncrement(product.id)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <span className="ms-2">quantity</span>
          </div>
        </div>
      ))}

      <Modal show={show} onHide={handleHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedProduct?.image}
            alt={selectedProduct?.desc}
            style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
          />
          <p><strong>Description:</strong> {selectedProduct?.desc}</p>
          <p><strong>Rating:</strong> <span style={{ color: '#ffc107', fontSize: '1.2em' }}>⭐ {selectedProduct?.ratings}</span></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DisplayProducts;
