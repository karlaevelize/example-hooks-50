import logo from './logo.svg';
import './App.css';
import Title from "./components/Title"
import LikeCounter from "./components/LikeCounter"
import HogwartsHouses from "./components/HogwartsHouses"

function App() {
  return (
    <div className="App">
      <Title title="Hogwarts Houses"/>
      <LikeCounter/>
      <HogwartsHouses/>
    </div>
  );
}

export default App;
