import Header from "./component/header"
import './App.css';

function App() {
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

export default App;
