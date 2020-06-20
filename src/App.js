import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./stylesheets/defaults.scss";

import Header from "./components/Header/header-component.jsx";
import Menu from "./components/Menu/menu-component.jsx";
import BackgroundOverlay from "./components/BackgroundOverlay/background-overlay-component.jsx";
import Home from "./components/Home/home-component.jsx";
import About from "./components/About/about-component.jsx";
import Locations from "./components/Locations/locations-component.jsx";
import Footer from "./components/Footer/footer-component.jsx";
import Construction from "./components/UnderConstruction/underconstruction-component.jsx";
import "./components/fontawesome";

function App() {
  const [menuToggle, setMenuToggle] = useState();

  const handleClick = (e) => {
    e.preventDefault();

    if (menuToggle) {
      //document.body.classList.remove("overflow-hidden");

      const root = document.getElementsByTagName("html")[0];
      root.classList.remove("overflow-hidden");

      setMenuToggle(false);
    } else {
      //document.body.classList.add("overflow-hidden");

      const root = document.getElementsByTagName("html")[0];
      root.classList.add("overflow-hidden");
      setMenuToggle(true);
    }

    console.log(menuToggle);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Menu menuToggle={menuToggle} handleClick={handleClick} />
        <BackgroundOverlay menuToggle={menuToggle} handleClick={handleClick} />
        <div className="wrap flex-grow-noshrink" role="document">
          <Switch>
            <Route path="/locations" component={Construction} />
            <Route path="/about" component={Construction} />
            <Route path="/sermon" component={Construction} />
            <Route path="/ministries" component={Construction} />
            <Route path="/events" component={Construction} />
            <Route path="/pageunderconstruction" component={Construction} />
            <Route path="/" component={Home} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
