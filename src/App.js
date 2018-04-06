import React, { Component } from 'react';
import logo from './logo.svg';
import Demo from './demo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  handleChange(pre){
     console.log(pre);
  }
  onChildClick(msg){
    console.log(msg);
 }
  
  render() {
    const  number = [
      {id:'234',
      name:'杰哥'},
      {id:'34',
      name:'小杨'},
      {id:'35',
      name:'小杨'},
      {id:'36',
      name:'小杨'},
      {id:'346',
      name:'小杨'}
    ];
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>{number.map((item,index)=> 
        <li key={item.id.toString()}  onClick={this.handleChange.bind(this,item.id)}>
        {item.name}
        </li>)}
      </ul>
      <Demo onClick={this.onChildClick}/>
      </div>
    );
  }
}

export default App;
