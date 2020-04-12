import React, { Component, useState }  from 'react';
import _ from 'lodash';
import { Card, Button, FormGroup, FormControl, FormLabel, Dropdown } from "react-bootstrap";
import Navbars from "./Navbars";
import img from "../images/shirt.png";
import './pricing.css';

class Dashboard extends Component{

    state = {
      post: [ ],
      types: ['wash','iron','wash&iron'],
      value: 'wash',
      price: [['Rs 5 per piece'],['Rs 6 per piece'],['Rs 10 per piece']],
      id: 0,
      count: 0
   };



   constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);

  
}

handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.email,' ',this.state.password)
  }

  handleSubmit2(event) {
    this.setState({value: event.target.value});
    if( event.target.value == "wash"){
        this.state.id = 0
    }
    else if( event.target.value == "iron"){
        this.state.id = 1
    }
    else{
        this.state.id = 2
    }
    console.log(event.target.value)
  }

  incrementCount = () =>{
    this.setState({
      count: this.state.count + 1
    });
  }

  decrementCount = () =>{
      if(this.state.count > 0){
  	this.setState({
  		count: this.state.count - 1
      });
    }
  }

  render(){

    
    return(
        <div className="main-column-wrapper2">
             
             <div className="row"> {
          _.times( 4, () => <div className="">
              <Navbars />
         
         <div className="col-md-4">
                <Card style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." style={{height: '250px'}} />
                    <Card.Body className="Dashboard-card">
                    <Card.Title style={{color: 'white'}} >Shirt</Card.Title>
                    <div>
                        <select id="lang" onChange={this.handleSubmit2} value={this.state.value}>
                            <option value="wash">wash</option>
                            <option value="iron">iron</option>
                            <option value="wash-iron">wash-iron</option>
                        </select>
                        
                    </div>
                    <Card.Text style={{color: 'white', padding:'3%'}} >
                    {this.state.price[this.state.id]}
                    </Card.Text>
                    <Card.Link href="#" className="btn btn-primary">Add</Card.Link>
                    <div className="qty mt-3" style={{float: 'right', color: 'white'}}>
                        <span className="minus bg-dark" onClick={this.decrementCount}>-</span>
                        <input type="number" className="count" name="qty" value={this.state.count} />
                        <span className="plus bg-dark" onClick={this.incrementCount}>+</span>
                    </div>
                    </Card.Body>
                </Card>
                </div>

                </div> )
        }</div>

            <div class="Login"> </div>

            </div>
    
    )

  }

}

export default Dashboard;