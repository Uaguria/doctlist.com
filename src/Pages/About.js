import React from "react";

const About = () => {
  return (
    <div>
      {/* <!-- Home Banner Start --> */}
      <div className="dc-innerbanner-holder dc-haslayout">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="dc-innerbanner">
                <form className="dc-formtheme dc-form-advancedsearch dc-innerbannerform">
                  <fieldset>
                    <div className="form-group">
                      <input
                        type="text"
                        name="search"
                        className="form-control"
                        placeholder="Search doctors, clinics, hospitals, etc."
                      />
                    </div>
                    <div className="form-group">
                      <div className="dc-select">
                        <select
                          className="chosen-select locations"
                          data-placeholder="Country"
                          name="locations"
                        >
                          <option value="Location">Location*</option>
                          <option value="United State">United State</option>
                          <option value="Canada">Canada</option>
                          <option value="England">England</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="New Zealand">New Zealand</option>
                        </select>
                      </div>
                    </div>
                    <div className="dc-btnarea">
                      <a href="javascript:void(0);" className="dc-btn">
                        Search
                      </a>
                    </div>
                  </fieldset>
                </form>
                <a href="javascript:void(0);" className="dc-docsearch">
                  <span className="dc-advanceicon"></span>
                  <span>
                    Advanced <br />
                    Search
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="dc-advancedsearch-holder">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="dc-advancedsearchs">
                  <form className="dc-formtheme dc-form-advancedsearchs">
                    <fieldset>
                      <div className="form-group">
                        <div className="dc-select">
                          <select>
                            <option value="Availability">Availability</option>
                            <option value="Availability">morning</option>
                            <option value="Availability">evening</option>
                            <option value="Availability">night</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="dc-select">
                          <select>
                            <option value="Fee">Consultation Fee</option>
                            <option value="Fee">20 $</option>
                            <option value="Fee">22 $</option>
                            <option value="Fee">18 $</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="dc-typeoptions">
                          <span>Type:</span>
                          <div className="dc-select">
                            <select>
                              <option value="Show">Show All</option>
                              <option value="Show">Neurosurgeon</option>
                              <option>Dermatologists</option>
                              <option>Gastroenterologists</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <span className="dc-checkbox">
                          <input id="dc-show" type="checkbox" name="show" />
                          <label for="dc-show">Show Nearest Only</label>
                        </span>
                      </div>
                      <div className="dc-btnarea">
                        <a
                          href="javascript:void(0);"
                          className="dc-btn dc-resetbtn"
                        >
                          Reset Filters
                        </a>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Home Banner End --> */}
      {/* <!-- breadcrumbarea start --> */}
      <div className="dc-breadcrumbarea">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <ol className="dc-breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Blog</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- breadcrumbarea End --> */}
      {/* <!-- Main Start --> */}
      <main id="dc-main" className="dc-main dc-haslayout">
        {/* <!-- About Welcome Start --> */}
        <section className="dc-main-section dc-haslayout">
          <div className="container">
            <div className="row">
              <div className="dc-aboutstep">
                <div className="col-xs-12 col-sm-12 col-md-10 push-md-1 col-lg-10 push-lg-1 float-left">
                  <div className="dc-sectionhead dc-sectionheadvtwo">
                    <div className="dc-sectiontitle">
                      <h2>
                        Make a Smart Choice
                        <span>Take a Right Step For Your Life</span>
                      </h2>
                    </div>
                    <div className="dc-description">
                      <p>
                        Lorem ipsum dolor ametei consectetur adipisicing
                        eliteiuim sete eiusmod tempor incididunt ut labore
                        etnalom dolore magna aliqua udiminimate veniam quis
                        norud exercitation ullamco.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="dc-welcome-holder">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 float-left">
                    <div className="dc-welcomecontent">
                      <figure className="dc-welcomeimg">
                        <img
                          src="assets/images/welcome/img-01.jpg"
                          alt="img description"
                        />
                      </figure>
                      <div className="dc-title">
                        <h3>
                          <span>Search Best Online</span>Professional
                        </h3>
                      </div>
                      <div className="dc-description">
                        <p>
                          Amet consectetur adipisicing eliteiuim sete eiuode
                          tempor incididunt utoreas etnalom dolore maena aliqua
                          udiminimate veniam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 float-left">
                    <div className="dc-welcomecontent">
                      <figure className="dc-welcomeimg">
                        <img
                          src="assets/images/welcome/img-02.jpg"
                          alt="img description"
                        />
                      </figure>
                      <div className="dc-title">
                        <h3>
                          <span>Get Instant</span>Appointment
                        </h3>
                      </div>
                      <div className="dc-description">
                        <p>
                          Amet consectetur adipisicing eliteiuim sete eiuode
                          tempor incididunt utoreas etnalom dolore maena aliqua
                          udiminimate veniam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 float-left">
                    <div className="dc-welcomecontent">
                      <figure className="dc-welcomeimg">
                        <img
                          src="assets/images/welcome/img-03.jpg"
                          alt="img description"
                        />
                      </figure>
                      <div className="dc-title">
                        <h3>
                          <span>Leave Your</span>Feedback
                        </h3>
                      </div>
                      <div className="dc-description">
                        <p>
                          Amet consectetur adipisicing eliteiuim sete eiuode
                          tempor incididunt utoreas etnalom dolore maena aliqua
                          udiminimate veniam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- About Welcome End !--> */}
        {/* <!-- Works Section Start --> */}
        <section className="dc-haslayout">
          <div className="dc-haslayout dc-bgcolor dc-main-section dc-workholder"></div>
          <div className="dc-haslayout dc-main-section dc-workdetails-holder">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
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
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
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
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
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
        {/* <!-- Our Team Start --> */}
        <section className="dc-haslayout dc-main-section">
          <div className="container">
            <div className="row justify-content-center align-self-center">
              <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-8 push-lg-2">
                <div className="dc-sectionhead dc-text-center">
                  <div className="dc-sectiontitle">
                    <h2>
                      <span>Talent Behind Curtain</span>Meet <em>Our Team</em>
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
              <div className="dc-ourteamholder">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 float-left">
                  <div className="dc-ourteam">
                    <figure className="dc-ourteamimg">
                      <img
                        src="assets/images/ourteam/img-01.jpg"
                        alt="img description"
                      />
                    </figure>
                    <div className="dc-ourteamcontent">
                      <div className="dc-title">
                        <a href="javascript:void(0)">Founder, C.E.O</a>
                        <h3>
                          <a href="javascript:void(0);">Maryland Nicolosi</a>
                        </h3>
                      </div>
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
                        <li className="dc-youtube">
                          <a href="javascript:void(0);">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 float-left">
                  <div className="dc-ourteam">
                    <figure className="dc-ourteamimg">
                      <img
                        src="assets/images/ourteam/img-02.jpg"
                        alt="img description"
                      />
                    </figure>
                    <div className="dc-ourteamcontent">
                      <div className="dc-title">
                        <a href="javascript:void(0)">Marketing Manager</a>
                        <h3>
                          <a href="javascript:void(0);">
                            Lawerence Scarborough
                          </a>
                        </h3>
                      </div>
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
                        <li className="dc-youtube">
                          <a href="javascript:void(0);">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 float-left">
                  <div className="dc-ourteam">
                    <figure className="dc-ourteamimg">
                      <img
                        src="assets/images/ourteam/img-03.jpg"
                        alt="img description"
                      />
                    </figure>
                    <div className="dc-ourteamcontent">
                      <div className="dc-title">
                        <a href="javascript:void(0)">Administrator</a>
                        <h3>
                          <a href="javascript:void(0);">Lucien Grindstaff</a>
                        </h3>
                      </div>
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
          </div>
        </section>
        {/* <!-- Our Team End --> */}
        {/* <!-- Testimonials Slider Start--> */}
        <section className="dc-testimonials-holder dc-haslayout dc-main-section dc-bgcolor">
          <div className="dc-testimonials">
            <div className="container">
              <div className="row justify-content-center align-self-center">
                <div className="col-xs-12 col-sm-12 col-md-8 col-md-push-2 col-lg-8 col-lg-push-2">
                  <div className="dc-testimonials-head">
                    <div className="dc-heart">
                      <span className="dc-hearticon">
                        <i className="lnr lnr-heart"></i>
                      </span>
                    </div>
                    <div className="dc-title">
                      <h3>
                        Sweet Feedback<span>From Our Clients</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
                  <div className="dc-customerfeedbacks">
                    <div id="dc-authorpicslider" className="slider-nav center">
                      <div>
                        <figure className="dc-slide">
                          <img
                            src="assets/images/testimonials/img-01.jpg"
                            alt="image description"
                          />
                        </figure>
                      </div>
                      <div>
                        <figure className="dc-slide">
                          <img
                            src="assets/images/testimonials/img-01.jpg"
                            alt="image description"
                          />
                        </figure>
                      </div>
                      <div>
                        <figure className="dc-slide">
                          <img
                            src="assets/images/testimonials/img-01.jpg"
                            alt="image description"
                          />
                        </figure>
                      </div>
                      <div>
                        <figure className="dc-slide">
                          <img
                            src="assets/images/testimonials/img-01.jpg"
                            alt="image description"
                          />
                        </figure>
                      </div>
                    </div>
                    <div
                      id="dc-feedbackslider"
                      className="dc-feedbackslider slider-single "
                    >
                      <div className=" dc-testimonialscontent">
                        <div className="dc-description">
                          <blockquote>
                            <q>
                              Consectetur adipisicing eliteiuim sete eiusmod
                              tempor incididunt labore etnalom dolore magna{" "}
                              <span>aliqua udiminimate</span> veniam quis norud.
                            </q>
                          </blockquote>
                        </div>
                        <div className="dc-title">
                          <span>Client</span>
                          <h3>Sharan Jansson</h3>
                        </div>
                      </div>
                      <div className=" dc-testimonialscontent">
                        <div className="dc-description">
                          <blockquote>
                            <q>
                              Consectetur adipisicing eliteiuim sete eiusmod
                              tempor incididunt labore etnalom dolore magna{" "}
                              <span>aliqua udiminimate</span> veniam quis norud.
                            </q>
                          </blockquote>
                        </div>
                        <div className="dc-title">
                          <span>Client</span>
                          <h3>Sharan Jansson</h3>
                        </div>
                      </div>
                      <div className=" dc-testimonialscontent">
                        <div className="dc-description">
                          <blockquote>
                            <q>
                              Consectetur adipisicing eliteiuim sete eiusmod
                              tempor incididunt labore etnalom dolore magna{" "}
                              <span>aliqua udiminimate</span> veniam quis norud.
                            </q>
                          </blockquote>
                        </div>
                        <div className="dc-title">
                          <span>Client</span>
                          <h3>Sharan Jansson</h3>
                        </div>
                      </div>
                      <div className=" dc-testimonialscontent">
                        <div className="dc-description">
                          <blockquote>
                            <q>
                              Consectetur adipisicing eliteiuim sete eiusmod
                              tempor incididunt labore etnalom dolore magna{" "}
                              <span>aliqua udiminimate</span> veniam quis norud.
                            </q>
                          </blockquote>
                        </div>
                        <div className="dc-title">
                          <span>Client</span>
                          <h3>Sharan Jansson</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Testimonials Slider End --> */}
        {/* <!-- Emerging Clients Start --> */}
        <section className="dc-haslayout dc-main-section">
          <div className="container">
            <div className="row justify-content-center align-self-center">
              <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-8 push-lg-2">
                <div className="dc-sectionhead dc-text-center">
                  <div className="dc-sectiontitle">
                    <h2>
                      <span>We Are Proud of Our Clients</span>Emerging{" "}
                      <em>Clients</em>
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
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
                <div className="dc-clientslogo">
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
                    <li>
                      <a href="javascript:void(0);">
                        <img
                          src="assets/images/clients-logos/img-05.png"
                          alt="img description"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <img
                          src="assets/images/clients-logos/img-06.png"
                          alt="img description"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <img
                          src="assets/images/clients-logos/img-07.png"
                          alt="img description"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <img
                          src="assets/images/clients-logos/img-08.png"
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
        {/* <!--Skills End--> */}
      </main>
      {/* <!-- Main End --> */}
    </div>
  );
};

export default About;
