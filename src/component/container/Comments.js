import React, {Component} from 'react';
import { CreateComment, Comment} from '../presentation';
import styles from './styles'
import superagent from 'superagent'
import {APIManager} from '../../utils/'

class Comments extends Component{
	constructor(){
		super()
		this.state={
			// comment:{
			// 	username:'',
			// 	body:'',
			// },
			list:[ 
				 
			]
		}
       
	}
	submitComment(comment){
		console.log('submitted comment: '+JSON.stringify(comment))

		//let updatedComment=Object.assign({},this.state.comment);
		let updatedComment=Object.assign({},comment);

		APIManager.post('api/comment',comment,(err,res)=>{
			if (err){
				alert('error'+err.message);
				return
			}
			console.log('created '+JSON.stringify(res))
			let updatedList=Object.assign([],this.state.list)
			updatedList.push(res.result)
			this.setState({
				list:updatedList
			})

		})
		// let updatedList=Object.assign([],this.state.list)
		// updatedList.push(this.state.comment)
		// //front react to state changes.            
		// this.setState({
		// 	list: updatedList
		// })

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
	
	componentDidMount(){

		APIManager.get('/api/comment', null,(err,res)=>{
			if(err){
				alert('error'+err.message)
				return
			}
			this.setState({
				list: res.results
			})
		})
		// superagent
		// .get('/api/comment')
		// .query(null)
		// .set('Accept','application/json')
		// .end((err,res)=>{
		// 	if(err){
		// 		alert('error'+err)
		// 		return
		// 	}
		// 	console.log(JSON.stringify(res.body))
		// 	let data=res.body.results

		// 	this.setState({
		// 		list: data
		// 	})
		// })
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
					
					<CreateComment onCreate={this.submitComment.bind(this)} />
					</div>
				</div>
		)
	}
}
export default Comments;