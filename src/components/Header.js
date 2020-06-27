import React from "react";
import { Link } from "react-router-dom";

import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import google from "../images/google-plus.png";

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="grid_12">
              <div className="socials">
                <ul className="socials1">
                  <li
                    className="wow fadeInDown"
                    data-wow-duration="1s"
                    data-wow-delay="0.1s"
                  >
                    <Link to="/">
                      <img src={twitter} alt="" />
                    </Link>
                  </li>
                  <li
                    className="wow fadeInDown"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    <Link to="/">
                      <img src={facebook} alt="" />
                    </Link>
                  </li>
                  <li
                    className="wow fadeInDown"
                    data-wow-duration="1s"
                    data-wow-delay="0.3s"
                  >
                    <Link to="/">
                      <img src={google} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="grid_12">
              <div className="info">
                <h1>
                  <a href="index.html">
                    <span
                      className="first wow fadeInDown"
                      data-wow-duration="1s"
                      data-wow-delay="0.1s"
                    >
                      Bikers'
                    </span>
                    <span
                      className="second wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0.3s"
                    >
                      cafe
                    </span>
                  </a>
                </h1>
                <form
                  id="search"
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                  action="search.php"
                  method="GET"
                  acceptCharset="utf-8"
                >
                  <input type="text" name="s" />
                  <a onclick="document.getElementById('search').submit()">
                    <img src="images/search.png" alt="" />
                  </a>
                </form>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
        <div id="stuck_container">
          <div className="container">
            <div className="row">
              <div className="grid_12">
                <div className="menu-wrapper">
                  <nav>
                    <ul className="sf-menu">
                      <li className="current">
                        <a href="index.html">Main page</a>
                        <ul>
                          <li>
                            <Link to="/">About</Link>
                          </li>
                          <li>
                            <Link to="/">News</Link>
                            <ul>
                              <li>
                                <Link to="/">Pellentesque</Link>
                              </li>
                              <li>
                                <Link to="/">Aliquam</Link>
                              </li>
                              <li>
                                <Link to="/">Mauris</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/">Services</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="index-1.html">About our cafe</a>
                      </li>
                      <li>
                        <a href="index-2.html">Our gallery</a>
                      </li>
                      <li>
                        <a href="index-3.html">Our menu</a>
                      </li>
                      <li>
                        <a href="index-4.html">latest news & events</a>
                      </li>
                      <li>
                        <a href="index-5.html">Our Contacts</a>
                      </li>
                    </ul>
                    <div className="clearfix" />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
