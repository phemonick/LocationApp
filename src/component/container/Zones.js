import React, { Component } from 'react'
import Zone from '../presentation/Zone'
//superagent for api request
import superagent from 'superagent'
//state and props both maintain data
//props are assigned to u but u determine ur state. props are passed down , state is self assigned

class Zones extends Component{

	//the html is defined here using jsx
	constructor(){
		super();
		this.state={
			myZones:{
				name:'',
				zipCode:'',
				numComments:''
			},
			list:[
			
			]
		}
	}
	//get called when component shows up
	componentDidMount(){
		console.log("did mount")

		superagent
		.get('/api/zone')
		.query(null)
		.set('Accept','application/json')
		//callback
		.end((err,res)=>{
			if (err){
				alert('error '+err)
				return
			}
			console.log(JSON.stringify(res.body))
			let data=res.body.results
			console.log(data)
			this.setState({
				list:data
			})
		})

	}
	createZone(){
		//console.log('created'+JSON.stringify(this.state.myZones))
		let update=Object.assign([],this.state.list);
		update.push(this.state.myZones);
		this.setState({
			list: update
		})
	}
	updateZone(event){
		//console.log('update '+event.target.value);
		let zoneRep=Object.assign({},this.state.myZones);
		zoneRep[event.target.id]=event.target.value;
		this.setState({
			myZones:zoneRep
		})
	}
	/*updateCode(event){
		//console.log('update '+event.target.value);
		let codeRep=Object.assign({},this.state.myZones);
		codeRep['zipCode']=event.target.value;
		this.setState({
			myZones:codeRep
		})
	}*/
	updateComent(event){
		// console.log('update '+event.target.value);
		let comRep=Object.assign({},this.state.myZones);
		comRep['numComments']=event.target.value;
		this.setState({
			myZones:comRep
		})
	}

	render(){

		const listItem=this.state.list.map((item,i)=>{
			return(
			<li key={i}><Zone  currentZone={item}/></li>
			)
		})
//u put a variable inside {}
		return (
			<div> 
					<ol>
					{listItem}



					</ol>
					<input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" name="" placeholder="name" />
					<input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" name="" placeholder="zipCode" />
					<input onChange={this.updateComent.bind(this)} className="form-control" type="text" name="" placeholder="numComments" />
					<button onClick={this.createZone.bind(this)} className="btn-btn-info">Create</button>
			</div>
			)
	}
} 
export default Zones 