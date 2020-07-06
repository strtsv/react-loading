import React from "react";
import BackgroundWrapper from "../components/BackgroundWrapper";
import BigWrapper from "../components/BigWrapper";
import Content from "../components/Content";
import Header from "../components/Header";
import Footer from "../components/Footer";

const home = () => {
    return (
      <>
        <BackgroundWrapper>
          <BigWrapper>
            <Header />
            <Content />
          </BigWrapper>
        </BackgroundWrapper>
        <Footer></Footer>
      </>
    );
};

export default home;
