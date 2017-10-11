import React, {Component} from 'react';
import styles from './styles'

class Comment extends Component{

	render(){
		const comStyle=styles.commentsBox;

		return(
				<div style={comStyle.comContainer}>
					<p style={comStyle.comP}>{this.props.currentComment.body} </p>
					<span style={comStyle.comUser}>{this.props.currentComment.username} </span>
					<span style={comStyle.comS}> | </span>
					<span>{this.props.currentComment.timestamp}</span>
					<hr />
				</div>
		)
	}  
}
export default Comment;