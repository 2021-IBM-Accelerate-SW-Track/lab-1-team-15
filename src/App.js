import Header from "./component/header";
import React from "react";
import './App.css';
import listItems from "./listItems";

class App extends React.Component{

 constructor(props){
  super(props);
  this.state={
    items:[],
    currentItem:{ text:'', key:'' }
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
  console.log(newItem);
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
          <button type = "submit">Add Item
          </button>
        </form>
      <listItems items = {this.state.items}></listItems>  
    </div>
  );
}
}

export default App;