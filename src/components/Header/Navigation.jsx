import React from "react";
import "./Navigation.scss";

const Navigation = (props) => {
  return (
    <nav>
      <ul id="menu-top-nav" className="">
        <li className="menu-item">
          <a href="#">Sermon</a>
        </li>
        <li className="menu-item ">
          <a href="#">Who we are</a>
        </li>
        <li className="menu-item ">
          <a href="#">Events</a>
        </li>
        <li className="menu-item ">
          <a href="#">Ministries</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
