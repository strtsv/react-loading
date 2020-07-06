import React from "react";
import Box from "./Box";
import { Link } from "react-router-dom";
import i8 from "../images/page1_img8.png";
import i9 from "../images/page1_img9.png";
import i10 from "../images/page1_img10.png";

class Boxes extends React.Component {
  render() {
    return (
      <div className="box5-wrapper1 maxheight1">
        <h5>
          Lorem ipsum dolor sit amet, consec teer adipiscing. Prsent vestibulum
          mo.
        </h5>
        <Box image={i8} />
        <Box image={i9} />
        <Box image={i10} />
        <Link
          className="btn-default wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.4s"
          href="#"
        >
          more
        </Link>
      </div>
    );
  }
}

export default Boxes;
