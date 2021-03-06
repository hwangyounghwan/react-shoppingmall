import './App.css';
import { Navbar,Nav,NavDropdown,Jumbotron,Button,Container,Row,Col } from 'react-bootstrap';
import React, {useState} from 'react';
import Data from "./data";
import Detail from "./Detail.js"
import Cart from "./Cart"

import { Link, Route} from 'react-router-dom'
import axios from "axios";

function App() {

  let [shoes, shoesChange] = useState (Data);


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Shose Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to ="/detail">Detail</Link></Nav.Link>
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


        
        <Route exact path = "/">
            <div>메인 페이지 입니다 </div>
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
                                if(i <7)
                                return(
                                    <ShoesList shoes = {shoes} i = {i}/>
                                    );
                                else{
                                    return (
                                        <div></div>
                                    )
                                }
                            })
                        }
                </Row>
            </Container>
            <button className="btn btn-primary" onClick={() => {axios.get('https://codingapple1.github.io/shop/data2.json').then((result)=>{
                shoesChange(([...shoes,...result.data]));
            }).catch(() =>{

            })}}>더보기</button>
        </Route>
        
        <Route exact path = "/detail" >
        <Detail/>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>

    </div>
  );
}

function ShoesList (props) {

  return (
      <Col>
        <a><img src= {'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width="100%" alt={"신발 이미지1"}/></a>
        <h4>{props.shoes[props.i].title}</h4>
        <p>{props.shoes[props.i].content}</p>
        <p>{props.shoes[props.i].price}</p>
      </Col>
  )
}

export default App;
