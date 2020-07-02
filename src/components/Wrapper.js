import React from "react";

import Grid from "./Grid";
import News from "./News";
import Boxes from "./Boxes";

import i4 from "../images/page1_img4.png";
import i5 from "../images/page1_img5.png";
import i6 from "../images/page1_img6.png";
import i7 from "../images/page1_img7.png";

class Wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper1">
        <div className="row">
          <div className="grid_4">
            <div
              className="heading1 wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <h2>Why choose us?</h2>
            </div>
            <div className="box2">
              <ul className="list1">
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.1s"
                >
                  <a href="#">Lorem ipsum dolorconsec teer.</a>
                  <p>
                    Lorem ipsum dolor sit amet, consec tetuer adicing. Praesent
                    vestibu lum molestie lacuiirhs non.
                  </p>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <a href="#">adipiscing. Prsent vestibulum m.</a>
                  <p>
                    Ipsum dolor sit amet, consec tadipiscing. Praes ent vestibu
                    lum molestie lacuenean non.
                  </p>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  <a href="#">Prsent vestibulum molestie lac.</a>
                  <p>
                    Sit amet, consec tetuer acing. Praesent vestibu lum molestie
                    lacuiirhs. Aenean non. ummy hendreriauris.
                  </p>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  <a href="#">vestibulum molestie lacuiirhs. Aeneon my .</a>
                  <p>
                    Praesent vestibu lum molestie lacuiirhsean non. ummy
                    hendreriauris. Phasellllus. porta. Fusce suscipit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid_8">
            <div
              className="heading1 wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <h2>Great Service</h2>
            </div>
            <div className="box3-wrapper1">
              <p
                className="wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                Lorem ipsum dolor sit amet, consec teer adipiscing. Prsent
                vestibulum molestie la my hendrerit. mauris hasellllus. Porta.
                Fusce suscipit varius mium sociis totdjque penat magnis.
              </p>
              <div className="row">
                <Grid image={i4}></Grid>
                <Grid image={i5}></Grid>
                <Grid image={i6}></Grid>
                <Grid image={i7}></Grid>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr1" />
        <div className="row">
          <div className="grid_12">
            <div className="row">
              <News></News>
              <div className="grid_4 preffix_1">
                <div
                  className="heading1 wow fadeInDown"
                  data-wow-duration="1s"
                  data-wow-delay="0.1s"
                >
                  <h2>Welcome</h2>
                </div>
                <div className="box4-wrapper1 maxheight1">
                  <div className="box4">
                    <h6
                      className="wow fadeInDown"
                      data-wow-duration="1s"
                      data-wow-delay="0.1s"
                    >
                      We are more than a cafe! Ensuring 100% guest satisfaction
                      on every visit.
                    </h6>
                    <h5
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.1s"
                    >
                      <a href="#">
                        Lorem ipsum dolor sit amet, consec teer adipiscing.
                        Prsent vestibulum molestie lacuiirhs. Aeneon my .
                        Phasellllus. porta. Fusce suscipit varius mium sociis.
                      </a>
                    </h5>
                    <p
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      Lorem ipsum dolor sit amet, consec tetuer adipiscing.
                      Praesent vestibu lum molestie lacuiirhs. Aenean non ummy
                      hendreriauris. Phasellllus. porta. Fusce suscipit varius
                      mium sociis totdnatibus et magis dis parturient montes,
                      nascetur ridiculus mus. Nulla dui.
                    </p>
                    <a
                      className="btn-default wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.3s"
                      href="#"
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid_3 preffix_1">
                <div
                  className="heading1 wow fadeInDown"
                  data-wow-duration="1s"
                  data-wow-delay="0.1s"
                >
                  <h2>today’s best</h2>
                </div>
                <Boxes></Boxes>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wrapper;
