import React from "react";

const Contact = () => {
  return (
    <React.StrictMode>
      {/* <!-- Home Slider Start --> */}
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
                        <select>
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
      {/* <!-- Home Slider End --> */}
      {/* <!-- breadcrumbarea start --> */}
      <div className="dc-breadcrumbarea">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <ol className="dc-breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Contact</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- breadcrumbarea End --> */}
      {/* <!-- Main Start --> */}
      <main id="dc-main" className="dc-main dc-haslayout">
        {/* <!-- Contact Welcome Start --> */}

        <section className="dc-haslayout dc-main-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <div className="dc-welcomecontent">
                  <figure className="dc-welcomeimg">
                    <img
                      src="assets/images/Contact-v2logo_06.png"
                      alt="img description"
                    />
                  </figure>
                  <div className="dc-title">
                    <h3>
                      <span>Always Get In Touch</span>Our Contact Details
                    </h3>
                  </div>
                  <div className="dc-description dc-paddingr">
                    <p>
                      Amet consectetur adipisicing eliteiuim sete eiuode tempor
                      incint utoreas etnalom dolore maena aliqua udiminimate
                      veniam quis norud exerciton ullamco laboris nisiquip
                      commodo lokate.
                    </p>
                  </div>
                  <div className="dc-contactinfo dc-floatclear">
                    <ul>
                      <li>
                        <span>
                          <span className="lnr lnr-location"></span>123 New
                          Design Street, Melbour Australia 54214
                        </span>
                      </li>
                      <li>
                        <span className="lnr lnr-envelope"></span>
                        info@domainurl.com
                      </li>
                      <li>
                        <span className="lnr lnr-phone-handset"></span>(0800)
                        1234 567891
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 dc-map">
                <div
                  id="dc-thememap"
                  className="dc-thememap dc-thememapvtwo"
                ></div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Contact Welcome End --> */}
        {/* <!-- Query Section Start --> */}
        <section className="dc-haslayout dc-main-section dc-bgqueryimg text-center dc-querycontent">
          <div className="container">
            <div className="row  justify-content-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                <div className="dc-sectionhead dc-sectionheadvtwo">
                  <div className="dc-sectiontitle">
                    <h2>
                      Have A Query?<span>Ask For Free Online Help</span>
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
                <div className="dc-btnarea d-flex justify-content-center">
                  <a href="javascript:void(0);" className="dc-btn dc-btnactive">
                    View Questions
                  </a>
                  <a href="javascript:void(0);" className="dc-btn">
                    Ask Your Question
                  </a>
                </div>
                <figure className="dc-queryimg">
                  <img
                    src="assets/images/phoneagain.png"
                    alt="Image Description"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Query Section End --> */}
        {/* <!-- Say Hello Start --> */}
        <section className="dc-haslayout dc-main-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                <div className="dc-sectionhead dc-text-center dc-pnone">
                  <div className="dc-sectiontitle">
                    <h2>
                      <span>Get in Touch with Us</span>Say <em>Hello To Us</em>
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
                <div className="dc-form dc-floatclear dc-form-first">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name*"
                        />
                      </div>
                      <div className="form-group col-12 col-sm-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email*"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        name="textarea"
                        placeholder="Type Your Query*"
                      ></textarea>
                    </div>
                    <button
                      className="btn dc-btns btn-block dc-btnactive"
                      type="button"
                    >
                      Send Now
                    </button>
                  </form>
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
    </React.StrictMode>
  );
};

export default Contact;
