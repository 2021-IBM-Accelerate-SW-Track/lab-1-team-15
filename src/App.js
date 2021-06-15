import Header from "./component/header"
import './App.css';
import React from "react";
import { render } from "react-dom/cjs/react-dom.development";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {items: [], currentItem: {text: '', key:'' }}
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  
  handleInput(e){
    this.setState({
      currentItem: {text: e.target.value, key: Date.now()}
    })
  }
  //function that adds items
  addItem(e){
    e.preventDefault(); //when we click on add our page will not refresh
    const newItem = this.state.currentItem;
    const newItems = [...this.state.items, newItem];
    this.setState({
      items: newItems,
      currentItem: {
        text: '',
        key: ''
      }
    })
  }
  
  render(){
    return (
      <div className="App">
        <Header/>
          <form id = "button">
            <input type = "text" placeholder="Enter To-Do"/>
            <button type = "submit">Add To-Do</button>
          </form>
      </div>
    );
  }
}

export default App;