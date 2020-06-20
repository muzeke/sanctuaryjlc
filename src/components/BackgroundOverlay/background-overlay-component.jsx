import React from "react";

const BackgroundOverlay = ({ menuToggle, handleClick }) => {
  const animationClass = (menuToggle) => {
    if (menuToggle === undefined) {
      return "display-none";
    } else {
      return menuToggle ? "fadeIn" : "fadeOut";
    }
  };

  return (
    <div
      onClick={(e) => handleClick(e)}
      id="background-overlay"
      className={animationClass(menuToggle)}
    ></div>
  );
};

export default BackgroundOverlay;
