import React from "react";
import logo from "../../images/logo-V2.png";
import logoSolo from "../../images/logo-solo.png";
import "./header-component.scss";
import { Link } from "react-router-dom";

import Navigation from "./Navigation.jsx";

const Header = (props) => {
  return (
    <header className="header">
      <div className="banner">
        <div className="churchLogo">
          <Link className="" to="/">
            <img className="logo" src={logo} alt="Sanctuary Logo" />{" "}
          </Link>
        </div>
        <div className="churchLogo-mobile">
          <img className="logo-solo" src={logoSolo} alt="Sanctuary Logo" />
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
