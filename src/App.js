import React, { Component } from 'react';
import classes from './App.css';
import Collection from './ItemCollection';
// import Items from './Items';
// import Summary from './Summary';
import SingleItem from './SingleItem';

class App extends Component {
  state = {
    data : [
      {id:1, Description: "Salt", Quantity: 0, Price: 200},
      {id:2, Description: "Cat", Quantity: 0, Price: 300},
      // {id:3, Description: "Dog", Quantity: 0, Price: 100},
      // {id:4, Description: "Tomato", Quantity: 0, Price: 400},
      // {id:5, Description: "Onion", Quantity: 0, Price: 50},
      // {id:6, Description: "Chicken", Quantity: 0, Price: 150},
      // {id:7, Description: "Egg", Quantity: 0, Price: 40},
      // {id:8, Description: "Rice", Quantity: 0, Price: 60},
      // {id:9, Description: "Fish", Quantity: 0, Price: 300},
      // {id:10, Description: "Mutton", Quantity: 0, Price: 850},
    ],
    totalPrice : 0,
  }

  updateQuantityBagHandler = (itemID, isIncrement) => {
    const itemIndex = this.state.data.findIndex(n => {
      return n.id === itemID;
    });
    const tempDataBlock = {...this.state.data[itemIndex]};
    if(isIncrement) {
      tempDataBlock.Quantity += 1;
    } else {
      if(tempDataBlock.Quantity > 0) {
        tempDataBlock.Quantity -= 1;
      }
    }
    const tempData = [...this.state.data];
    tempData[itemIndex] = tempDataBlock;
    this.setState({data: tempData});
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
        {/* <Items data = {this.state.data} change = {this.updateQuantityHandler} delete = {this.deleteItemHandler}/> */}
        {/* <Summary total = {this.state.totalPrice}/> */}
        <Collection data = {this.state.data} change = {this.updateQuantityBagHandler}/>
      </div>
    );
  }
}

export default App;
