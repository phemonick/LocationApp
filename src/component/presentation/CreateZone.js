import React , {Component} from 'react'

class CreateZone extends Component{

	constructor(){
		super();
		this.state={
			zone:{

			}
		}
	}


	updateZone(event){
		console.log(event.target.id +"==" +event.target.value)
		let update=Object.assign({},this.state.zone)
		update[event.target.id]=event.target.value
		this.setState({
			zone: update
		})
	}

	passZone(){
		let updated=Object.assign({},this.state.zone)
		//let value=this.state.zone
		updated['zipCodes']=updated.zipCode.split(',')
		this.props.onCreate(updated)
	}

	render(){

		return(
			<div>
				<input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" name="" placeholder="name" />
				<input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" name="" placeholder="zipCode" />
				<button onClick={this.passZone.bind(this)} className="btn-btn-info">Create</button>
				</div>

			)
	}
}
export default CreateZone