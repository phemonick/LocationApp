import React, {Component} from 'react';
import Comment from '../presentation/Comment';
import styles from './styles'

class Comments extends Component{
	constructor(){
		super()
		this.state={
			comment:{
				username:'',
				body:'',
				timestamp:''

			},
			list:[
				
			]
		}

	}
	submitComment(){
		console.log('submitted comment: '+JSON.stringify(this.state.comment))
		let updatedList=Object.assign([],this.state.list)
		updatedList.push(this.state.comment)
		//front react to state changes.            
		this.setState({
			list: updatedList
		})

	}
	//event is default input when being called
	updateUsername(event){
		//console.log('updated username'+event.target.value)
		//creating a copy of state
		let updatedComment=Object.assign({},this.state.comment)
		updatedComment['username'] = event.target.value
		//updating the state
		this.setState({
			comment:updatedComment
		})
	}
	updateBody(event){
		//console.log('updated comment '+event.target.value)

		let updatedvalue=Object.assign({},this.state.comment);
		updatedvalue['body']=event.target.value;
		this.setState({
			comment: updatedvalue
		})

	}
	updateTime(event){
		//console.log('time '+event.target.value);

		let time=Object.assign({},this.state.comment);
		time['timestamp']=event.target.value;

		this.setState({
			comment: time
		})
	}


	render(){
		const comstyle=styles.commentsBox;
		const commentList = this.state.list.map((comment,i)=>{
			return(
					<li key={i}><Comment currentComment={comment}/></li>
				)
				
		})

		return(
				<div>
					<h2>comments: Zone 1 </h2>
					<div style={comstyle.comdiv}>
					<ul style={comstyle.ul}>
						{commentList}
						
					</ul>
					<input onChange={this.updateUsername.bind(this)} className="form-control" type="text" name="" placeholder="username" />
					<input onChange={this.updateBody.bind(this)} className="form-control" type="text" name="" placeholder="comment" />
					<input onChange={this.updateTime.bind(this)} className="form-control" type="text" name="" placeholder="timestamp" />

					<button onClick={this.submitComment.bind(this)} className="btn-btn-info">Submit Comment</button>
					</div>
				</div>
		)
	}
}
export default Comments;