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
      total : 0

    }
  }

  addItem = (event) => {
    event.preventDefault()
    
    let newItem = {
      product: {
        id: this.state.cartList.length + 1,
        name: this.state.name,
        priceInCents: this.state.priceInCents
      },
      quantity: this.state.quantity
    }

    let newTotal = {
      total: this.state.priceInCents * this.state.quantity
    }

    this.setState({
      cartList: [...this.state.cartList, newItem],
      total: (this.state.total + newTotal.total /100.00)
    })
    console.log(newItem)
  }

  
  selectItem = (event) => {
    let findPrice = this.state.products.filter(product => event.target.value === product.name)
    let priceNow = findPrice.map(product => product.priceInCents)
    event.preventDefault()
    this.setState({
      name: event.target.value,
      priceInCents: priceNow[0]
      //total: priceNow.reduce((a, b) => a + b )
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
    //Do I still need this?
    // var cartItemsList = [
    //   { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
    //   { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
    //   { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    // ]

    return (
      <div className="App">
        <CartHeader/>
        <CartItems cartList ={this.state.cartList}/>
        <AddItem products={this.state.products} addItem={this.addItem} selectItem={this.selectItem} quantity={this.quantity}  total={this.state.total}/>
        <CartFooter copyright={2016}/>
      </div>
    );
  }
}

export default App;