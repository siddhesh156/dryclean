import { Navbar, Nav } from "react-bootstrap";
import React, { Component }  from 'react';

const Navbars = () => {

    return(
   <div className=""> 
  <Navbar  bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="#home">Dryclean</Navbar.Brand>
    <Nav className="ml-auto" style={{float: 'right', color: 'white', justifyContent: 'right'}} pullRight>
      <Nav.Link href="./signup" to="/signup">Signup</Nav.Link>
      <Nav.Link href="/" to="/">Logout</Nav.Link>
      <Nav.Link href="./routes" to="/route">Pricing</Nav.Link>
    </Nav>
  </Navbar>
  </div>  
    )

}

export default Navbars;

{/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}