import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import Login from "./containers/Login/Login";
import { Router, Route, BrowserRouter } from 'react-router-dom';
import Signup from './containers/Signup/Signup';
import Navbars from './containers/NavBar/Navbars';
import { Provider } from 'react-redux';
import Dashboard from './containers/Dashboard/Dashboard';
import Pricing from './containers/Pricing/Pricing';



const App = () => {
  return (
      <BrowserRouter>
          <Route exact path="" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/pricing" component={Pricing}/>
          <Route path="/dashboard" component={Dashboard}/>
     </BrowserRouter>
     
    ); 
}


export default App;
