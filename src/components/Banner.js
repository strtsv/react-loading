import React from "react";
import { Link } from "react-router-dom";

import i1 from "../images/page1_img1.png";
import i2 from "../images/page1_img2.png";
import i3 from "../images/page1_img3.png";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner1">
        <div className="row">
          <div className="grid_4">
            <div
              className="box1 first wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <div className="label">
                <img src={i1} alt="" />
              </div>
              <h2>Good rest</h2>
              <span className="heading">
                <Link to="/">Lorem ipsum dolor sit amet, csec</Link>
              </span>
              <p>
                Lorem ipsum dolor sit amet, conc tetu er adipi scing. Praesent
                vestibuum mol
              </p>
            </div>
          </div>
          <div className="grid_4">
            <div
              className="box1 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="label">
                <img src={i2} alt="" />
              </div>
              <h2>Best cooks</h2>
              <span className="heading">
                <Link to="/">ipsum dolor sit amet, csec tetuer</Link>
              </span>
              <p>
                Praesent vestibuum molestie lacuiirhs. Aenean non ummy
                hendreriauris. Phasellllus porta.
              </p>
            </div>
          </div>
          <div className="grid_4">
            <div
              className="box1 last wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="label">
                <img src={i3} alt="" />
              </div>
              <h2>Best prices</h2>
              <span className="heading">
                <Link to="/">csec tetuer adipi scing Praesent vib</Link>
              </span>
              <p>
                Aenean non ummy hendreriauris. Phasellllus porta. Fusce suscipit
                varius mium sociis totdnat.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
