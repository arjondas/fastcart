import React, { Component } from 'react';
import classes from './BlockStyle.css';

class ItemBlock extends Component {
  render() {
    return (
      <div className = {classes.ItemBlock}>
		  <div className = {classes.Picture} onClick = {() => this.props.delete(this.props.id)}>Pic</div>
		  <div className = {classes.Description}>{this.props.description}<br/><br/><div className = {classes.UnitPrice}>Per unit price {this.props.price} Tk</div></div>
		  <div className = {classes.Quantity}>
		  	<div className = {classes.QButtonPos} onClick = {() => this.props.change(this.props.id,true)}>+</div>
		  	<div className = {classes.QLabel}>{this.props.quantity}</div>
			<div className = {classes.QButtonNeg} onClick = {() => this.props.change(this.props.id,false)}>-</div>
		  </div>
		  <div className = {classes.Price}>{this.props.price * this.props.quantity} Tk</div>
	  </div>
	);
  }
}

export default ItemBlock;
