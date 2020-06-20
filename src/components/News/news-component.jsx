import React, { useState, useEffect } from "react";
import "./news-component.scss";

import Carousel from "nuka-carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const News = () => {
  const colors = ["7732bb", "047cc0", "00884b", "e3bc13", "db7c00", "aa231f"];

  const [settings, setSettings] = useState({
    slideIndex: 0,
    length: colors.length,
    wrapAround: false,
    underlineHeader: false,
    slidesToShow: 1,
    slidesToScroll: "auto",
    cellAlign: "left",
    transitionMode: "scroll",
    initialSlideHeight: 100,
    width: "100%",
    withoutControls: false,
    heightMode: "first",
  });

  const handleImageClick = () => {
    setSettings({ underlineHeader: !settings.underlineHeader, ...settings });
  };

  const [carouselAssets, setCarouselAssets] = useState([]);

  const [loader, setLoader] = useState(true);
  const ic = "HEY " + <FontAwesomeIcon icon="angle-right" />;

  const getImage = async () => {
    const res = await fetch("https://picsum.photos/600");
    const res2 = await fetch("https://picsum.photos/600");
    const res3 = await fetch("https://picsum.photos/600");
    const res4 = await fetch("https://picsum.photos/600");
    const res5 = await fetch("https://picsum.photos/600");

    setLoader(false);
    setCarouselAssets([
      {
        img: res.url,
        title: "Let us Celebrate Father's Day",
        subTitle: "Join us this Sunday",
        buttonText: "Learn More",
        buttonAction: null,
      },
      {
        img: res2.url,
        title: "What are you doing this Sunday?",
        subTitle: "Join us worship the Lord",
        buttonText: "Find Location",
        buttonAction: null,
      },
      {
        img: res3.url,
        title: "Our New Church in Papaya, Nasugbu",
        subTitle: "Become part of our Family!",
        buttonText: "Learn More",
        buttonAction: null,
      },
    ]);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="card news-card slide-in-blurred-up-1">
      <div className="content">
        <div className={`loader-wrapper ${loader ? "" : " fadeOut-3s"}`}>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        {loader == false ? (
          <div className="carousel-wrapper" style={{ minHeight: "400px" }}>
            <Carousel
              {...settings}
              defaultControlsConfig={{
                nextButtonText: <FontAwesomeIcon icon="angle-right" />,
                prevButtonText: <FontAwesomeIcon icon="angle-left" />,
                pagingDotsStyle: {
                  fill: "#fff",
                },
              }}
              renderTopRightControls={({ currentSlide }) => (
                <div className="news-tag">&nbsp; Youth Camp 2020</div>
              )}
              renderBottomRightControls={({ currentSlide }) => (
                <div className="news-share">
                  <FontAwesomeIcon icon="share-alt" />
                </div>
              )}
              // renderBottomLeftControls={({ currentSlide }) => (
              //   <div className="news-title">
              //     <div className="title">
              //       {currentSlide} What are you doing this Sunday?
              //     </div>
              //     <div className="subtitle">Join us for church!</div>
              //     <button className="church-btn ">Find a Location</button>
              //   </div>
              // )}
              // renderBottomLeftControls={({ currentSlide }) => {
              //   return carouselAssets
              //     .filter((item, index) => currentSlide == index)
              //     .map((item) => (
              //       <div className="news-title" key={item}>
              //         {carouselAssets.length > 0 ? <b>Zeke</b> : <b>Test</b>}
              //         <div className="title">{carouselAssets.length}</div>
              //         <div className="subtitle"> {item.subtitle}</div>
              //         <button className="church-btn ">{item.buttonTxt}</button>
              //       </div>
              //     ));
              // }}

              renderBottomLeftControls={({ currentSlide }) => {
                return carouselAssets.length > 0 ? (
                  <div
                    className="news-title"
                    key={currentSlide + carouselAssets[currentSlide].title}
                  >
                    <div className="title">
                      {carouselAssets[currentSlide].title}
                    </div>
                    <div className="subtitle">
                      {carouselAssets[currentSlide].subTitle}
                    </div>
                    <button className="church-btn ">
                      {carouselAssets[currentSlide].buttonText}
                    </button>
                  </div>
                ) : null;
              }}
            >
              {carouselAssets.map((item, index) => {
                return (
                  <img
                    src={item.img}
                    key={`${index + item.src}`}
                    style={{
                      height:
                        settings.heightMode === "current"
                          ? 100 * (index + 1)
                          : 400,
                    }}
                  />
                );
              })}
              {/* {imgs.map((c, index) => {
                return (
                  <img
                    src={c}
                    key={c}
                    style={{
                      height:
                        settings.heightMode === "current"
                          ? 100 * (index + 1)
                          : 400,
                    }}
                  />
                );
              })} */}
              {/* {colors.slice(0, settings.length).map((color, index) => (
            <img
              src={`http://placehold.it/1000x400/${color}/ffffff/&text=slide${
                index + 1
              }`}
              alt={`Slide ${index + 1}`}
              key={color}
              onClick={handleImageClick}
              style={{
                height:
                  settings.heightMode === "current" ? 100 * (index + 1) : 400,
              }}
            />
          ))} */}
            </Carousel>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default News;
