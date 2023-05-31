import AllBeers from '../allBeers';
import MyBeers from '../myBeers';
import {Tabs, Tab, Container} from "react-bootstrap";

const  HomePage = () => {
  return (
    <Container>
    <Tabs
    id="fill-tab-example"
    >
    <Tab eventKey="allBeers" title="All Beers">
      <AllBeers />
      
    </Tab>
    <Tab eventKey="myBeers" title="My Beers">
      <MyBeers />
    </Tab>
    </Tabs>
    </Container>
  );
}

export default HomePage;
