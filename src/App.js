import "./App.css";
import { Abilities } from "./components/abilities/Abilities";
import { Banner } from "./components/banner/Banner";
import { NavBar } from "./components/navBar/NavBar";
import { Missions } from "./components/missions/Missions"
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/Footer/Footer";



function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Banner />
      <Abilities />
      <Missions />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
