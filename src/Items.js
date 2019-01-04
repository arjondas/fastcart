import React, {Component} from 'react';
import ItemBlock from './ItemBlock';

class Items extends Component {
		render() {
			return this.props.data.map((item,index) => {
				return <ItemBlock key = {item.id} description = {item.Description} quantity = {item.Quantity} price = {item.Price} id = {item.id} change = {this.props.change} delete = {this.props.delete}/>
			})
		}
  }
  
  export default Items;
  