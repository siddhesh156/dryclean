import React, { Component, useState }  from 'react';
import _ from 'lodash';
import { Card, Button, FormGroup, FormControl, FormLabel, Dropdown, Link } from "react-bootstrap";
import Navbars from "../NavBar/Navbars";
import img1 from '../../images/shirt.png';
import img2 from '../../images/jeans.png';
import img3 from '../../images/pants.png';
import img4 from '../../images/t-shirt.png';

import './pricing.less';

class Pricing extends Component{

    state = {
      post: [ ],
      type: ['wash','iron','wash&iron'],
      value: 'wash',
      price: [['Rs 5 per piece'],['Rs 6 per piece'],['Rs 10 per piece']],
      priceValue: [5,6,10],
      id: 0,
      count: 0,
      item: [
        {id:1,title:'Shirt', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:img1},
        {id:2,title:'Jeans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: img2},
        {id:3,title:'Pants', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: img3},
        {id:4,title:'T-shirt', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:img4}
    ],
    addedItems:[],
    total: 0
   };



   constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.addCart = this.addCart.bind(this);

  
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

  addCart = (id,title,type,descp,price,count,img) =>{
    const c = this.totalCount();
    console.log(c)
    // this.setState({
    //   addedItems: [{id: id,title: title,type: type, descp: descp, price: c, count: count,img: img}]
    // });

    this.setState({
      addedItems: [...this.state.addedItems, {id: id,title: title,type: type, descp: descp, price: c, count: count,img: img}]
    });

    console.log(id,title,type,descp,price,count,img)

    console.log(this.state.addedItems)
  }

  componentDidUpdate(){
   // console.log(this.state.count)
   console.log(this.state.addedItems.count)
   
  }

  // componentDidMount(){
  //   console.log(this.state.count)
  //   this.totalCount();
  // }

  incrementCount = () =>{
    this.setState((state, props) => ({
      count: state.count + 1
    }));
   
   
  }

  decrementCount = () =>{
      if(this.state.count > 0){
  	this.setState({
  		count: this.state.count - 1
      });
     
    }
  }

  totalCount = () =>{
      return this.state.count * this.state.priceValue[this.state.id]
  // console.log(this.state.count,this.state.priceValue[this.state.id], this.state.total)
  }


  render(){

    
    return(
        <div className="main-column-wrapper2">
             
          <div className="row"> {
           this.state.item.map((items) => <div className="">
              <Navbars />
         
              <div className="col-md-4">
                <Card style={{ width: '18rem', margin: '5px' }}>
                <img src={items.img} className="card-img-top" alt="..." style={{height: '250px'}} />
                    <Card.Body className="Dashboard-card">
          <Card.Title style={{color: 'white', fontSize: "135%"}} >{items.title}</Card.Title>
                    <div>
                        <select id="lang" style={{width: "150px", height: '35px', fontSize: '120%', paddingTop:'5%'}} onChange={this.handleSubmit2} value={this.state.value}>
                            <option value="wash">wash</option>
                            <option value="iron">iron</option>
                            <option value="wash-iron">wash-iron</option>
                        </select>
                        
                    </div>
                    <Card.Text style={{color: 'white', fontSize: '150%', paddingTop:'5%'}} >
                    {this.state.price[this.state.id]}
                    </Card.Text>
                    <Card.Text style={{color: 'white', fontSize: '120%'}}>Quantity</Card.Text>
                    <div className="qty" style={{float: 'left', color: 'white'}}>
                        <span className="minus bg-dark" onClick={this.decrementCount}>-</span>
                        <input type="number" className="count" name="qty" value={this.state.count} />
                        <span className="plus bg-dark" onClick={this.incrementCount}>+</span>
                   
                    <Card.Link href="#" className="btn btn-primary" style={{float: "right"}} 
                    onClick={() => this.addCart(items.id,items.title,this.state.type[this.state.id] ,this.state.price[this.state.id],this.state.total,this.state.count,items.img)}>Add</Card.Link>
                    </div>
                    </Card.Body>
                 </Card>
              </div>

                </div> 
               
            )}</div>

          <div class="Pricing" style={{height : this.state.addedItems.count * 100 +"px"}}> 
          {
            this.state.addedItems.map((items) =>  <div className="Pricing-items">
              <div className="item-descp">
                  <p className="title"><b>Name: {items.title}</b></p>
                  <p><b>Type: {items.type}</b></p>
                  <p><b>Rate: {items.descp}</b></p>
                  <p><b>Quantity: {items.count}</b></p>
                  <p><b>Price: {items.price}</b></p> 
                  <hr />
              </div>
             </div>       
            )}           
          </div> 
    
        </div>
    
    )

  }

}

export default Pricing;


/* 
<div className="row"> {
            _.times( 4, () => <div className="">
              <Navbars />
         
              <div className="col-md-4">
                <Card style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." style={{height: '250px'}} />
                    <Card.Body className="Dashboard-card">
                    <Card.Title style={{color: 'white', fontSize: "135%"}} >Shirt</Card.Title>
                    <div>
                        <select id="lang" style={{width: "150px", height: '35px', fontSize: '120%', paddingTop:'5%'}} onChange={this.handleSubmit2} value={this.state.value}>
                            <option value="wash">wash</option>
                            <option value="iron">iron</option>
                            <option value="wash-iron">wash-iron</option>
                        </select>
                        
                    </div>
                    <Card.Text style={{color: 'white', fontSize: '150%', paddingTop:'5%'}} >
                    {this.state.price[this.state.id]}
                    </Card.Text>
                    <Card.Text style={{color: 'white', fontSize: '120%'}}>Quantity</Card.Text>
                    <div className="qty" style={{float: 'left', color: 'white'}}>
                        <span className="minus bg-dark" onClick={this.decrementCount}>-</span>
                        <input type="number" className="count" name="qty" value={this.state.count} />
                        <span className="plus bg-dark" onClick={this.incrementCount}>+</span>
                   
                    <Card.Link href="#" className="btn btn-primary" style={{float: "right"}}>Add</Card.Link>
                    </div>
                    </Card.Body>
                 </Card>
              </div>

                </div> 
               
            )}</div>

*/

/* 
onClick={this.addCart(7,this.state.value,this.state.price[this.state.id],0,'')}
 
    <div className="item-desc">
                                   <span className="title">{this.state.item[0].title}</span>
                                   <p>{this.state.item[0].desc}</p>
                                   <p><b>Price: {this.state.item[0].price}$</b></p> 
                                   <p>
                                       <b>Quantity: {this.state.count}</b> 
                                   </p>
                                   
                                  
                               </div>
                               */

/*  <li className="collection-item avatar" key={this.state.item.id[0]}>
                               
                                <div className="item-desc">
                                    <span className="title">{this.state.item.title[0]}</span>
                                    <p>{this.state.item.desc[0]}</p>
                                    <p><b>Price: {this.state.item.price[0]}$</b></p> 
                                    <p>
                                        <b>Quantity: {this.state.item.quantity[0]}</b> 
                                    </p>
                                    <div className="add-remove">
                                        <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(this.state.item.id[0])}}>arrow_drop_up</i></Link>
                                        <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(this.state.item.id[0])}}>arrow_drop_down</i></Link>
                                    </div>
                                    <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(this.state.item.id[0])}}>Remove</button>
                                </div>
                                
                            </li>
                     
                            */