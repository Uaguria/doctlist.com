import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.StrictMode>
      {/* <!-- Header Start --> */}
      <header id="dc-header" className="dc-header dc-haslayout">
        <div className="dc-topbar">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="dc-helpnum">
                  <span>Emergency Help!</span>
                  <a href="tel:123456789">+1 234 5678 - 9</a>
                </div>
                <div className="dc-rightarea">
                  <ul className="dc-simplesocialicons dc-socialiconsborder">
                    <li className="dc-facebook">
                      <a href="javascript:void(0);">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="dc-twitter">
                      <a href="javascript:void(0);">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="dc-linkedin">
                      <a href="javascript:void(0);">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="dc-googleplus">
                      <a href="javascript:void(0);">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li className="dc-rss">
                      <a href="javascript:void(0);">
                        <i className="fas fa-rss"></i>
                      </a>
                    </li>
                    <li className="dc-youtube">
                      <a href="javascript:void(0);">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dc-navigationarea">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <strong className="dc-logo">
                  <Link to="/">
                    <img src="assets/images/logo.png" alt="company logo here" />
                  </Link>
                </strong>
                <div className="dc-rightarea">
                  <nav id="dc-nav" className="dc-nav navbar-expand-lg">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i className="lnr lnr-menu"></i>
                    </button>
                    <div
                      className="collapse navbar-collapse dc-navigation"
                      id="navbarNav"
                    >
                      <ul className="navbar-nav">
                        <li>
                          <Link to="/find">Find Doctors</Link>
                        </li>
                        <li className="menu-item-has-children page_item_has_children">
                          <a href="javascript:void(0);">Specialties</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="javascript:void(0);">Heart Care</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Heart Surgeon</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Urology</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Lungs and Chest</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                Mental care and Neuro
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Neuro Surgery</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Nerves and Brain</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                Orthopedic Surgeon
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Nerves and Brain</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Skin, Hair, Sex</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">General Surgeon</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                Cancer Specialist
                              </a>
                            </li>
                          </ul>
                        </li>
                        {/* <li>
                          <Link to="/articles">Articles</Link>
                        </li> */}
                        <li>
                          <Link to="/about">About us</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <div className="dc-loginarea">
                    <div className="dc-loginoption">
                      <a
                        href="javascript:void(0);"
                        id="dc-loginbtn"
                        className="dc-loginbtn"
                      >
                        Login
                      </a>
                      <div className="dc-loginformhold">
                        <div className="dc-loginheader">
                          <span>Login</span>
                          <a href="javascript:void(0);">
                            <i className="fa fa-times"></i>
                          </a>
                        </div>
                        <form className="dc-formtheme dc-loginform do-login-form">
                          <fieldset>
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Username"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                              />
                            </div>
                            <div className="dc-logininfo">
                              <span className="dc-checkbox">
                                <input
                                  id="dc-login"
                                  type="checkbox"
                                  name="rememberme"
                                />
                                <label for="dc-login">Keep me logged in</label>
                              </span>
                              <a
                                href="javascript:void(0);"
                                className="dc-btn do-login-button"
                              >
                                Login
                              </a>
                            </div>
                          </fieldset>
                          <div className="dc-loginfooterinfo">
                            <a
                              href="javascript:void(0);"
                              className="dc-forgot-password"
                            >
                              Forgot password?
                            </a>
                            <a href="javascript:void(0);">Create account</a>
                          </div>
                        </form>
                        <form className="dc-formtheme dc-loginform do-forgot-password-form dc-hide-form">
                          <fieldset>
                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
                                className="form-control get_password"
                                placeholder="Email"
                              />
                            </div>

                            <div className="dc-logininfo">
                              <a
                                href="javascript:void(0);"
                                className="dc-btn do-get-password"
                              >
                                Get Pasword
                              </a>
                            </div>
                          </fieldset>
                          <div className="dc-loginfooterinfo">
                            <a
                              href="javascript:void(0);"
                              className="dc-show-login"
                            >
                              Login
                            </a>
                            <a href="javascript:void(0);">Create account</a>
                          </div>
                        </form>
                      </div>
                    </div>
                    <Link to="/find" className="dc-btn">
                      Find Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header End --> */}
    </React.StrictMode>
  );
}

export default Header;
