import React, { Component, useState }  from 'react';
import Axios from 'axios';
import img from '../images/laundry-img.jpg';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './Login.css';
import FlexView from 'react-flexview';


class Login extends Component{

  state = {
    post: [ ],
    email: '',
    password: ''
 };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

  
}

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      //console.log(res)
      this.setState({post: res.data.slice(0,10)
      })
      // console.log(this.state.post)
    })
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

   handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.email,' ',this.state.password)
    this.props.history.push('/dashboard');
  }

  render(){
    const { post } = this.state;
    const postList = post.lastIndexOf ? (
      post.map(posts => {
        //console.log(posts.title)
          return (
            <div className="post card" key={posts.id}>
              <div className="card-content">
          <span className="bg-primary text-white">{posts.title}</span>
          <p className="bg-dark text-white">{posts.body}</p>
              </div>
            </div>
          )
        }
      )
    ) : (
      <div className="center">No post yet </div>
    )

  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");

   

    return(
      <div className="main-column-wrapper" style={{color: "red"}} >
        <div className="fixed_img">
            <img src={img} alt="boohoo" className="side-column"/>
        </div>
        <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email" bsSize="large">
              <FormLabel>Email</FormLabel>
              <FormControl
                autoFocus
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
              Login
              </Button>
              </form>
          </div>

      </div>
    );
  }
}

export default Login;

{/* <div className="container" style={{color: ""}} > 
      <FlexView className="main-column-wrapper" style={{color: ""}}>
        <FlexView column hAlignContent='left'style={{color: ""}} >
          <FlexView style={{color: ""}}>
            <div className="fixed_img">
            <img src={img} alt="boohoo" className="side-column"/>
            </div>
             
          </FlexView> 
        </FlexView> 
        <FlexView column hAlignContent='right' >
        <FlexView>
          <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email" bsSize="large">
              <FormLabel>Email</FormLabel>
              <FormControl
                autoFocus
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
              Login
              </Button>
              </form>
            </div>
          </FlexView>
        </FlexView> 
      </FlexView>
    </div>  */}