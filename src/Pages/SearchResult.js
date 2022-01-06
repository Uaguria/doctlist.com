import React, { useState, useEffect } from "react";
import axios from "axios";

// import pages
import Loader from "../Component/Loader";

const SearchResult = (props) => {
  const [doctors, setDoctors] = useState([]);
  const [previous, setPrevious] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getAllDoctorsData = async () => {
    setIsLoading(true);
    axios
      .get("https://hellodoc-api.herokuapp.com/api/v1/doctors")
      .then((res) => {
        setDoctors(res.data.data);
        setPrevious(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllDoctorsData();
  }, []);

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
                        className="form-control"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search doctors, clinics, hospitals, Locations etc."
                      />
                    </div>
                    <div className="form-group">
                      <div className="dc-select">
                        <select>
                          <option value="Location">Location</option>
                          <option value="United State">United State</option>
                          <option value="Canada">Canada</option>
                          <option value="England">England</option>
                        </select>
                      </div>
                    </div>
                    <div className="dc-btnarea">
                      <a href="#" className="dc-btn">
                        {isLoading ? "Loading..." : "Search"}
                      </a>
                    </div>
                  </fieldset>
                </form>
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
                        <a href="#" className="dc-btn dc-resetbtn">
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
                <li>Search Result</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- breadcrumbarea End --> */}
      {/* <!-- Main Start --> */}
      <main id="dc-main" className="dc-main dc-haslayout">
        {/* <!-- About Welcome Start --> */}
        {/* <!-- About Welcome Start --> */}
        <div className="dc-haslayout dc-main-section">
          {/* <!-- User Listing Start--> */}
          <div className="container">
            <div className="row">
              <div id="dc-twocolumns" className="dc-twocolumns dc-haslayout">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-9 float-left">
                  <div className="dc-searchresult-holder">
                    <div className="dc-searchresult-grid dc-searchresult-list dc-searchvlistvtwo">
                      <div className="dc-searchresult-head">
                        <div className="dc-title">
                          <h4>
                            {previous.count} matches found :
                            <strong> India</strong>
                          </h4>
                        </div>
                        <div className="dc-rightarea">
                          <div className="dc-select">
                            <select>
                              <option value="Sort By:">Sort By:</option>
                            </select>
                          </div>
                          <div className="dc-gridlist-option">
                            <a href="#">
                              <i className="ti-layout-grid2"></i>
                            </a>
                            <a href="#" className="dc-linkactive">
                              <i className="ti-view-list"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* loop start */}
                      {isLoading ? (
                        // <Loader />
                        <h3 style={{ textAlign: "center" }}>Loading...</h3>
                      ) : (
                        <>
                          {doctors
                            .filter((val) => {
                              if (searchTerm === "") {
                                return val;
                              } else if (
                                val.firstname
                                  .toLowerCase()
                                  .includes(searchTerm)
                                  .toLowerCase()
                              ) {
                                return val;
                              }
                            })
                            .map((value, index) => (
                              <div className="dc-docpostholder" key={index}>
                                <div className="dc-docpostcontent">
                                  <div className="dc-searchvtwo">
                                    <figure className="dc-docpostimg">
                                      <img
                                        src={value.image}
                                        alt="img description"
                                        style={{
                                          height: "100px",
                                          width: "100px",
                                        }}
                                      />
                                      <figcaption>
                                        <span className="dc-featuredtag">
                                          <i className="fa fa-bolt"></i>
                                        </span>
                                      </figcaption>
                                    </figure>
                                    <div className="dc-title">
                                      <a
                                        href="javascript:void(0)"
                                        className="dc-docstatus"
                                      >
                                        {value.specialities}
                                      </a>
                                      <h3>
                                        <a href="#">
                                          Dr. {value.firstname} {value.lastname}
                                        </a>
                                        <i className="fa fa-award dc-awardtooltip">
                                          <em>Medical Registration Verified</em>
                                        </i>
                                        <i className="fa fa-check-circle dc-awardtooltip">
                                          <em>Medical Registration Verified</em>
                                        </i>
                                      </h3>
                                      <ul className="dc-docinfo">
                                        <li>
                                          <em>{value.qualification}</em>
                                        </li>
                                        <li>
                                          <span className="dc-stars">
                                            <span></span>
                                          </span>
                                          <em>2100 Feedback</em>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="dc-tags">
                                      <ul>
                                        <li>
                                          <a href="#">Artificial Teeth</a>
                                        </li>
                                        <li>
                                          <a href="#">Conservative Dentistry</a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            Crowns and Bridges Fixing
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">Endosurgery</a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            Fixed Partial Denture (FPD)
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">Flap Surgery</a>
                                        </li>
                                        <li>
                                          <a href="#" className="dc-tagviewall">
                                            View all
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="dc-doclocation dc-doclocationvtwo">
                                    <span>
                                      <i className="ti-direction-alt"></i>{" "}
                                      Manchester, UK
                                    </span>
                                    <span>
                                      <i className="ti-calendar"></i> Mo, Tu,
                                      <em className="dc-dayon">We</em>, Th, Fr,
                                      Sa
                                    </span>
                                    <span>
                                      <i className="ti-thumb-up"></i> 345 Votes
                                    </span>
                                    <span>
                                      <i className="ti-wallet"></i> Starting
                                      From $50
                                    </span>
                                    <span>
                                      <i className="ti-calendar"></i>
                                      <em className="dc-available">
                                        Available Today
                                      </em>
                                    </span>
                                    <div className="dc-btnarea">
                                      <a href="#" className="dc-btn">
                                        Book Now
                                      </a>
                                      <a href="#" className="dc-like dc-liked">
                                        <i className="fa fa-heart"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </>
                      )}

                      {/* loop end */}
                      <figure className="dc-searchresultad">
                        <a href="#">
                          <img
                            src="assets/images/ads-img/img-03.jpg"
                            alt="img description"
                          />
                        </a>
                        <span>Advertisement 770px X 90px</span>
                      </figure>
                      <nav className="dc-pagination">
                        <ul>
                          <li className="dc-prevpage">
                            <a href="javascrip:void(0);">
                              <i className="lnr lnr-chevron-left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="javascrip:void(0);">1</a>
                          </li>
                          <li>
                            <a href="javascrip:void(0);">2</a>
                          </li>
                          <li>
                            <a href="javascrip:void(0);">3</a>
                          </li>
                          <li>
                            <a href="javascrip:void(0);">4</a>
                          </li>
                          <li>
                            <a href="javascrip:void(0);">...</a>
                          </li>
                          <li>
                            <a href="javascrip:void(0);">50</a>
                          </li>
                          <li className="dc-nextpage">
                            <a href="javascrip:void(0);">
                              <i className="lnr lnr-chevron-right"></i>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 float-left">
                  <aside
                    id="dc-sidebar"
                    className="dc-sidebar dc-sidebar-grid float-left mt-md-0"
                  >
                    <div className="dc-widget dc-onlineoptions">
                      <figure className="dc-onlinuserimg">
                        <img src="assets/images/doctors/img-11.jpg" />
                        <figcaption>
                          <span>Live</span>
                        </figcaption>
                      </figure>
                      <div className="dc-onlineoption-content">
                        <div className="dc-title">
                          <h3>
                            <span>Stop Waiting in Queue</span> Ask Query Online
                          </h3>
                        </div>
                        <div className="dc-btnarea">
                          <a href="#" className="dc-btn dc-btnactive">
                            Book Audio / Video Call
                          </a>
                          <span>
                            50,000+<em>Consultation Served </em>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="dc-widget dc-mostsearch-holder">
                      <div className="dc-widgettitle">
                        <h3>Most Nearby Search</h3>
                      </div>
                      <div className="dc-widgetcontent">
                        <ul className="dc-mostsearch-content">
                          <li>
                            <a href="#">Allergy Specialist</a>
                          </li>
                          <li>
                            <a href="#">Andrologist</a>
                          </li>
                          <li>
                            <a href="#">Anesthetist</a>
                          </li>
                          <li>
                            <a href="#">Audiologist</a>
                          </li>
                          <li>
                            <a href="#">Dietitian/Nutritionist</a>
                          </li>
                          <li>
                            <a href="#">Laproscopic Surgeon</a>
                          </li>
                          <li>
                            <a href="#">Maxillofacial Surgeon</a>
                          </li>
                          <li>
                            <a href="#">Orthopedic Surgeon</a>
                          </li>
                          <li>
                            <a href="#">Pediatric Cardiac Surgeon</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="dc-widget dc-mobileappoptions">
                      <figure className="dc-appimgs">
                        <img src="assets/images/doctors/img-12.jpg" />
                      </figure>
                      <div className="dc-mobileapp-content">
                        <div className="dc-title">
                          <h3>
                            <span>Care on the GO</span> Get Mobile App
                          </h3>
                        </div>
                        <div className="dc-description">
                          <p>
                            A dipisicing sed dotem eiusmou tempor incididunt ut
                            labore
                          </p>
                        </div>
                        <div className="dc-appemail-form">
                          <input
                            type="email"
                            name="email"
                            value=""
                            className="form-control"
                            placeholder="Email ID"
                            required=""
                          />
                          <button type="submit">
                            <i className="fa fa-paper-plane"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <figure className="dc-searchresultad">
                      <a href="#">
                        <img
                          src="assets/images/ads-img/img-02.jpg"
                          alt="img description"
                        />
                      </a>
                      <span>Advertisement 770px X 90px</span>
                    </figure>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- User Listing End--> */}
        </div>
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
                      <a href="#">Allergy Specialist</a>
                    </li>
                    <li>
                      <a href="#">Andrologist</a>
                    </li>
                    <li>
                      <a href="#">Anesthetist</a>
                    </li>
                    <li>
                      <a href="#">Audiologist</a>
                    </li>
                    <li>
                      <a href="#">Dietitian/Nutritionist</a>
                    </li>
                    <li className="dc-viewmore">
                      <a href="#">View All</a>
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
                      <a href="#">Laproscopic Surgeon</a>
                    </li>
                    <li>
                      <a href="#">Oral And Maxillofacial Surgeon</a>
                    </li>
                    <li>
                      <a href="#">Orthopedic Surgeon</a>
                    </li>
                    <li>
                      <a href="#">Pediatric Cardiac Surgeon</a>
                    </li>
                    <li>
                      <a href="#">Pediatric Orthopedic Surgeon</a>
                    </li>
                    <li className="dc-viewmore">
                      <a href="#">View All</a>
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
                      <a href="#">Cosmetic Surgeon</a>
                    </li>
                    <li>
                      <a href="#">Eye Specialist</a>
                    </li>
                    <li>
                      <a href="#">Gastroenterologist</a>
                    </li>
                    <li>
                      <a href="#">General Physician</a>
                    </li>
                    <li>
                      <a href="#">General Practitioner</a>
                    </li>
                    <li className="dc-viewmore">
                      <a href="#">View All</a>
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
                      <a href="#">Switzerland</a>
                    </li>
                    <li>
                      <a href="#">Canada</a>
                    </li>
                    <li>
                      <a href="#">Germany</a>
                    </li>
                    <li>
                      <a href="#">United Kingdom</a>
                    </li>
                    <li>
                      <a href="#">Japan</a>
                    </li>
                    <li className="dc-viewmore">
                      <a href="#">View All</a>
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

export default SearchResult;
