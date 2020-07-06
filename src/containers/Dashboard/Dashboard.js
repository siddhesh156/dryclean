import React, { Component, useState }  from 'react';
import _ from 'lodash';
import { Card, Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Navbars from "../NavBar/Navbars";

class Dashboard extends Component{

    state = {
      post: [ ],
      email: '',
      password: ''
   };

   constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

  
}

handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.email,' ',this.state.password)
  }

  render(){

    return(
        <div className="container2">
             <div className="row justify-content-around">
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
            </div>
            </div>
    
    )

  }

}

export default Dashboard;