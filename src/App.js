import Header from "./component/header"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <input type = "text" placeholder="Enter Text"/>
      <button type = "submit">Add To-Do</button>
    </div>

  );
}

export default App;
