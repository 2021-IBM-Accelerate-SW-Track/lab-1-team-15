import Header from "./component/header";
import React from "react";
import './App.css';
import ListItems from './ListItems.js';

class App extends React.Component{

 constructor(props){
  super(props);
  this.state={
    items:[],
    currentItem:{text:'', key:''}
  }
  this.handleInput = this.handleInput.bind(this);
  this.addItem = this.addItem.bind(this);
 }
handleInput(e){
  this.setState({
    currentItem:{text: e.target.value, key: Date.now()}
  })
}
addItem(e){
  e.preventDefault(); 
  const newItem = this.state.currentItem;
  if(newItem.text!==""){
      const newItems = [...this.state.items, newItem];
      this.setState({items:newItems, currentItem:{text:'', key:''}})
  }
}

render(){
 return (
    <div className="App">
      <Header/>
        <form id = "to-do-form" onSubmit={this.addItem}>
          <input type = "text" placeholder="Enter To-Do"
          value = {this.state.currentItem.text}
          onChange = {this.handleInput}/>
          <button type = "submit">Add Item</button>
        </form>
      <ListItems items = {this.state.items}></ListItems> 
      <completeTodo key = {this.state.key} ></completeTodo>  
    </div>
  );
}
}

export default App;