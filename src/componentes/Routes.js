import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Testemonial from "./Testemonial";
import Work from "./Work";
const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/Sobre Nós" />
        <Route component={Contact} path="/Contato" />
        <Route component={Testemonial} path="/Avaliação" />
        <Route component={Work} path="/Nosso Trabalho" />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes;
