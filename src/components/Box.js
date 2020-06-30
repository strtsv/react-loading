import React from "react";
import Best from "./Best";

const Box = ({ image }) => {
  return (
    <div
      className="box5 wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay="0.1s"
    >
      <div className="row">
        <div className="grid_1">
          <img src={image} alt="" />
        </div>
        <Best></Best>
      </div>
    </div>
  );
};

export default Box;
