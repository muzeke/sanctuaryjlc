import React from "react";
import "./menu-component.scss";
import logoSolo from "../../images/logo-solo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Menu = ({ handleClick, menuToggle }) => {
  const animationClass = (menuToggle) => {
    console.log(menuToggle + " MENU TOGGLE");

    let animatedClass = "";

    if (menuToggle === undefined) {
      animatedClass = "display-none";
    } else if (menuToggle) {
      if (window.innerWidth <= 600) {
        animatedClass = "slide-in-blurred-top";
      } else {
        animatedClass = "slide-in-blurred-right";
      }
    } else {
      if (window.innerWidth <= 600) {
        animatedClass = "slide-out-blurred-top";
      } else {
        animatedClass = "slide-out-blurred-right";
      }
    }
    return animatedClass;
  };

  return (
    <div id="menu-wrapper" className={menuToggle ? "opened" : ""}>
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
      <div id="menu" className={animationClass(menuToggle)}>
        <div className="container-fluid full-height">
          <div className="menu-header">
            <div className="churchLogo-mobile">
              <img className="logo-solo" src={logoSolo} alt="Sanctuary Logo" />
            </div>
            <input
              type="text"
              placeholder="Search Sanctuary"
              className="menu-search"
            />

            <div className="content">
              <div className="content-items">
                <Link to="/" className="content-item">
                  <div className="content-logo">
                    <FontAwesomeIcon icon="home" />
                  </div>
                  <div className="content-title"> Home</div>
                  <div className="go-icon">
                    <FontAwesomeIcon icon="angle-double-right" />
                  </div>
                </Link>

                <Link to="/sermon" className="content-item">
                  <div className="content-logo">
                    <FontAwesomeIcon icon="play" />
                  </div>
                  <div className="content-title"> Sermon</div>
                  <div className="go-icon">
                    <FontAwesomeIcon icon="angle-double-right" />
                  </div>
                </Link>

                <Link to="/locations" className="content-item">
                  <div className="content-logo">
                    <FontAwesomeIcon icon="map-marked-alt" />
                  </div>
                  <div className="content-title"> Locations</div>
                  <div className="go-icon">
                    <FontAwesomeIcon icon="angle-double-right" />
                  </div>
                </Link>

                <Link to="/about" className="content-item">
                  <div className="content-logo">
                    <FontAwesomeIcon icon="info-circle" />
                  </div>
                  <div className="content-title"> Who We Are</div>
                  <div className="go-icon">
                    <FontAwesomeIcon icon="angle-double-right" />
                  </div>
                </Link>

                <Link to="/events" className="content-item">
                  <div className="content-logo">
                    <FontAwesomeIcon icon="calendar-day" />
                  </div>
                  <div className="content-title"> Events</div>
                  <div className="go-icon">
                    <FontAwesomeIcon icon="angle-double-right" />
                  </div>
                </Link>

                <Link to="/ministries" className="content-item">
                  <div className="content-logo">
                    <FontAwesomeIcon icon="podcast" />
                  </div>
                  <div className="content-title"> Ministries</div>
                  <div className="go-icon">
                    <FontAwesomeIcon icon="angle-double-right" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
