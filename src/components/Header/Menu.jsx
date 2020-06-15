import React, { useState } from "react";
import "./Menu.scss";

const Menu = (props) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    menuToggle ? setMenuToggle(false) : setMenuToggle(true);
    console.log(menuToggle);
  };

  return (
    <div className="menu-wrapper">
      <button
        className={
          menuToggle
            ? "hamburger hamburger--squeeze trigger is-active close-menu"
            : "hamburger hamburger--squeeze trigger "
        } //is-active close-menu
        type="button"
        onClick={(e) => handleClick(e)}
      >
        <span className="hamburger-box ">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      {menuToggle ? (
        <div id="menu" className="slide-in-blurred-right">
          <div className="container-fluid full-height">
            <div className="row menu-header-wrapper">
              <div className="col-12 search col-sm-10 order-sm-1">s</div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Menu;
