import React, { Component, useState }  from 'react';
import _ from 'lodash';
import { Card, Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Navbars from "../NavBar/Navbars";
import Product from "../../Component/Product/Product"
import './Dashboard.css'

const Dashboard = () =>{
  var mainScreen = <div></div>
  const screenType = "product"

  switch (screenType) {
    case "product": mainScreen = <Product />
        break;

    default: mainScreen = null
        break;
  }

  console.log("mainScreen ",mainScreen)
  console.log("screenType ",screenType)


    return(
        <div className="mainContainer">
          <div><Navbars /></div>
          <div className="middleContainer">
            {mainScreen}
          </div>
            
        </div>
    
    )

  

}

export default Dashboard;

{/* <div className="row justify-content-around">
<div className="col-4 mx-auto">
<div> {
_.times( 8, () => <span>♦
 <Navbars />

   <Card style={{ width: '18rem' }}>
       <Card.Body className="Dashboard-card">
       <Card.Title>Card Title</Card.Title>
       <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
       <Card.Text>
       Some quick example text to build on the card title and make up the bulk of
       the card's content.
       </Card.Text>
       <Card.Link href="#">Card Link</Card.Link>
       <Card.Link href="#">Another Link</Card.Link>
       </Card.Body>
   </Card>

   </span> )
}</div>

   </div>
</div> */}