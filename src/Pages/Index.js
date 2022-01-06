import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.StrictMode>
      {/* <!-- Home Slider Start --> */}
      <div className="dc-homeslidervtwo dc-haslayout">
        <div id="dc-bannervtwo" className="dc-bannervtwo owl-carousel">
          <div className="item">
            <figure className="dc-silderimg">
              <img
                src="assets/images/slider/img-01.jpg"
                alt="img description"
              />
            </figure>
          </div>
          <div className="item">
            <figure className="dc-silderimg">
              <img
                src="assets/images/slider/img-02.jpg"
                alt="img description"
              />
            </figure>
          </div>
          <div className="item">
            <figure className="dc-silderimg">
              <img
                src="assets/images/slider/img-03.jpg"
                alt="img description"
              />
            </figure>
          </div>
        </div>
        <div className="dc-bannervtwocontent">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="dc-medicalfacility">
                  <div className="dc-title">
                    <h2>
                      <em>Emergency?</em>
                      <span> Find Nearest </span>Medical Facility
                    </h2>
                  </div>
                  <form className="dc-formtheme dc-medicalform">
                    <fieldset>
                      <div className="form-group">
                        <input
                          type="text"
                          name="search"
                          value=""
                          className="form-control"
                          placeholder="Search doctors, clinics, hospitals, etc."
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <span className="dc-select">
                          <select
                            className="chosen-select locations"
                            data-placeholder="Country"
                            name="locations"
                          >
                            <option value="Country">United State</option>
                            <option value="Country1">Canada</option>
                            <option value="Country2">England</option>
                          </select>
                        </span>
                      </div>
                      <div className="form-group dc-btnarea">
                        <Link to="/find" className="dc-btn">
                          Search Now
                        </Link>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
              <div className="d-none col-md-6 d-lg-block">
                <figure className="dc-slidercontentimg">
                  <img
                    src="assets/images/slider/img-05.png"
                    alt="img desciption"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Home Slider End --> */}
      {/* <!-- Main Start --> */}
      <main id="dc-main" className="dc-main dc-haslayout">
        {/* <!-- Search Section Start --> */}
        <section className="dc-searchholder dc-haslayout">
          <div className="dc-haslayout">
            <div className="container-fluid">
              <div className="row">
                <div
                  id="dc-doctorslider"
                  className="dc-doctorslider owl-carousel"
                >
                  <div className="item dc-doctordetails-holder dc-titlecolor1">
                    <span className="dc-slidercounter">01.</span>
                    <h3>
                      <span>Live Chat With</span> Doctors
                    </h3>
                    <a href="javascript:void(0);" className="dc-btn">
                      Show All Nearest Hospitals
                    </a>
                  </div>
                  <div className="item dc-doctordetails-holder dc-titlecolor2">
                    <span className="dc-slidercounter">02.</span>
                    <h3>
                      <span>Fast Appointment With</span> Nearest Hospital
                    </h3>
                    <a href="javascript:void(0);" className="dc-btn">
                      Show All Nearest Hospitals
                    </a>
                  </div>
                  <div className="item dc-doctordetails-holder dc-titlecolor3">
                    <span className="dc-slidercounter">03.</span>
                    <h3>
                      <span>Articles From Top</span> Hospitals &amp; Doctors
                    </h3>
                    <a href="javascript:void(0);" className="dc-btn">
                      Show All Nearest Hospitals
                    </a>
                  </div>
                  <div className="item dc-doctordetails-holder dc-titlecolor4">
                    <span className="dc-slidercounter">04.</span>
                    <h3>
                      <span>Our 24/7 Active</span> Help Support
                    </h3>
                    <a href="javascript:void(0);" className="dc-btn">
                      Show All Nearest Hospitals
                    </a>
                  </div>
                  <div className="item dc-doctordetails-holder dc-titlecolor5">
                    <span className="dc-slidercounter">05.</span>
                    <h3>
                      <span>Help on The Go</span> Download App
                    </h3>
                    <a href="javascript:void(0);" className="dc-btn">
                      Show All Nearest Hospitals
                    </a>
                  </div>
                  <div className="item dc-doctordetails-holder dc-titlecolor6">
                    <span className="dc-slidercounter">06.</span>
                    <h3>
                      <span>Live Chat With</span> Doctors
                    </h3>
                    <a href="javascript:void(0);" className="dc-btn">
                      Show All Nearest Hospitals
                    </a>
                  </div>
                  <div className="item dc-doctordetails-holder dc-titlecolor7">
                    <span className="dc-slidercounter">07.</span>
                    <h3>
                      <span>Fast Appointment With</span> Nearest Hospital
                    </h3>
                    <a href="javascript:void(0);" className="dc-btn">
                      Show All Nearest Hospitals
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Search Section End --> */}
        {/* <!-- Bring Care Start --> */}
        <section class="dc-haslayout dc-main-section dc-sectionbg">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-6 align-self-center">
                <div class="dc-bringcarecontent">
                  <div class="dc-sectionhead dc-sectionheadvtwo">
                    <div class="dc-sectiontitle">
                      <h2>
                        Bring Care to Your<span>Home With One Click</span>
                      </h2>
                    </div>
                    <div class="dc-description">
                      <p>
                        Lorem ipsum dolor amet consectetur adipisicing eliteiuim
                        sete eiusmod tempor incididunt ut labore etnalom dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div class="dc-btnarea">
                    <a href="javascript:void(0);" class="dc-btn">
                      About Us
                    </a>
                    <a href="javascript:void(0);" class="dc-btn dc-btnactive">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                <div class="dc-bringimg-holder">
                  <figure class="dc-doccareimg">
                    <img
                      src="assets/images/doc-imgs/img-01.png"
                      alt="img description"
                    />
                    <figcaption>
                      <div class="dc-doccarecontent">
                        <h3>
                          <em>Greetings &amp; Welcome </em>Dr. Tyrone Grindle
                        </h3>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Bring Care End --> */}
        {/* <!-- Works Section Start --> */}
        <section className="dc-haslayout">
          <div className="dc-haslayout dc-bgcolor dc-main-section dc-workholder">
            <div className="container">
              <div className="row justify-content-center align-self-center">
                <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-8 push-lg-2">
                  <div className="dc-sectionhead dc-text-center">
                    <div className="dc-sectiontitle">
                      <h2>
                        <span>We Made It Simple</span>How It <em>Works?</em>
                      </h2>
                    </div>
                    <div className="dc-description">
                      <p>
                        Lorem ipsum dolor amet consectetur adipisicing eliteiuim
                        sete eiusmod tempor incididunt ut labore etnalom dolore
                        magna aliqua udiminimate veniam quis norud.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dc-haslayout dc-main-section dc-workdetails-holder">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="dc-workdetails">
                    <div className="dc-workdetail">
                      <figure>
                        <img
                          src="assets/images/work-icon/img-01.png"
                          alt="img description"
                        />
                      </figure>
                    </div>
                    <div className="dc-title">
                      <span>Search Best Online</span>
                      <h3>
                        <a href="javascript:void(0);">Professional</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="dc-workdetails dc-workdetails-border">
                    <div className="dc-workdetail">
                      <figure>
                        <img
                          src="assets/images/work-icon/img-02.png"
                          alt="img description"
                        />
                      </figure>
                    </div>
                    <div className="dc-title">
                      <span>SGet Instant</span>
                      <h3>
                        <a href="javascript:void(0);">Appointment</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="dc-workdetails dc-workdetails-bordertwo">
                    <div className="dc-workdetail">
                      <figure>
                        <img
                          src="assets/images/work-icon/img-03.png"
                          alt="img description"
                        />
                      </figure>
                    </div>
                    <div className="dc-title">
                      <span>Leave Your</span>
                      <h3>
                        <a href="javascript:void(0);">Feedback</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Works Section End --> */}
        {/* <!-- Our Rated Start --> */}
        <section className="dc-haslayout dc-main-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
                <div className="row">
                  <div className="dc-ratedecontent dc-bgcolor">
                    <figure className="dc-neurosurgeons-img">
                      <img
                        src="assets/images/doc-imgs/img-02.png"
                        alt="img description"
                      />
                    </figure>
                    <div className="dc-sectionhead dc-sectionheadvtwo dc-text-center">
                      <div className="dc-sectiontitle">
                        <h2>
                          Our Top Rated<span>Neurosurgeons</span>
                        </h2>
                      </div>
                      <div className="dc-description">
                        <p>
                          Lorem ipsum dolor amet consectetur adipisicing eliuim
                          sete eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                    <div className="dc-btnarea">
                      <a href="javascript:void(0);" className="dc-btn">
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
                <div className="row">
                  <div
                    id="dc-docpostslider"
                    className="dc-docpostslider owl-carousel"
                  >
                    <div className="item">
                      <div className="dc-docpostholder">
                        <figure className="dc-docpostimg">
                          <img
                            src="assets/images/doctors/img-01.jpg"
                            alt="img description"
                          />
                          <figcaption>
                            <span className="dc-featuredtag">
                              <i className="fa fa-bolt"></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div className="dc-docpostcontent">
                          <a href="javascript:void(0);" className="dc-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <div className="dc-title">
                            <a
                              href="javascript:void(0)"
                              className="dc-docstatus"
                            >
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href="javascript:void(0);">
                                Dr. Tinisha Amenta
                              </a>{" "}
                              <i className="fa fa-award dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>{" "}
                              <i className="fa fa-check-circle dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul className="dc-docinfo">
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span className="dc-stars">
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div className="dc-doclocation">
                            <span>
                              <i className="ti-direction-alt"></i> Manchester,
                              UK
                            </span>
                            <span>
                              <i className="ti-calendar"></i>{" "}
                              <em className="dc-dayon">Mo</em>, Tu, We, Th, Fr,
                              Sa
                            </span>
                            <a href="javascript:void(0);" className="dc-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="dc-docpostholder">
                        <figure className="dc-docpostimg">
                          <img
                            src="assets/images/doctors/img-02.jpg"
                            alt="img description"
                          />
                          <figcaption>
                            <span className="dc-featuredtag">
                              <i className="fa fa-bolt"></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div className="dc-docpostcontent">
                          <a href="javascript:void(0);" className="dc-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <div className="dc-title">
                            <a
                              href="javascript:void(0)"
                              className="dc-docstatus"
                            >
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href="javascript:void(0);">
                                Dr. Carmelo G. lock{" "}
                              </a>{" "}
                              <i className="fa fa-award dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>{" "}
                              <i className="fa fa-check-circle dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul className="dc-docinfo">
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span className="dc-stars">
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div className="dc-doclocation">
                            <span>
                              <i className="ti-direction-alt"></i> Manchester,
                              UK
                            </span>
                            <span>
                              <i className="ti-calendar"></i> Mo, Tu,{" "}
                              <em className="dc-dayon">We</em>, Th, Fr, Sa
                            </span>
                            <a href="javascript:void(0);" className="dc-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="dc-docpostholder">
                        <figure className="dc-docpostimg">
                          <img
                            src="assets/images/doctors/img-04.jpg"
                            alt="img description"
                          />
                          <figcaption>
                            <span className="dc-featuredtag">
                              <i className="fa fa-bolt"></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div className="dc-docpostcontent">
                          <a href="javascript:void(0);" className="dc-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <div className="dc-title">
                            <a
                              href="javascript:void(0)"
                              className="dc-docstatus"
                            >
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href="javascript:void(0);">
                                Dr. Maryland Nicol lock
                              </a>{" "}
                              <i className="fa fa-award dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>{" "}
                              <i className="fa fa-check-circle dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul className="dc-docinfo">
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span className="dc-stars">
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div className="dc-doclocation">
                            <span>
                              <i className="ti-direction-alt"></i> Manchester,
                              UK
                            </span>
                            <span>
                              <i className="ti-calendar"></i> Mo,{" "}
                              <em className="dc-dayon">Tu</em>, We, Th, Fr, Sa
                            </span>
                            <a href="javascript:void(0);" className="dc-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="dc-docpostholder">
                        <figure className="dc-docpostimg">
                          <img
                            src="assets/images/doctors/img-03.jpg"
                            alt="img description"
                          />
                          <figcaption>
                            <span className="dc-featuredtag">
                              <i className="fa fa-bolt"></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div className="dc-docpostcontent">
                          <a href="javascript:void(0);" className="dc-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <div className="dc-title">
                            <a
                              href="javascript:void(0)"
                              className="dc-docstatus"
                            >
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href="javascript:void(0);">
                                Dr. Arron Benning
                              </a>{" "}
                              <i className="fa fa-award dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>{" "}
                              <i className="fa fa-check-circle dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul className="dc-docinfo">
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span className="dc-stars">
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div className="dc-doclocation">
                            <span>
                              <i className="ti-direction-alt"></i> FAAAAI (USA),
                              PGT Allergy (UK)
                            </span>
                            <span>
                              <i className="ti-calendar"></i> Mo, Tu, We, Th,{" "}
                              <em className="dc-dayon">Fr</em>, Sa
                            </span>
                            <a href="javascript:void(0);" className="dc-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="dc-docpostholder">
                        <figure className="dc-docpostimg">
                          <img
                            src="assets/images/doctors/img-05.jpg"
                            alt="img description"
                          />
                          <figcaption>
                            <span className="dc-featuredtag">
                              <i className="fa fa-bolt"></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div className="dc-docpostcontent">
                          <a href="javascript:void(0);" className="dc-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <div className="dc-title">
                            <a
                              href="javascript:void(0)"
                              className="dc-docstatus"
                            >
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href="javascript:void(0);">
                                Dr. Nubia Riccardi
                              </a>{" "}
                              <i className="fa fa-award dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>{" "}
                              <i className="fa fa-check-circle dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul className="dc-docinfo">
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span className="dc-stars">
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div className="dc-doclocation">
                            <span>
                              <i className="ti-direction-alt"></i> Manchester,
                              UK
                            </span>
                            <span>
                              <i className="ti-calendar"></i> Mo, Tu, We, Th,
                              Fr, Sa
                            </span>
                            <a href="javascript:void(0);" className="dc-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="dc-docpostholder">
                        <figure className="dc-docpostimg">
                          <img
                            src="assets/images/doctors/img-01.jpg"
                            alt="img description"
                          />
                          <figcaption>
                            <span className="dc-featuredtag">
                              <i className="fa fa-bolt"></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div className="dc-docpostcontent">
                          <a href="javascript:void(0);" className="dc-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <div className="dc-title">
                            <a
                              href="javascript:void(0)"
                              className="dc-docstatus"
                            >
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href="javascript:void(0);">
                                Dr. Tinisha Amenta
                              </a>{" "}
                              <i className="fa fa-award dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>{" "}
                              <i className="fa fa-check-circle dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul className="dc-docinfo">
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span className="dc-stars">
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div className="dc-doclocation">
                            <span>
                              <i className="ti-direction-alt"></i> Manchester,
                              UK
                            </span>
                            <span>
                              <i className="ti-calendar"></i>{" "}
                              <em className="dc-dayon">Mo</em>, Tu, We, Th, Fr,
                              Sa
                            </span>
                            <a href="javascript:void(0);" className="dc-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="dc-docpostholder">
                        <figure className="dc-docpostimg">
                          <img
                            src="assets/images/doctors/img-03.jpg"
                            alt="img description"
                          />
                          <figcaption>
                            <span className="dc-featuredtag">
                              <i className="fa fa-bolt"></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div className="dc-docpostcontent">
                          <a href="javascript:void(0);" className="dc-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <div className="dc-title">
                            <a
                              href="javascript:void(0)"
                              className="dc-docstatus"
                            >
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href="javascript:void(0);">
                                Dr. Tinisha Amenta
                              </a>{" "}
                              <i className="fa fa-award dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>{" "}
                              <i className="fa fa-check-circle dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul className="dc-docinfo">
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span className="dc-stars">
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div className="dc-doclocation">
                            <span>
                              <i className="ti-direction-alt"></i> Manchester,
                              UK
                            </span>
                            <span>
                              <i className="ti-calendar"></i> Mo, Tu, We, Th,
                              Fr, <em className="dc-dayon">Sa</em>
                            </span>
                            <a href="javascript:void(0);" className="dc-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="dc-docpostholder">
                        <figure className="dc-docpostimg">
                          <img
                            src="assets/images/doctors/img-02.jpg"
                            alt="img description"
                          />
                          <figcaption>
                            <span className="dc-featuredtag">
                              <i className="fa fa-bolt"></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div className="dc-docpostcontent">
                          <a href="javascript:void(0);" className="dc-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <div className="dc-title">
                            <a
                              href="javascript:void(0)"
                              className="dc-docstatus"
                            >
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href="javascript:void(0);">
                                Dr. Carmelo G. lock{" "}
                              </a>{" "}
                              <i className="fa fa-award dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>{" "}
                              <i className="fa fa-check-circle dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul className="dc-docinfo">
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span className="dc-stars">
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div className="dc-doclocation">
                            <span>
                              <i className="ti-direction-alt"></i> Manchester,
                              UK
                            </span>
                            <span>
                              <i className="ti-calendar"></i> Mo,{" "}
                              <em className="dc-dayon">Tu</em>, We, Th, Fr, Sa
                            </span>
                            <a href="javascript:void(0);" className="dc-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="dc-docpostholder">
                        <figure className="dc-docpostimg">
                          <img
                            src="assets/images/doctors/img-04.jpg"
                            alt="img description"
                          />
                          <figcaption>
                            <span className="dc-featuredtag">
                              <i className="fa fa-bolt"></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div className="dc-docpostcontent">
                          <a href="javascript:void(0);" className="dc-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <div className="dc-title">
                            <a
                              href="javascript:void(0)"
                              className="dc-docstatus"
                            >
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href="javascript:void(0);">
                                Dr. Maryland Nicol lock
                              </a>{" "}
                              <i className="fa fa-award dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>{" "}
                              <i className="fa fa-check-circle dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul className="dc-docinfo">
                              <li>
                                <em>Clin Immn (Euro), FCPP</em>
                              </li>
                              <li>
                                <span className="dc-stars">
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div className="dc-doclocation">
                            <span>
                              <i className="ti-direction-alt"></i> Manchester,
                              UK
                            </span>
                            <span>
                              <i className="ti-calendar"></i> Mo, Tu, We, Th,
                              Fr, <em className="dc-dayon">Sa</em>
                            </span>
                            <a href="javascript:void(0);" className="dc-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="dc-docpostholder">
                        <figure className="dc-docpostimg">
                          <img
                            src="assets/images/doctors/img-03.jpg"
                            alt="img description"
                          />
                          <figcaption>
                            <span className="dc-featuredtag">
                              <i className="fa fa-bolt"></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div className="dc-docpostcontent">
                          <a href="javascript:void(0);" className="dc-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <div className="dc-title">
                            <a
                              href="javascript:void(0)"
                              className="dc-docstatus"
                            >
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href="javascript:void(0);">
                                Dr. Arron Benning
                              </a>{" "}
                              <i className="fa fa-award dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>{" "}
                              <i className="fa fa-check-circle dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul className="dc-docinfo">
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span className="dc-stars">
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div className="dc-doclocation">
                            <span>
                              <i className="ti-direction-alt"></i> FAAAAI (USA),
                              PGT Allergy (UK)
                            </span>
                            <span>
                              <i className="ti-calendar"></i> Mo, Tu, We, Th,
                              Fr, Sa
                            </span>
                            <a href="javascript:void(0);" className="dc-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="dc-docpostholder">
                        <figure className="dc-docpostimg">
                          <img
                            src="assets/images/doctors/img-05.jpg"
                            alt="img description"
                          />
                          <figcaption>
                            <span className="dc-featuredtag">
                              <i className="fa fa-bolt"></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div className="dc-docpostcontent">
                          <a href="javascript:void(0);" className="dc-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <div className="dc-title">
                            <a
                              href="javascript:void(0)"
                              className="dc-docstatus"
                            >
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href="javascript:void(0);">
                                Dr. Nubia Riccardi
                              </a>{" "}
                              <i className="fa fa-award dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>{" "}
                              <i className="fa fa-check-circle dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul className="dc-docinfo">
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span className="dc-stars">
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div className="dc-doclocation">
                            <span>
                              <i className="ti-direction-alt"></i> Manchester,
                              UK
                            </span>
                            <span>
                              <i className="ti-calendar"></i> Mo, Tu, We, Th,
                              Fr, Sa
                            </span>
                            <a href="javascript:void(0);" className="dc-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="dc-docpostholder">
                        <figure className="dc-docpostimg">
                          <img
                            src="assets/images/doctors/img-01.jpg"
                            alt="img description"
                          />
                          <figcaption>
                            <span className="dc-featuredtag">
                              <i className="fa fa-bolt"></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div className="dc-docpostcontent">
                          <a href="javascript:void(0);" className="dc-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <div className="dc-title">
                            <a
                              href="javascript:void(0)"
                              className="dc-docstatus"
                            >
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href="javascript:void(0);">
                                Dr. Tinisha Amenta
                              </a>{" "}
                              <i className="fa fa-award dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>{" "}
                              <i className="fa fa-check-circle dc-awardtooltip">
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul className="dc-docinfo">
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span className="dc-stars">
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div className="dc-doclocation">
                            <span>
                              <i className="ti-direction-alt"></i> Manchester,
                              UK
                            </span>
                            <span>
                              <i className="ti-calendar"></i> Mo, Tu, We, Th,
                              Fr, Sa
                            </span>
                            <a href="javascript:void(0);" className="dc-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Our Rated End --> */}
        {/* <!-- Mobile App Start --> */}
        <section className="dc-haslayout dc-bgcolor">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="dc-appbgimg">
                  <figure>
                    <img
                      src="assets/images/app-imgs/img-01.png"
                      alt="img description"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 justify-content-center align-self-center">
                <div className="dc-appcontent">
                  <div className="dc-sectionhead dc-sectionheadvtwo">
                    <div className="dc-sectiontitle">
                      <h2>
                        Care on the GO<span>Download Mobile App</span>
                      </h2>
                    </div>
                    <div className="dc-description">
                      <p>
                        Lorem ipsum dolor amet consectetur adipisicing eliteiuim
                        sete eiusmod tempor incididunt ut labore etnalom dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <ul className="dc-appicons">
                    <li>
                      <a href="javascript:void(0);">
                        <img
                          src="assets/images/app-imgs/img-03.png"
                          alt="img description"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <img
                          src="assets/images/app-imgs/img-02.png"
                          alt="img description"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Mobile App End --> */}
        {/* <!-- Emerging Clients Start --> */}
        <section class="dc-haslayout dc-main-section">
          <div class="container">
            <div class="row justify-content-center align-self-center">
              <div class="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-8 push-lg-2">
                <div class="dc-sectionhead dc-text-center">
                  <div class="dc-sectiontitle">
                    <h2>
                      <span>We Are Proud of Our Clients</span>Emerging{" "}
                      <em>Clients</em>
                    </h2>
                  </div>
                  <div class="dc-description">
                    <p>
                      Lorem ipsum dolor amet consectetur adipisicing eliteiuim
                      sete eiusmod tempor incididunt ut labore etnalom dolore
                      magna aliqua udiminimate veniam quis norud.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
                <div class="dc-clientslogo">
                  <ul>
                    <li>
                      <a href="javascript:void(0);">
                        <img
                          src="assets/images/clients-logos/img-01.png"
                          alt="img description"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <img
                          src="assets/images/clients-logos/img-02.png"
                          alt="img description"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <img
                          src="assets/images/clients-logos/img-03.png"
                          alt="img description"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <img
                          src="assets/images/clients-logos/img-04.png"
                          alt="img description"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Emerging Clients End --> */}
        {/* <!--Skills Start--> */}
        <section className="dc-haslayaout dc-footeraboutus dc-bgcolor">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="dc-widgetskills">
                  <div className="dc-fwidgettitle">
                    <h3>By Speciality</h3>
                  </div>
                  <ul className="dc-fwidgetcontent">
                    <li>
                      <a href="javascript:void(0);">Allergy Specialist</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Andrologist</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Anesthetist</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Audiologist</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Dietitian/Nutritionist</a>
                    </li>
                    <li className="dc-viewmore">
                      <a href="javascript:void(0);">View All</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="dc-widgetskill">
                  <div className="dc-fwidgettitle">
                    <h3>Doctors In US</h3>
                  </div>
                  <ul className="dc-fwidgetcontent">
                    <li>
                      <a href="javascript:void(0);">Laproscopic Surgeon</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        Oral And Maxillofacial Surgeon
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Orthopedic Surgeon</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        Pediatric Cardiac Surgeon
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        Pediatric Orthopedic Surgeon
                      </a>
                    </li>
                    <li className="dc-viewmore">
                      <a href="javascript:void(0);">View All</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="dc-footercol dc-widgetcategories">
                  <div className="dc-fwidgettitle">
                    <h3>By Categories</h3>
                  </div>
                  <ul className="dc-fwidgetcontent">
                    <li>
                      <a href="javascript:void(0);">Cosmetic Surgeon</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Eye Specialist</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Gastroenterologist</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">General Physician</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">General Practitioner</a>
                    </li>
                    <li className="dc-viewmore">
                      <a href="javascript:void(0);">View All</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="dc-widgetbylocation">
                  <div className="dc-fwidgettitle">
                    <h3>By Location</h3>
                  </div>
                  <ul className="dc-fwidgetcontent">
                    <li>
                      <a href="javascript:void(0);">Switzerland</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Canada</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Germany</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">United Kingdom</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Japan</a>
                    </li>
                    <li className="dc-viewmore">
                      <a href="javascript:void(0);">View All</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Skills Start End--> */}
      </main>
      {/* <!-- Main End --> */}
    </React.StrictMode>
  );
};

export default Home;
