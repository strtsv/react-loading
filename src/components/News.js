import React from "react";
import New from "./New";

class News extends React.Component {
  render() {
    return (
      <div className="grid_3">
        <div
          className="heading1 wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
        >
          <h2>Latest news</h2>
        </div>
        <div className="post1-wrapper1 maxheight1">
          <New></New>
          <New></New>
          <a className="btn-default" href="#">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default News;
