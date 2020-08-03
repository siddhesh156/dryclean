import React, { Component, useState }  from 'react';
import _ from 'lodash';
import { Card, Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Navbars from "../NavBar/Navbars";
import Product from "../../Component/Product/Product"
import GenderCard from "../../Component/GenderCard/GenderCard"

import { useSelector, useDispatch } from 'react-redux'
import './Dashboard.css'
import img from '../../images/laundry-img.jpg';

const Dashboard = () =>{
  const genderType = useSelector(state => state.genderR.genderType)
  console.log("geder t ",genderType)

  var mainScreen = <div></div>
  const screenType = "gender"

  switch (genderType) {

    case "Men": mainScreen = <Product />
        break;
        
    case "product": mainScreen = <Product />
        break;

    case "gender": mainScreen = <GenderCard />
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


// style={{backgroundImage: `url(${img})`, backgroundPosition: 'center',
// backgroundSize: 'cover',
// backgroundRepeat: 'no-repeat',  filter: 'blur(8px)',
// WebkitFilter: 'blur(8px)'}}