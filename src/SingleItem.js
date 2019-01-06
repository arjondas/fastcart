import React, {Component} from 'react';
import classes from './SingleItem.css';

class SingleItem extends Component {
	
	render() {
		var view1 = null;
		var view2 = null;
		if(this.props.quantity > 0) {
			view1 = (
				<div className = {classes.Incrementer}>
					<div className = {classes.Minus} onClick = {() => this.props.change(this.props.id, false)}>-</div>
					<div className = {classes.Quantity} onClick = {() => this.props.change(this.props.id, true)}>{this.props.quantity} in bag</div>
					<div className = {classes.Plus} onClick = {() => this.props.change(this.props.id, true)}>+</div>
				</div>
			);
			view2 = (
				<div className = {classes.SecondView}>
					<div className = {classes.Incrementer}>
						<div className = {classes.Minus} onClick = {() => this.props.change(this.props.id, false)}><br/><br/>-</div>
						<div className = {classes.Quantity} onClick = {() => this.props.change(this.props.id, true)}><br/>{this.props.price * this.props.quantity} Tk.<br/>{this.props.quantity}</div>
						<div className = {classes.Plus} onClick = {() => this.props.change(this.props.id, true)}><br/><br/>+</div>
					</div>
				</div>
			);
		} else {
			view1 = (
				<div className = {classes.AddToCartButton} onClick = {() => this.props.change(this.props.id, true)}>Add to Cart</div>
			);
			view2 = (
				<div className = {classes.SecondView} onClick = {() => this.props.change(this.props.id, true)}><br/><br/><br/><br/>Add to Cart</div>
			);
		}
		
		return(
			<div className = {classes.Singleton}>
				<div className = {classes.ItemInfo}>
					<div className = {classes.FirstView}>
						<div className = {classes.FirstViewContainer}>
							<div className = {classes.FirstViewPicture}></div>
							<div className = {classes.FirestViewTitle}>{this.props.title}<br/>{this.props.price} Tk</div>
						</div>
						{view2}
					</div>
				</div>
				<div className = {classes.AddToCart}>
					{view1}
				</div>
			</div>
		);
	}
}

export default SingleItem;