import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './component/layout/Home'

class App extends Component{

  render(){
    return (
      <div>
        Teleios!
        <Home />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
