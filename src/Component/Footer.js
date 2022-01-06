import React from "react";
var d = new Date();
var currYear = d.getFullYear();

function Footer() {
  return (
    <React.StrictMode>
      {/* <!-- Footer Start --> */}
      <footer id="dc-footer" className="dc-footer dc-haslayout">
        <div className="dc-footertopbar">
          <div className="container">
            <div className="row justify-content-center align-self-center">
              <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-8 push-lg-2">
                <div className="dc-footer-call-email">
                  <div className="dc-callinfoholder">
                    <figure className="dc-callinfoimg">
                      <img
                        src="assets/images/footer/img-01.png"
                        alt="img description"
                      />
                    </figure>
                    <div className="dc-callinfocontent">
                      <h3>
                        <span>Emergency Call</span>
                        <a href="javascript:void(0);">+1 234 5678 - 9</a>
                      </h3>
                    </div>
                  </div>
                  <div className="dc-callinfoholder dc-mailinfoholder">
                    <figure className="dc-callinfoimg">
                      <img
                        src="assets/images/footer/img-02.png"
                        alt="img description"
                      />
                    </figure>
                    <div className="dc-callinfocontent">
                      <h3>
                        <span>24/7 Email Support</span>
                        <a
                          href="mailto:hello@doctlist.com"
                          style={{ textTransform: "lowercase" }}
                        >
                          hello@doctlist.com
                        </a>
                      </h3>
                    </div>
                  </div>
                  <span className="dc-or-text">- OR -</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dc-fthreecolumns">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 float-left">
                <div className="dc-fcol dc-widgetcontactus">
                  <strong className="dc-logofooter">
                    <a href="index.html">
                      <img
                        src="assets/images/flogo.png"
                        alt="company logo here"
                      />
                    </a>
                  </strong>
                  <div className="dc-footercontent">
                    <div className="dc-description">
                      <p>
                        Consectetur adipisicing elit, sed dot eiusd tempor
                        incididunt ailabor dolore magna dolore magnam aliquam
                        quaerat voluptatem
                        <a
                          href="javascript:void(0)"
                          className="dc-detailsinfo dc-detailsinfofooter"
                        >
                          ...
                        </a>
                      </p>
                    </div>
                    <ul className="dc-footercontactus">
                      <li>
                        <address>
                          <i className="lnr lnr-location"></i> 123 New Street,
                          Melbourne location Australia 54214
                        </address>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lnr lnr-envelope"></i>{" "}
                          info@domainurl.com
                        </a>
                      </li>
                      <li>
                        <span>
                          <i className="lnr lnr-phone-handset"></i> (0800) 1234
                          567891
                        </span>
                      </li>
                    </ul>
                    <div className="dc-fsocialicon">
                      <ul className="dc-simplesocialicons">
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
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 float-left">
                <div className="dc-fcol dc-flatestad">
                  <div className="dc-ftitle">
                    <h3>Twitter Live Feed</h3>
                  </div>
                  <div className="dc-footercontent">
                    <ul className="dc-livefeeddetails">
                      <li>
                        <figure className="dc-latestadimg">
                          <img
                            src="assets/images/footer/img-03.png"
                            alt="img description"
                          />
                        </figure>
                        <div className="dc-latestadcontent">
                          <p>
                            Designer Square <em>@Tingdong</em>
                            <span>Consectetur</span>
                            <a href="javascript:void(0);">#adipisicing</a>
                            <span>elitene eiusmod incididunt.</span>
                          </p>
                          <time datetime="2018-12-12">
                            11:39 AM - June 27, 2018
                          </time>
                        </div>
                      </li>
                      <li>
                        <figure className="dc-latestadimg">
                          <img
                            src="assets/images/footer/img-04.png"
                            alt="img description"
                          />
                        </figure>
                        <div className="dc-latestadcontent">
                          <p>
                            Admonster <em>@admonster772</em>
                            <span>Eliten sedat mod</span>
                            <a href="javascript:void(0);">@tempoer</a>
                            <span>incididunt</span>
                            <a href="javascript:void(0);">#utaorne etia</a>
                          </p>
                          <time datetime="2018-12-12">
                            11:39 AM - June 27, 2018
                          </time>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 float-left">
                <div className="dc-fcol dc-newsletterholder">
                  <div className="dc-ftitle">
                    <h3>Twitter Live Feed</h3>
                  </div>
                  <div className="dc-footercontent dc-newsletterholder">
                    <div className="dc-description">
                      <p>
                        A dipisicing elit sed dotem eiusmou tempor incididunt ut
                        labore.
                      </p>
                    </div>
                    <form className="dc-formtheme dc-formnewsletter">
                      <fieldset>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            value=""
                            className="form-control"
                            placeholder="Enter Your Email"
                            required=""
                          />
                          <button type="submit">
                            <i className="lnr lnr-arrow-right"></i>
                          </button>
                        </div>
                      </fieldset>
                    </form>
                    <div className="dc-footerapps">
                      <div className="dc-ftitle">
                        <h3>Download Mobile App</h3>
                      </div>
                      <ul className="dc-btnapps">
                        <li>
                          <a href="javascript:void(0)">
                            <img
                              src="assets/images/footer/img-05.png"
                              alt="img description"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <img
                              src="assets/images/footer/img-06.png"
                              alt="img description"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dc-footerbottom">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12">
                <p className="dc-copyright">
                  &copy; {currYear} by <span>DocList.</span> All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --> */}
    </React.StrictMode>
  );
}

export default Footer;
