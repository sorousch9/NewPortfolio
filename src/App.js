import "./App.css";
import { Abilities } from "./components/abilities/Abilities";
import { Banner } from "./components/banner/Banner";
import { NavBar } from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Abilities />
    </div>
  );
}

export default App;
