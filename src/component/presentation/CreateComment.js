import React , { Component } from 'react'

class CreateComment extends Component{
	constructor(){
		super()
		this.state={
			comment:{

			}
		}}

		updateComment(event){
			console.log('comment: '+event.target.id + '==' + event.target.value)
			let updatedComment=Object.assign({},this.state.comment)
			 updatedComment[event.target.id]=event.target.value
			 this.setState({
			 	comment: updatedComment
			 })
		
	}
	submitComment(event){
		console.log('submitComment: '+JSON.stringify(this.state.comment))
		this.props.onCreate(this.state.comment)
	}
	render(){

		return(
		<div>
			<h3> Create Comment </h3>
			<p> {this.state.comment.body} </p>
			<input onChange={this.updateComment.bind(this)} id="username" className="form-control" type="text" name="" placeholder="username" />
			<input onChange={this.updateComment.bind(this)} id="body" className="form-control" type="text" name="" placeholder="comment" />
							

			<button onClick={this.submitComment.bind(this)}  className="btn-btn-info">Submit Comment</button>

		</div>

			)
	}
}
export default CreateComment