import logo from './logo.svg';
import './App.css';
import Title from "./components/Title"
import LikeCounter from "./components/LikeCounter"
import HogwartsHouses from "./components/HogwartsHouses"
import FetchingData from "./components/FetchingData"

function App() {
  return (
    <div className="App">
      <Title title="Hogwarts Houses"/>
      <LikeCounter/>
      <FetchingData/>
      <HogwartsHouses/>
      
    </div>
  );
}

export default App;
