import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

class BigWrapper extends React.Component {
  render() {
    return (
      <div className="big-wrapper">
        <Header></Header>
        {}
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default BigWrapper;
