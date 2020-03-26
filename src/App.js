import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import Login from "./containers/Login";
import { Router, Route, BrowserRouter } from 'react-router-dom';
import Signup from './containers/Signup';
import Navbars from './containers/Navbars';
import { Provider } from 'react-redux';
import Dashboard from './containers/Dashboard';



class App extends Component {
  render() {
    return (
      <div className="container1">
        
        <BrowserRouter>
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/dashboard" component={Dashboard}/>
     </BrowserRouter>
      </div>
    );
  }
}


{/* <Navbars />
<Login />

<Router>

 <Route exact path="/signup" name="Signup" component={Signup} />
 
 <Route exact path="/" name="Login" component={Login} />

</Router> */}

//<Login/>
{/* <div className="container1">
      <Router style = {{height:"100vah"}}>
      <div style = {{backgroundColor:"",height: "100%"}} >
       
         <Route exact path='/' component={Login} />
         
        </div>
        </Router>
       </div> */}



export default App;
