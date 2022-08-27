import "./App.css";
import { Abilities } from "./components/abilities/Abilities";
import { Banner } from "./components/banner/Banner";
import { NavBar } from "./components/navBar/NavBar";
import { Missions } from "./components/missions/Missions"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Abilities />
      <Missions />
    </div>
  );
}

export default App;
