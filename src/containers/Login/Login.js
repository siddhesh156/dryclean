import React, { useState, useEffect }  from 'react';
import Axios from 'axios';
import img from '../../images/laundry-img.jpg';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './Login.less';



const Login = () => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  useEffect(()=>{},[])

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

   const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email,' ',password)
    history.push('/dashboard');
  }

  const handleSubmit2 = (event) => {
    event.preventDefault();
    history.push('/signup');
  }

  
    return(
      <div className="container">
        <div className="fixed_img">
            <img src={img} alt="boohoo" className="side-column"/>
        </div>
        <div className="Login">
            <form onSubmit={handleSubmit}>
              <FormGroup controlId="email" bsSize="large">
              <FormLabel>Email</FormLabel>
              <FormControl
                autoFocus
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value) }
              />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
              <FormLabel>Password</FormLabel>
              <FormControl
                value={password}
                onChange={e => setPassword(e.target.value) }
                type="password"
              />
              </FormGroup>
              <Button block className="btn btn-danger mt-4" bsSize="large" disabled={!validateForm()} onClick={handleSubmit} type="submit">
              Login
              </Button>

              <a href="#" class="btn-info mt-2" style={{color: 'white', float: 'right', backgroundColor: 'transparent' }} 
                bsSize="large"  type="submit" role="button" onClick={handleSubmit2} >Sign Up?</a>


              </form>
          </div>

      </div>
    );
  
}

export default Login;

