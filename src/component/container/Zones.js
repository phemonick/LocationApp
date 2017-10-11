import React, { Component } from 'react'
import {Zone, CreateZone} from '../presentation'
//superagent for api request
//import superagent from 'superagent'
//state and props both maintain data
//props are assigned to u but u determine ur state. props are passed down , state is self assigned
import {APIManager} from '../../utils/'
class Zones extends Component{

	//the html is defined here using jsx
	constructor(){
		super();
		this.state={
			selected:0,
			list:[
			
			]
		}
	}
	//get called when component shows up
	componentDidMount(){
		console.log("did mount")
		APIManager.get('/api/zone',null,(err,res)=>{
			
			if (err){
				alert('error '+err.message)
				return
			}
			this.setState({
				list:res.results
			})
		})

		/*superagent
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
		})*/

	}
	createZone(zone){
		console.log('created'+JSON.stringify(zone))
		//let updatedZone=Object.assign({},this.state.myZones)
		let updatedZone=Object.assign({},zone)
		// updatedZone['zipCodes']=updatedZone.zipCode//.split(',')

		APIManager.post('/api/zone',updatedZone,(err,res)=>{
			if (err){
				alert('error'+ err.message)
				return
			}
			console.log('zone created'+JSON.stringify(res))
			let updatedList= Object.assign([],this.state.list)
			updatedList.push(res.result);
			this.setState({
				list:updatedList
			})
		})


		// let update=Object.assign([],this.state.list);
		// update.push(this.state.myZones);
		// this.setState({
		// 	list: update
		// })
	}
	// updateZone(event){
	// 	//console.log('update '+event.target.value);
	// 	let zoneRep=Object.assign({},this.state.myZones);
	// 	zoneRep[event.target.id]=event.target.value;
	// 	this.setState({
	// 		myZones:zoneRep
	// 	})
	// }
	/*updateCode(event){
		//console.log('update '+event.target.value);
		let codeRep=Object.assign({},this.state.myZones);
		codeRep['zipCode']=event.target.value;
		this.setState({
			myZones:codeRep
		})
	}*/
	// updateComent(event){
	// 	// console.log('update '+event.target.value);
	// 	let comRep=Object.assign({},this.state.myZones);
	// 	comRep['numComments']=event.target.value;
	// 	this.setState({
	// 		myZones:comRep
	// 	})
	// }
	selectZone(index){
		console.log('selected x=zone'+ index)
		this.setState({
			selected:index
		})
	}

	render(){

		const listItem=this.state.list.map((item,i)=>{
			let selected= (i==this.state.selected)
			return(
			<li key={i}>
			<Zone index={i} select={this.selectZone.bind(this)} isSelected={selected}  currentZone={item} />
			</li>
			)
		})
//u put a variable inside {}
		return (
			<div> 
					<ol>
					{listItem}



					</ol>
					
					<CreateZone onCreate={this.createZone.bind(this)} />
			</div>
			)
	}
} 
export default Zones 