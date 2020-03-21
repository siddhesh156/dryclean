import React, { Component, useState }  from 'react';
import img from '../images/laundry-img.jpg';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './Login.css';


class Signup extends Component{

    state = {
      post: [ ],
      email: '',
      password: '',
      name: '',
      mobile: '',
      city: '',
      state: '',
      zipcode: '',
      street1: '',
      street2: ''
   };
  
    constructor(props) {
      super(props);
  
      this.handleSubmit = this.handleSubmit.bind(this);
  
    
  }
  
    
  
    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }
  
     handleSubmit(event) {
      event.preventDefault();
      console.log(this.state.email,' ',this.state.password,' ',this.state.name,' ',this.state.mobile,' ',this.state.state,' ',this.state.city,' ',this.state.zipcode)
    }
  
    render(){
      
  
      return(
        <div className="main-column-wrapper" style={{color: "red"}} >
          <div className="fixed_img">
              <img src={img} alt="boohoo" className="side-column"/>
          </div>
          <div className="Signup">
              <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="name" bsSize="large">
                <FormLabel>Name</FormLabel>
                <FormControl
                  autoFocus
                  type="name"
                  required
                  value={this.state.name}
                  onChange={e => this.setState({name: e.target.value}) }
                />
                </FormGroup>
                <FormGroup controlId="validationCustom08" bsSize="large">
                <FormLabel>Mobile</FormLabel>
                <FormControl
                  
                  type="tel"
                  pattern=".{10}"
                  value={this.state.mobile}
                  required
                  onChange={e => this.setState({mobile: e.target.value}) }
                />
                </FormGroup>
                <FormGroup controlId="validationServer033" bsSize="large">
                <FormLabel>City</FormLabel>
                <FormControl
                    required
                  value={this.state.city}
                  onChange={e => this.setState({city: e.target.value}) }
                />
                </FormGroup>
                <FormGroup controlId="validationServer043" bsSize="large">
                <FormLabel>State</FormLabel>
                <FormControl
                    required
                  value={this.state.state}
                  onChange={e => this.setState({state: e.target.value}) }
                />
                </FormGroup>
                <FormGroup controlId="validationServer053" bsSize="large">
                <FormLabel>Zip</FormLabel>
                <FormControl
                    required
                  value={this.state.zipcode}
                  onChange={e => this.setState({zipcode: e.target.value}) }
                />
                </FormGroup>
                <FormGroup controlId="email" bsSize="large">
                <FormLabel>Email</FormLabel>
                <FormControl
                  
                  type="email"
                  value={this.state.email}
                  onChange={e => this.setState({email: e.target.value}) }
                />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                <FormLabel>Password</FormLabel>
                <FormControl
                  value={this.state.password}
                  onChange={e => this.setState({password: e.target.value}) }
                  type="password"
                />
                </FormGroup>
                <Button block className="btn btn-danger" bsSize="large" disabled={!this.validateForm()} type="submit">
                Signup
                </Button>
                </form>
            </div>
  
        </div>
      );
    }
  }
  
  export default Signup;
  