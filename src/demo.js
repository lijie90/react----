import React, { Component } from 'react';
import './demo.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',a:'你大爷的，子组件传过来的'};

    //this.handleChange = this.handleChange.bind(this);
 
  }
  handleChange(pre){
    //const a = e.nativeEvent;
     // console.log(a.target.id);
     console.log(pre);
  }
  handleClick(){
    if(this.props.onClick){
      this.props.onClick(this.state.a)
    }
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
      <div className="demo">
        <ul>{number.map((item,index)=> 
        <li key={item.id.toString()}  onClick={this.handleChange.bind(this,item.id)}>
        {item.name}
        </li>)}
        <button onClick={this.handleClick.bind(this)}>点击我通知父组件</button>
      </ul>
      </div>
    );
  }
}

export default App;
