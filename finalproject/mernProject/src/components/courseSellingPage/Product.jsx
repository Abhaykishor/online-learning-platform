
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export const Product = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const myStyle = { width: '100%', backgroundColor: 'white' };
  const imageStyle = { width: '100%', height: '200px', objectFit: 'cover' };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="card mb-3" style={myStyle}>
        <div className="row g-0">
          <div className="col-md-4">
            <img 
              src={data.imageUrl} 
              className="img-fluid rounded-start" 
              style={imageStyle}  
              alt={data.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-3 fw-semibold">{data.title}</h5>
              <p className="card-text fs-5">{data.description}</p>
              <p className="card-text fs-5 mt-2 btn btn-secondary">${data.price}</p>

              <div className="row mt-3">
                <div className="col-6">
                  <Button onClick={handleShowModal} className="btn btn-primary">Know More</Button>
                </div>
                <div className="col-6 text-end">
                  <button className="btn btn-primary" id="rzp-button1">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={data.imageUrl} className="img-fluid mb-3" alt={data.title} />
          <p>{data.description}</p>
          <h4>Price: ${data.price}</h4>
          {/* Add more details as needed */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Buy Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};