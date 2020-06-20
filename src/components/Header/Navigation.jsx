import React from "react";
import "./Navigation.scss";

import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    // <nav className="navigation">
    //   <ul id="menu-top-nav" className="">
    //     <li className="menu-item">
    //       <a href="#">Sermon</a>
    //     </li>
    //     <li className="menu-item ">
    //       <a href="#">Who we are</a>
    //     </li>
    //     <li className="menu-item ">
    //       <a href="#">Events</a>
    //     </li>
    //     <li className="menu-item ">
    //       <a href="#">Ministries</a>
    //     </li>
    //   </ul>
    // </nav>

    <nav className="navigation">
      <ul id="menu-top-nav" className="">
        <li className="menu-item">
          <Link to="/sermon">Sermon</Link>
        </li>
        <li className="menu-item">
          <Link to="/locations">Locations</Link>
        </li>
        <li className="menu-item ">
          <Link to="/about">Who we are</Link>
        </li>
        <li className="menu-item ">
          <Link to="/events">Events</Link>
        </li>
        <li className="menu-item ">
          <Link to="/ministries">Ministries</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
