import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="grid_12">
                <div
                  className="privacy-block wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.1s"
                >
                  © <span id="copyright-year" />{" "}
                  <a href="index-6.html">Privacy Policy</a>
                  {}
                </div>
                <div className="links">
                  <ul>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.1s"
                    >
                      <a href="#">Support</a>
                    </li>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      <a href="#">FAQs</a>
                    </li>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.3s"
                    >
                      <a href="#">Sitemap</a>
                    </li>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.4s"
                    >
                      <a href="#">Help</a>
                    </li>
                  </ul>
                </div>
                <div className="cleafix" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
