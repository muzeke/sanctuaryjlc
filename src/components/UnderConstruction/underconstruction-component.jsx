import React from "react";
import "./underconstruction-component.scss";

const ConstructionPage = () => {
  return (
    <div className="construction-wrapper">
      <div className="lds-heart">
        <div style={{ backgroundColor: "var(--red)" }}></div>
      </div>
      <h1 className="slide-in-blurred-right">Coming Soon</h1>

      <article className="slide-in-blurred-left">
        This page is under construction
      </article>
    </div>
  );
};

export default ConstructionPage;
