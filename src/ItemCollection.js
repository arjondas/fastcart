import React, {Component} from 'react';
import SingleItem from './SingleItem';

class Collections extends Component {
	render() {
		return this.props.data.map((item,index) => {
			return <SingleItem title = {item.Description} quantity = {item.Quantity} key = {item.id} price = {item.Price} id = {item.id} change = {this.props.change}/>;
		});
	}
}

export default Collections;