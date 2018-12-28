import React, { Component } from 'react';
import './App.css';
import CartHeader from "./components/CartHeader"
import CartFooter from "./components/CartFooter"
import CartItems from "./components/CartItems"
import AddItem from "./components/addItem"

class App extends Component {

  constructor() {
    super()
    this.state = {
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      cartList: [],
      name: "",
     

    }
  }

  addItem = (event) => {
    event.preventDefault()
    console.log("addItem called", event)
    
    let newItem = {
      product: {
        id: this.state.cartList.length + 1,
        name: this.state.name,
        priceInCents: this.state.priceInCents
      },
      quantity: this.state.quantity 
    }
    this.setState({
      cartList: [...this.state.cartList, newItem]
    })
    console.log(newItem)
  }

  
  selectItem = (event) => {
    let findPrice = this.state.products.filter(product => event.target.value === product.name)
    let priceNow = findPrice.map(product => product.priceInCents)
     

    event.preventDefault()
    console.log("selectItem called", event.target.value)
    this.setState({
      name: event.target.value,
      priceInCents: priceNow[0]
    })
  }

  quantity = (event) => {
    event.preventDefault()
    console.log('quanity', event.target.value)
    this.setState({
      quantity: event.target.value
    })
  }

  render() {
    var cartItemsList = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]

    return (
      <div className="App">
        <CartHeader/>
        <CartItems cartItemsList ={cartItemsList}/>
        <AddItem products={this.state.products} addItem={this.addItem} selectItem={this.selectItem} quantity={this.quantity} price={this.price}/>
        {/* <p>{cartList} </p> */}
        <CartFooter copyright={2016}/>
      </div>
    );
  }
}

export default App;