import React from "react";
import { Link } from "react-router-dom";

const Grid = ({ image }) => {
  return (
    <div className="grid_2">
      <div
        className="box3 maxheight wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="0.1s"
      >
        <img src={image} alt="" />
        <h3>
          <Link to="/">lorem ipsum</Link>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consec tetuer adipi scing. Praesent
          vestibu
        </p>
      </div>
    </div>
  );
};

export default Grid;
