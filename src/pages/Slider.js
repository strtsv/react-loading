import React from "react";
import ReactSwipe from "react-swipe";

import slider1 from "../images/slider1.png";
import slider2 from "../images/slider2.png";

const Slider = () => {
  let reactSwipeEl;

  return (
    <div>
      <ReactSwipe
        swipeOptions={{ auto: 3000 }}
        ref={el => (reactSwipeEl = el)}
      >
        <div>
          <img src={slider1} alt="" />
        </div>
        <div>
          <img src={slider2} alt="" />
        </div>
      </ReactSwipe>
    </div>
  );
};

export default Slider;
