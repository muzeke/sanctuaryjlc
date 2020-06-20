import React from "react";
import "./home-component.scss";
import Bird from "./Bird.jsx";
import News from "../News/news-component.jsx";
import NewsCardPlain from "../NewsCardPlain/newscardplain-component.jsx";
import ExtraNavagation from "./ExtraNavigation.jsx";

const Home = () => {
  return (
    <main className="main-wrapper container">
      <div className="card welcome-card slide-in-blurred-up">
        <Bird />
        <div className="welcome">Welcome To</div>
        <div className="title">Sanctuary</div>
        <div className="subtitle">Where new life Begins</div>

        <button className="church-btn join-us">Join Us</button>
      </div>

      <div className="two-columns flex-wrap">
        <div className="first-col">
          <News />
          <NewsCardPlain
            title="A Blessed Day to you my friend!"
            subTitle="Great day ahead!"
            imgUrl="https://picsum.photos/800"
            buttonText="Watch Videos"
          />
        </div>
        <div className="second-col">
          <ExtraNavagation />
        </div>
      </div>
    </main>
  );
};

export default Home;
