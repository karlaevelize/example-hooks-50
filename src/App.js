import logo from './logo.svg';
import './App.css';
import Title from "./components/Title"
import LikeCounter from "./components/LikeCounter"
import HogwartsHouses from "./components/HogwartsHouses"
import FetchingData from "./components/FetchingData"
import {useState} from "react"

function App() {

  const [state, setState] = useState(true)
  console.log("state no app", state)

  return (
    <div className="App">
      <Title title="Hogwarts Houses"/>
      <LikeCounter/>
      <FetchingData/>
      <button onClick={() => setState(!state)}>Show Component</button>
      {state ? <HogwartsHouses/> : ""}
      {/* <HogwartsHouses/> */}
      
    </div>
  );
}

export default App;
