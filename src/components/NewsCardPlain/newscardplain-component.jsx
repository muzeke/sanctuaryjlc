import React, { useState, useEffect } from "react";
import "./newscardplain-component.scss";

import Carousel from "nuka-carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewsCardPlain = ({ title, subTitle, buttonText, imgUrl }) => {
  const [loader, setLoader] = useState(true);
  const [img, setImg] = useState();

  const getImage = async () => {
    const img = await fetch(imgUrl);
    setImg(img.url);
    setLoader(false);
  };

  const setCardStyle = () => {
    return {
      backgroundColor: "var(--gray)",
      fontSize: "15px",
      backgroundImage: `url(${img}) `,
    };
  };

  const NewsCardInfoGenerator = (function () {
    const titleStyleDefaults = {
      color: "#fff",
      fontFamily: "Raleway",
      fontWeight: 700,
      lineHeight: subTitle == "" ? "45px" : "25px",
      textShadow: "2px 4px 3px rgba(0, 0, 0, 0.3)",
      fontSize: "2em",
    };

    const subtitleStyleDefaults = {
      fontSize: "1.4em",
      lineHeight: "45px",
      textShadow: "2px 4px 3px rgba(0, 0, 0, 0.3)",
      color: "#fff",
    };

    const newsTitleAlign = (align) => {
      return align === "top"
        ? null
        : align === "middle"
        ? { margin: "auto 0" }
        : { marginTop: "auto" };
    };

    const buttonStyleDefaults = {};
    const template = (
      titleStyles,
      subtitleStyles,
      buttonStyles,
      newsTitleAlign
    ) => {
      console.log(titleStyles);
      return (
        <div className="news-title" style={newsTitleAlign}>
          <div className="title" style={titleStyles}>
            {title}
          </div>
          <div className="subtitle" style={subtitleStyles}>
            {subTitle}
          </div>
          <button className="church-btn " style={buttonStyles}>
            {buttonText}
          </button>
        </div>
      );
    };

    const generateCard = (titleStyles, subtitleStyles, buttonStyles, align) => {
      return template(
        { ...titleStyleDefaults, ...titleStyles },
        { ...subtitleStyleDefaults, ...subtitleStyles },
        { ...buttonStyleDefaults, ...buttonStyles },
        newsTitleAlign(align)
      );
    };

    return {
      generateCard,
    };
  })();

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="card news-card-plain" style={setCardStyle()}>
      <div className="content">
        <div className={`loader-wrapper ${loader ? "" : " fadeOut-3s"}`}>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        {loader == false
          ? NewsCardInfoGenerator.generateCard(
              { fontFamily: "Satisfy" },
              null,
              null,
              "bottom"
            )
          : null}
      </div>
    </div>
  );
};

export default NewsCardPlain;
