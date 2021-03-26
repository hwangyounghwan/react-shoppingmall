import './App.css';
import { Navbar,Nav,NavDropdown,Jumbotron,Button,Container,Row,Col } from 'react-bootstrap';
import React, {useState} from 'react';
import Data from "./data";

function App() {

  let [shoes, shoesChange] = useState (Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">pet shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Navbar>

      <Jumbotron className='background'>
        <h1>20% DC Event</h1>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      <Container>
        <Row>
          {
            shoes.map((a,i) => {
             return(
                 <ShoesList shoes = {shoes} i = {i}/>
             );
          })
          }
        </Row>
      </Container>

    </div>
  );
}

function ShoesList (props) {
  return (
      <Col>
        <img src={props.shoes[props.i].img} width="100%" alt={"신발 이미지1"}/>
        <h4>{props.shoes[props.i].title}</h4>
        <p>{props.shoes[props.i].content}</p>
        <p>{props.shoes[props.i].price}</p>
      </Col>
  )
}

export default App;
