import React, { Component } from 'react';
import classes from './Summary.css';

class Summary extends Component {

	render() {
		return (
			<div className = {classes.Summary}>Place Order
				<div className = {classes.Total}>{this.props.total} Tk</div>
			</div>
		)
	}
}

export default Summary;