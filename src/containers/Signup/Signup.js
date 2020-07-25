
import React, { useState, useEffect }  from 'react';
import Axios from 'axios';
import img from '../../images/laundry-img.jpg';
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import './Signup.css';



const Signup = (props) => {
  const [name,setName] = useState()
  const [mobile,setMobile] = useState()
  const [city,setCity] = useState()
  const [states,setStates] = useState()
  const [zip,setZip] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  useEffect(()=>{},[])

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

   const handleSubmit = () => {
    event.preventDefault();
    console.log(email,' ',password)
    props.history.push('/dashboard');
  }

  const handleSubmit2 = (event) => {
    event.preventDefault();
    props.history.push('/');
  }

  
    return(
      <div className="containerS">
        <div className="fixed_img">
            <img src={img} alt="boohoo" className="side-column"/>
        </div>
        
        <div className="Signup">
              <div className="main-field d-f f-c"> 
              <FormGroup className="main-field1" controlId="email" bsSize="large">
               <FormLabel>Name</FormLabel>
               <FormControl
                autoFocus
                type="text"
                value={name}
                onChange={e => setName(e.target.value) }
              /></FormGroup>

              <FormGroup className="main-field1" controlId="email" bsSize="large">
               <FormLabel>Mobile</FormLabel>
               <FormControl
                autoFocus
                type="number"
                value={mobile}
                onChange={e => setMobile(e.target.value) }
              /></FormGroup>

              <FormGroup className="main-field1" controlId="email" bsSize="large">
               <FormLabel>City</FormLabel>
               <FormControl
                autoFocus
                type="text"
                value={city}
                onChange={e => setCity(e.target.value) }
              /></FormGroup>

              <FormGroup className="main-field1" controlId="email" bsSize="large">
               <FormLabel>State</FormLabel>
               <FormControl
                autoFocus
                type="text"
                value={states}
                onChange={e => setStates(e.target.value) }
              /></FormGroup>

              <FormGroup className="main-field1" controlId="email" bsSize="large">
               <FormLabel>Zip Code</FormLabel>
               <FormControl
                autoFocus
                type="number"
                value={zip}
                onChange={e => setZip(e.target.value) }
              />
              </FormGroup>

              <FormGroup className="main-field1" controlId="email" bsSize="large">
               <FormLabel>Email</FormLabel>
               <FormControl
                autoFocus
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value) }
              />
              </FormGroup>

              <FormGroup className="main-field1" controlId="password" bsSize="large">
              <FormLabel>Password</FormLabel>
               <FormControl
                value={password}
                onChange={e => setPassword(e.target.value) }
                type="password"
              /></FormGroup>
              <Button variant="contained" disabled={!validateForm} color="secondary" onClick={handleSubmit} >
               Sign up
               </Button>

               </div>
               <a href="#" class="btn-info mt-2" style={{color: 'white', float: 'right', backgroundColor: 'transparent' }} 
                 bsSize="large"  type="submit" role="button" onClick={handleSubmit2}>Login?</a>

          </div>
      </div>
    );
  
}

export default Signup;



      



// class Signup extends Component{

//     state = {
//       post: [ ],
//       email: '',
//       password: '',
//       name: '',
//       mobile: '',
//       city: '',
//       state: '',
//       zipcode: '',
//       street1: '',
//       street2: ''
//    };
  
//     constructor(props) {
//       super(props);
  
//       this.handleSubmit = this.handleSubmit.bind(this);
//       this.handleSubmit2 = this.handleSubmit2.bind(this);
  
    
//   }
  
    
  
//     validateForm() {
//       return this.state.email.length > 0 && this.state.password.length > 0;
//     }
  
//      handleSubmit(event) {
//       event.preventDefault();
//       console.log(this.state.email,' ',this.state.password,' ',this.state.name,' ',this.state.mobile,' ',this.state.state,' ',this.state.city,' ',this.state.zipcode)
//       this.props.history.push('/dashboard');
//     }

//     handleSubmit2(event) {
//       event.preventDefault();
//       console.log('hello')
//       this.props.history.push('/');
//     }
  
//     render(){
      
  
//       return(
//         <div className="main-column-wrapper" style={{color: "red"}} >
//           <div className="fixed_img">
//               <img src={img} alt="boohoo" className="side-column"/>
//           </div>
//           <div className="Signup">
//               <form onSubmit={this.handleSubmit}>
//                 <FormGroup controlId="name" bsSize="large">
//                 <FormLabel>Name</FormLabel>
//                 <FormControl
//                   autoFocus
//                   type="name"
//                   required
//                   value={this.state.name}
//                   onChange={e => this.setState({name: e.target.value}) }
//                 />
//                 </FormGroup>
//                 <FormGroup controlId="validationCustom08" bsSize="large">
//                 <FormLabel>Mobile</FormLabel>
//                 <FormControl
                  
//                   type="tel"
//                   pattern=".{10}"
//                   value={this.state.mobile}
//                   required
//                   onChange={e => this.setState({mobile: e.target.value}) }
//                 />
//                 </FormGroup>
//                 <FormGroup controlId="validationServer033" bsSize="large">
//                 <FormLabel>City</FormLabel>
//                 <FormControl
//                     required
//                   value={this.state.city}
//                   onChange={e => this.setState({city: e.target.value}) }
//                 />
//                 </FormGroup>
//                 <FormGroup controlId="validationServer043" bsSize="large">
//                 <FormLabel>State</FormLabel>
//                 <FormControl
//                     required
//                   value={this.state.state}
//                   onChange={e => this.setState({state: e.target.value}) }
//                 />
//                 </FormGroup>
//                 <FormGroup controlId="validationServer053" bsSize="large">
//                 <FormLabel>Zip</FormLabel>
//                 <FormControl
//                     required
//                   value={this.state.zipcode}
//                   onChange={e => this.setState({zipcode: e.target.value}) }
//                 />
//                 </FormGroup>
//                 <FormGroup controlId="email" bsSize="large">
//                 <FormLabel>Email</FormLabel>
//                 <FormControl
                  
//                   type="email"
//                   value={this.state.email}
//                   onChange={e => this.setState({email: e.target.value}) }
//                 />
//                 </FormGroup>
//                 <FormGroup controlId="password" bsSize="large">
//                 <FormLabel>Password</FormLabel>
//                 <FormControl
//                   value={this.state.password}
//                   onChange={e => this.setState({password: e.target.value}) }
//                   type="password"
//                 />
//                 </FormGroup>
                
//                 <Button  block className="btn btn-danger mt-4"  bsSize="large" disabled={!this.validateForm()} type="submit">
//                 Signup
//                 </Button>

//                 <a href="#" class="btn-info mt-2" style={{color: 'white', float: 'right', backgroundColor: 'transparent' }} 
//                 bsSize="large"  type="submit" role="button" onClick={this.handleSubmit2} >Log In?</a>

//                 </form>
//             </div>
  
//         </div>
//       );
//     }
//   }
  
//   export default Signup;
  