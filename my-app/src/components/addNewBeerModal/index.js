import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./index.css"
import image from "../../images/beer.png"

function AddNewBeer() {
  const [beerInfo, setBeerInfo] = useState({
    name: "", genre: "", description: "", price: "", image_url: "https://images.punkapi.com/v2/2.png"
  })
  const [success, setSuccess] = useState(false);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let name, value
  const inputHandler = event => {
    name = event.target.name
    value = event.target.value
    setBeerInfo({...beerInfo, [name]: value})
  }

  const formSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('https://ocgj9x4mbh.execute-api.ap-southeast-2.amazonaws.com/dev/beer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(beerInfo)
      });
      console.log(response)
      if (response) {
        setSuccess(true); // Show success alert
        setBeerInfo({name: "", genre: "", description: "", price: "", image_url: "https://images.punkapi.com/v2/2.png"});
        window.location.reload(); 
      } else {
        alert("The required field cannot be empty");
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <Button variant="primary addNewBeer" onClick={handleShow} style={{marginRight:"45%"}}>
        Add a new beer
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new beer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="beerImage" src={image}/>
          {success && <div className="success-alert">Data added successfully!</div>}
          <Form onSubmit={formSubmitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Beer name</Form.Label>
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
              <Form.Label>Genre</Form.Label>
              <Form.Control
                onChange={inputHandler}
                type="text"
                name="genre"
                placeholder="Genre*"
                value={beerInfo.genre}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
            <Form.Group>
              <Form.Label>Price in Rs</Form.Label>
              <Form.Control
                onChange={inputHandler}
                type="text"
                name="price"
                placeholder="Price*"
                value={beerInfo.price}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            ></Form.Group>
            <Form.Label>Description*</Form.Label>
              <Form.Control 
                onChange={inputHandler}
                as="textarea" 
                name="description"
                value={beerInfo.description}
                rows={3} 
              />
            </Form.Group>
            <Button variant="primary" className='saveButton' type = "submit" onClick={handleClose}>
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

export default AddNewBeer
