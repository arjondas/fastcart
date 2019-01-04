import React, { Component } from 'react';
import classes from './App.css';
import Items from './Items';
import Summary from './Summary';

class App extends Component {
  state = {
    data : [
      {id:1, Description: "Salt", Quantity: 1, Price: 200},
      {id:2, Description: "Cat", Quantity: 2, Price: 300},
      {id:3, Description: "Dog", Quantity: 4, Price: 100}
    ],
    totalPrice : 0,
  }

  componentWillMount() {
    var total = 0;
    this.state.data.map((item) => {
      total = total + (item.Price * item.Quantity);
    });
    this.setState({totalPrice: total});
  }

  updateQuantityHandler = (itemID, increment) => {
    const itemIndex = this.state.data.findIndex(n => {
      return n.id === itemID;
    });
    const tempDataBlock = {...this.state.data[itemIndex]};
    if(increment) {
      tempDataBlock.Quantity += 1;
    } else {
      if(tempDataBlock.Quantity > 1) {
        tempDataBlock.Quantity -= 1;
      }
    }
    const tempData = [...this.state.data];
    tempData[itemIndex] = tempDataBlock;
    var total = 0;
    tempData.map((item) => {
      total = total + (item.Price * item.Quantity);
    });
    this.setState({data: tempData, totalPrice: total});
  }

  deleteItemHandler = (itemID) => {
    const itemIndex = this.state.data.findIndex(n => {
      return n.id === itemID;
    });
    const data = [...this.state.data];
    data.splice(itemIndex,1);
    var total = 0;
    data.map((item) => {
      total = total + (item.Price * item.Quantity);
    });
    this.setState({data: data, totalPrice: total});
  }

  render() {
    return (
      <div className= {classes.App}>
        <Items data = {this.state.data} change = {this.updateQuantityHandler} delete = {this.deleteItemHandler}/>
        <Summary total = {this.state.totalPrice}/>
      </div>
    );
  }
}

export default App;
