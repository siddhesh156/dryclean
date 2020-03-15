import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import Login from "./containers/Login";
import { Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="container1">
        <Login/>
      </div>
    );
  }
}


{/* <div className="container1">
      <Router style = {{height:"100vah"}}>
      <div style = {{backgroundColor:"",height: "100%"}} >
       
         <Route exact path='/' component={Login} />
         
        </div>
        </Router>
       </div> */}



export default App;
