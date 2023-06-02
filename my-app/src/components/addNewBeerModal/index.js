import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./index.css"
import image from "../../images/beer.png"

function AddNewBeer() {
  const [beerInfo, setBeerInfo] = useState({
    name: "", genre: "", description: "", price: "", image_url: "https://images.punkapi.com/v2/2.png"
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const inputHandler = event => {
    const { name, value } = event.target;
    setBeerInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    // Check if any required field is empty
    if (!beerInfo.name || !beerInfo.genre || !beerInfo.description || !beerInfo.price) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch('https://ocgj9x4mbh.execute-api.ap-southeast-2.amazonaws.com/dev/beer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(beerInfo)
      });

      if (response) {
        setSuccess(true);
        setBeerInfo({ name: "", genre: "", description: "", price: "", image_url: "https://images.punkapi.com/v2/2.png" });
        handleClose();
        window.location.reload();
      } else {
        const errorResponse = await response.json();
        setError(errorResponse.message || "An error occurred.");
      }
    } catch (error) {
      setError("An error occurred.");
    }
  };

  return (
    <>
      <Button variant="primary addNewBeer" onClick={handleShow} style={{ marginRight: "45%" }}>
        Add a new beer
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new beer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="beerImage" src={image} alt="Beer" />
          {success && <div className="success-alert">Data added successfully!</div>}
          {error && <div className="error-alert" style={{color: "red"}}>{error}</div>}
          <Form onSubmit={formSubmitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Beer name*</Form.Label>
              <Form.Control
                onChange={inputHandler}
                type="text"
                name="name"
                placeholder="Beer name*"
                value={beerInfo.name}
                autoFocus
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Genre*</Form.Label>
              <Form.Control
                onChange={inputHandler}
                type="text"
                name="genre"
                placeholder="Genre*"
                value={beerInfo.genre}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price in Rs*</Form.Label>
              <Form.Control
                onChange={inputHandler}
                type="text"
                name="price"
                placeholder="Price*"
                value={beerInfo.price}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description*</Form.Label>
              <Form.Control
                onChange={inputHandler}
                as="textarea"
                name="description"
                value={beerInfo.description}
                rows={3}
              />
            </Form.Group>
            <Button variant="primary" className='saveButton' type="submit">
              Save
            </Button>
            <Button variant="danger" className='cancelButton' onClick={handleClose}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddNewBeer;
