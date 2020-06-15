import React from "react";
import logo from "../../images/logo.jpg";
import "./component.scss";

import Navigation from "./Navigation.jsx";
import Menu from "./Menu.jsx";

const Header = (props) => {
  return (
    <header className="header">
      <div className="banner">
        <img className="logo" src={logo} alt="Sanctuary Logo" />
      </div>
      <Navigation />
      <Menu />
    </header>
  );
};

export default Header;
