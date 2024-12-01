import React from "react";
import "./App.css";
import Home from "./componentes/Home";
import About from "./componentes/About";
import Work from "./componentes/Work";
import Testemonial from "./componentes/Testemonial";
import Contact from "./componentes/Contact";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testemonial />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;
