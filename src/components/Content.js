import React from "react";
import { WOW } from "wowjs";

import Banner from "./Banner";
import Wrapper from "./Wrapper";
import Slider from "../pages/Slider";

import slider1 from "../images/slider1.png";
import slider2 from "../images/slider2.png";

class Content extends React.Component {
  componentDidMount() {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      live: true
    });
    wow.init();
  }
  render() {
    var swipeOptions = { auto: 2000 };
    return (
      <section id="content">
        <div className="container">
          <div className="row">
            <div className="grid_12">
              <div className="slider-wrapper">
                <div>
                  <Slider {...swipeOptions}>
                    <img src={slider1} alt="" />
                    <img src={slider2} alt="" />
                  </Slider>
                </div>
                <div className="clearfix" />
              </div>
              <Banner></Banner>
              <Wrapper></Wrapper>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
