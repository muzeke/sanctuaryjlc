import React from "react";
import "./ExtraNavigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import yticon from "../../images/yt-icon.svg";
import igicon from "../../images/Instagram-Gradient.png.webp";
import fbicon from "../../images/fb-icon.svg";
import twittericon from "../../images/twitter-icon.svg";

const ExtraNavigation = (props) => {
  return (
    <div className="extra-nav-wrapper">
      <div className="extra-nav-card slide-in-blurred-up-2">
        <div className="content">
          <div className="title">Get Involved</div>
          <div className="subtitle">See what God can do through you.</div>
          <div className="content-items">
            <div className="content-item">
              <div className="content-logo">
                <FontAwesomeIcon icon="users" />
              </div>
              <div className="content-title"> Cell Groups</div>
              <div className="go-icon">
                <FontAwesomeIcon icon="angle-double-right" />
              </div>
            </div>

            <div className="content-item">
              <div className="content-logo">
                <FontAwesomeIcon icon="praying-hands" />
              </div>
              <div className="content-title"> Outreach</div>
              <div className="go-icon">
                <FontAwesomeIcon icon="angle-double-right" />
              </div>
            </div>

            <div className="content-item">
              <div className="content-logo">
                <FontAwesomeIcon icon="podcast" />
              </div>
              <div className="content-title">Join Ministry</div>
              <div className="go-icon">
                <FontAwesomeIcon icon="angle-double-right" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="extra-nav-card slide-in-blurred-up">
        <div className="content">
          <div className="title">Follow Sanctuary Church</div>
          <div className="content-items">
            <div className="content-item">
              <div className="content-logo">
                <img src={yticon} />
              </div>
              <div className="content-title"> Youtube</div>
              <div className="go-icon">
                <FontAwesomeIcon icon="angle-double-right" />
              </div>
            </div>

            <div className="content-item">
              <div className="content-logo">
                <img src={fbicon} />
              </div>
              <div className="content-title"> Facebook</div>
              <div className="go-icon">
                <FontAwesomeIcon icon="angle-double-right" />
              </div>
            </div>

            <div className="content-item">
              <div className="content-logo">
                <img src={igicon} />
              </div>
              <div className="content-title"> Instagram</div>
              <div className="go-icon">
                <FontAwesomeIcon icon="angle-double-right" />
              </div>
            </div>

            <div className="content-item">
              <div className="content-logo">
                <img src={twittericon} />
              </div>
              <div className="content-title"> Twitter</div>
              <div className="go-icon">
                <FontAwesomeIcon icon="angle-double-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraNavigation;
