import "./App.css";
import { Abilities } from "./components/abilities/Abilities";
import { Banner } from "./components/banner/Banner";

import  Missions from "./components/missions/Missions";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/Footer/Footer";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Abilities />
      <Missions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
