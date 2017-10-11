import React, {Component} from 'react';
import styles from './styles'
// jsx css are in {{}}, no - allowed, values are in ''
class Zone extends Component{

	onSelectTitle(event){
		event.preventDefault()
		console.log('am selected'+ this.props.index)
		this.props.select(this.props.index)

	}
		
	render(){
		const style=styles.zone;
		const zipCode=this.props.currentZone.zipCodes[0]
		const title=(this.props.isSelected)? <a style={style.title} href="#">{this.props.currentZone.name}</a> : <a  href="#">{this.props.currentZone.name}</a>
		return(
			<div style={style.container}>
				<h2 onClick={this.onSelectTitle.bind(this)} style={style.header}>
				{title}
				</h2>
				<span className="detail">{zipCode}</span><br />
				<span className="detail">{this.props.currentZone.numComments} comments</span>

			</div>

			)
	}
	
}

	


export default Zone;