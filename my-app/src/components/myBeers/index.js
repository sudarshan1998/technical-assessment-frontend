import AddNewBeer from "../addNewBeerModal/index.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MyBeersCard } from "../beerItem";
import "./index.css";
import { CRow } from '@coreui/react';
import React, { useState, useEffect } from 'react';

const MyBeers = () => {
  const [data, setListing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ocgj9x4mbh.execute-api.ap-southeast-2.amazonaws.com/dev/beers');
        const json = await response.json();
        setListing(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return (
      <>
        <AddNewBeer />
        <Container className="addBeerContainer" style={{ height: "500px", width: "700px", marginTop: "20px" }}>
          <Row>
            <Col className="containerText" style={{ marginTop: "30%" }}>
              {"Nothing to see yet\n"}
              <a href="#">Click here</a>{" "}
              {"to add your first beer"}
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  return (
    <>
      <CRow>
        {data.body.data.map(beer => (
          <MyBeersCard
            key={beer.id}
            name={beer.name}
            price={beer.price}
            description={beer.description}
            image={beer.image}
          />
        ))}
        <AddNewBeer /><p></p>
      </CRow>
    </>
  );
};

export default MyBeers;
