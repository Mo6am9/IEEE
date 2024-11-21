import React, { useState, useEffect, useRef } from "react";
import About from "./About";
import Membershi from "./Membership";
import Awardsy from "./Awards";
import img1 from "./20241104_205506.jpg";
import img2 from "./20241104_205502.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Instiutes.css";
const Instiutes = () => {
  const [time, setTime] = useState(new Date());
  const [height, setHeight] = useState(100);
  const [height2, setHeight2] = useState(100);
  const [height3, setHeight3] = useState(100);
  const [isVisible, setIsVisible] = useState(false);
  const [buttonsearch, setbuttonsearch] = useState(false);
  const [buttonmanu, setbuttonmanu] = useState(true);
  const [about, setabout] = useState(false);
  const [about2, setabout2] = useState(false);
  const [Awards, setAwards] = useState(false);
  const [Awards2, setAwards2] = useState(false);
  const [Membership, setMembership] = useState(false);
  const [Membership2, setMembership2] = useState(false);
  const [manusearch, setmanusearch] = useState(false);
  const [manu, setmanu] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2];
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const Tablesetmanusearch = () => {
    setmanusearch(!manusearch);
    const H = "hidden";
    const S = "scroll";
    if (manusearch) {
      setAwards2(false);
      setabout2(false);
      setMembership2(false);
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  };
  const TablesMembership = () => {
    if (Membership) {
      setMembership(false);
    } else {
      setMembership(true);
      setabout(false);
      setAwards(false);
    }
  };
  const TablesAwards = () => {
    if (Awards) {
      setAwards(false);
    } else {
      setMembership(false);
      setabout(false);
      setAwards(true);
    }
  };
  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 940) {
      setmanusearch(false);
      document.body.style.overflowY = "scroll";
    }
  });
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1000) {
      setMembership(false);
      setAwards(false);
      setabout(false);
    }
  });
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  const changeHeight = () => {
    setHeight(height === 100 ? 230 : 100);
  };
  const changeHeight2 = () => {
    setHeight2(height2 === 100 ? 230 : 100);
  };
  const changeHeight3 = () => {
    setHeight3(height3 === 100 ? 350 : 100);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const Tabblemanu = () => {
    setmanu(!manu);
  };
  const Tabbleabout = () => {
    if (about) {
      setabout(false);
    } else {
      setabout(true);
      setMembership(false);
      setAwards(false);
    }
  };
  const Tabbleabout2 = () => {
    if (about2) {
      setabout2(false);
      document.getElementById("mi").style.overflowY = "hidden";
    } else {
      setabout2(true);
      setMembership2(false);
      setAwards2(false);
      document.getElementById("mi").style.overflowY = "scroll";
    }
  };
  const TablesMembership2 = () => {
    if (Membership2) {
      setMembership2(false);
      document.getElementById("mi").style.overflowY = "hidden";
    } else {
      setMembership2(true);
      setabout2(false);
      setAwards2(false);
      document.getElementById("mi").style.overflowY = "scroll";
    }
  };
  const TablesAwards2 = () => {
    if (Awards2) {
      setAwards2(false);
      document.getElementById("mi").style.overflowY = "hidden";
    } else {
      setMembership2(false);
      setabout2(false);
      setAwards2(true);
      document.getElementById("mi").style.overflowY = "scroll";
    }
  };
  const Tablesbuttonsearch = () => {
    setbuttonsearch(true);
    setbuttonmanu(false);
  };
  const Tablesbuttonmanu = () => {
    setbuttonsearch(false);
    setbuttonmanu(true);
  };
  return (
    <React.StrictMode>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          <i class="fa-solid fa-plane-departure"></i>
        </button>
      )}
      {manusearch && (
        <div id="mi" className="manusearch">
          <section>
            <div className="time-X">
              <div id="time" className="timex">
                {time.toLocaleTimeString()}
              </div>
              <div className="buttons">
                {buttonsearch && (
                  <button onClick={Tablesbuttonmanu} className="Exnt">
                    {" "}
                    <i class="fa-solid fa-bars"></i>
                  </button>
                )}
                {buttonmanu && (
                  <button onClick={Tablesbuttonsearch} className="Exnt">
                    <i id="i" class="fa-solid fa-magnifying-glass"></i>
                  </button>
                )}
                <button onClick={Tablesetmanusearch} className="Exnt">
                  <i class="fa-duotone fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
            {buttonsearch && (
              <div className="manusearch-searchmanu">
                <div className="manusearch-search-i">
                  <div className="isearch">
                    <i id="i" class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <input type="text" />
                </div>
                <div className="fa-div">
                  <div className="div">
                    <span>mohamed nasser mohamed</span>
                    <span>+</span>
                  </div>
                  <div className="div">
                    <span>mohamed nasser mohamed</span>
                    <span>+</span>
                  </div>
                  <div className="div">
                    <span>mohamed nasser mohamed</span>
                    <span>+</span>
                  </div>
                  <div className="div">
                    <span>mohamed nasser mohamed</span>
                    <span>+</span>
                  </div>
                </div>
              </div>
            )}
            {buttonmanu && (
              <nav>
                <ul>
                  <li>
                    <a onClick={Tabbleabout2}>
                      <span>About</span>
                      <i class="fa-solid fa-caret-down"></i>
                    </a>
                  </li>
                  {about2 && (
                    <ul className="ul-a">
                      <li>
                        <a href="#">Constitution & Bylaws</a>
                      </li>
                      <li>
                        <a href="#">Code of Ethics</a>
                      </li>
                      <li>
                        <a href="#">EMBS Officers</a>
                      </li>
                      <li>
                        <a href="#">Executive Office</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  )}
                  <li>
                    <a onClick={TablesMembership2}>
                      <span>Membership</span>
                      <i class="fa-solid fa-caret-down"></i>
                    </a>
                  </li>
                  {Membership2 && (
                    <ul className="ul-a">
                      <li>
                        <a href="#">Overview</a>
                      </li>
                      <li>
                        <a href="#">Become a Member</a>
                      </li>
                      <li>
                        <a href="#">Become a Volunteer</a>
                      </li>
                      <li>
                        <a href="#">Senior Membership Information</a>
                      </li>
                      <li>
                        <a href="#">EMBS Chapters</a>
                      </li>
                      <li>
                        <a href="#">Students</a>
                      </li>
                    </ul>
                  )}
                  <li>
                    <a href="#">
                      <span>Publications</span>
                      <i class="fa-solid fa-caret-down"></i>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Technical Communities</span>
                      <i class="fa-solid fa-caret-down"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Events</span>
                      <i class="fa-solid fa-caret-down"></i>
                    </a>
                  </li>
                  <li>
                    <a onClick={TablesAwards2}>
                      <span>Awards</span>
                      <i class="fa-solid fa-caret-down"></i>
                    </a>
                  </li>
                  {Awards2 && (
                    <ul className="ul-a">
                      <li>
                        <a href="#">Overview</a>
                      </li>
                      <li>
                        <a href="#">Society Awards</a>
                      </li>
                      <li>
                        <a href="#">EMBS Officers</a>
                      </li>
                      <li>
                        <a href="#">Fellow Award</a>
                      </li>
                    </ul>
                  )}
                </ul>
              </nav>
            )}
          </section>
        </div>
      )}
      <div className="body">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
        <div className="div5"></div>
      </div>
      <div id="time" className="time">
        {time.toLocaleTimeString()}
      </div>
      <header>
        <div className="hare">
          <h1>
            <span>
              <i class="fa-sharp fa-solid fa-puzzle-piece"></i>{" "}
            </span>
            <span>IEEE </span>
            <span>140</span>
          </h1>
          <button onClick={Tablesetmanusearch} className="manu">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
        <nav>
          <ul>
            <li>
              <a onClick={Tabbleabout}>
                <span>About</span>
                <i class="fa-solid fa-caret-down"></i>
              </a>
            </li>
            <li>
              <a onClick={TablesMembership}>
                <span>Membership</span>
                <i class="fa-solid fa-caret-down"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Publications</span>
                <i class="fa-solid fa-caret-down"></i>{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <span>Technical Communities</span>
                <i class="fa-solid fa-caret-down"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Events</span>
                <i class="fa-solid fa-caret-down"></i>
              </a>
            </li>
            <li>
              <a onClick={TablesAwards}>
                <span>Awards</span>
                <i class="fa-solid fa-caret-down"></i>
              </a>
            </li>
          </ul>
        </nav>
        {about && <About />}
        {Membership && <Membershi />}
        {Awards && <Awardsy />}
      </header>
      <div className="EMBS">
        <div>
          <h1>Welcome to EMBS</h1>{" "}
          <p>
            <a href="#">Home</a>
            <i class="fa-solid fa-play"></i> <span>Welcome to EMBS</span>
          </p>
        </div>
        <div className="SL">
          <div className="search">
            <input type="text" placeholder="Search All IEEE Websites" />
            <div className="i">
              <i id="i" class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="links">
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <section>
        <h1>
          Where the Nexus of Engineering, Medicine, and Biology Unleashes
          Possibilities
        </h1>
        <p>
          Are you ready to be at the forefront of a healthcare revolution,
          standing at the intersection of engineering, medicine, and biology?
          Joining EMBS is not just a <a href="#">membership</a> ; it’s an
          invitation to be part of a global community that drives innovation and
          reshapes the landscape of healthcare.
        </p>
      </section>
      <main>
        <div className="Advancing-Technology">
          <h1>Advancing Technology for Humanity</h1>
          <p>
            IEEE and its members inspire a global community through highly cited
            publications, <br /> conferences, technology standards, and
            professional and educational activities, envisioning a sustainable
            future.
          </p>
          <button className="button-Learn">Learn More</button>
        </div>
        <div className="divw">
          <div style={{ height: `${height}px` }}>
            <button onClick={changeHeight}>Welcome, members!</button>{" "}
            <p>Access member resources</p>{" "}
            <nav>
              <ul>
                <li>
                  <a href="#">Renew your membership →</a>
                </li>
                <li>
                  <a href="#">Join a community →</a>
                </li>
                <li>
                  <a href="#">Add a Society →</a>
                </li>
                <li>
                  <a href="#">Get your company engaged →</a>
                </li>
              </ul>
            </nav>
          </div>
          <div style={{ height: `${height2}px` }} id="Get-connected">
            <button onClick={changeHeight2}>Get connected</button>{" "}
            <p>Explore what IEEE can offer you</p>
            <nav>
              <ul>
                <li>
                  <a href="#">Network and collaborate →</a>
                </li>
                <li>
                  <a href="#">Discover communities →</a>
                </li>
                <li>
                  <a href="#">Find local activities and events →</a>
                </li>
                <li>
                  <a href="#">Get the latest news →</a>
                </li>
              </ul>
            </nav>
          </div>
          <div style={{ height: `${height3}px` }}>
            <button onClick={changeHeight3}>Get involved</button>
            <p>Enrich your experience with IEEE</p>
            <nav>
              <ul>
                <li>
                  <a href="#">Become a member →</a>
                </li>
                <li>
                  <a href="#">Volunteer →</a>
                </li>
                <li>
                  <a href="#">Join a Society →</a>
                </li>
                <li>
                  <a href="#">Attend or organize a conference →</a>
                </li>
                <li>
                  <a href="#">Publish a paper →</a>
                </li>
                <li>
                  <a href="#">Join a standards working group →</a>
                </li>
                <li>
                  <a href="#">Donate to the IEEE Foundation →</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
      <div className="gallery">
        <button onClick={prevImage}>
          <i class="fa-solid fa-left-long"></i>
        </button>
        <img src={images[currentIndex]} alt="" className="image" />
        <button onClick={nextImage}>
          <i class="fa-solid fa-right-long"></i>
        </button>
      </div>
      <div class="container">
        <div class="section-title">
          <h1>Team </h1>
        </div>
        <div class="row">
          <div class="column">
            <div class="team-9">
              <div class="team-img">
                <img
                  src="https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg"
                  alt="Team Image"
                />
              </div>
              <div class="team-content">
                <h2>Josh Dunn</h2>
                <h3>CEO &amp; Founder</h3>
              </div>
              <div class="team-overlay">
                <p>Some text goes here that describes about team member</p>
                <div class="team-social">
                  <a class="social-tw" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="social-fb" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="social-li" href="">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a class="social-in" href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a class="social-yt" href="">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="team-9">
              <div class="team-img">
                <img
                  src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
                  alt="Team Image"
                />
              </div>
              <div class="team-content">
                <h2>Mollie Ross</h2>
                <h3>Art Director</h3>
              </div>
              <div class="team-overlay">
                <p>Some text goes here that describes about team member</p>
                <div class="team-social">
                  <a class="social-tw" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="social-fb" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="social-li" href="">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a class="social-in" href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a class="social-yt" href="">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="team-9">
              <div class="team-img">
                <img
                  src="https://1.bp.blogspot.com/-o0FrH2W7UoQ/YLjr2H_R7vI/AAAAAAAACO0/OCC2qfWChJoJVl4nr6YZvyGPwo2Hc43DQCNcBGAsYHQ/s16000/team-1-1.jpg"
                  alt="Team Image "
                />
              </div>
              <div class="team-content">
                <h2>Dylan Adams</h2>
                <h3>Developer</h3>
              </div>
              <div class="team-overlay">
                <p>Some text goes here that describes about team member</p>
                <div class="team-social">
                  <a class="social-tw" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="social-fb" href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="social-li" href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a class="social-in" href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a class="social-yt" href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="team-9">
              <div class="team-img">
                <img
                  src="https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg"
                  alt="Team Image"
                />
              </div>
              <div class="team-content">
                <h2>Jennifer Page</h2>
                <h3>Designer</h3>
              </div>
              <div class="team-overlay">
                <p>Some text goes here that describes about team member</p>
                <div class="team-social">
                  <a class="social-tw" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="social-fb" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="social-li" href="">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a class="social-in" href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a class="social-yt" href="">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};
export default Instiutes;
