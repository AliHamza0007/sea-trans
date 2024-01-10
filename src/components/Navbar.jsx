import "../styles/Navbar.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/LOGO.webp";
const Navbar = () => {
  const [isNavbarScroll, setNavbarScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbarBg ${isNavbarScroll ? "navbarScroll shadow" : ""}`}>
      <nav className="navbar  pt-3">
        <div className="container ">
          <div className="d-flex justify-content-between align-items-center w-100  pe-4">
            <div className=" d-flex justify-content-xl-start justify-content-between align-items-center col-10  ">
              <Link className="navbar-brand " to="/">
                <img src={Logo} className="img-fluid Logo" alt="Logo" />
              </Link>
              <div className=" navbarBig  m-auto pt-3  ">
                <ul className="list-unstyled d-xl-flex d-none justify-content-center align-items-center gap-4">
                  <li className="nav-item ">
                  <NavLink className="nav-link  contactHome" to="/">
                  Home
                </NavLink>
                <Link
                  className="nav-link Home "
                  spy
                  smooth
                  duration={1000}
                  to="home"
                >
                  Home
                </Link>
                  </li>
                  <span className="vr text-white" />
                  <li className="nav-item ">
                    <Link
                      spy
                      smooth
                      duration={1000}
                      className="nav-link "
                      to="about"
                    >
                      About Us
                    </Link>
                  </li>
                  <span className="vr text-white" />
                  <li className="nav-item   ">
                    <Link
                      spy
                      smooth
                      duration={1000}
                      to="service"
                      className="dropdown nav-link"
                    >
                      Services
                      <i
                        className="fa fa-caret-down ms-2"
                        aria-hidden="true"
                      ></i>
                      <div className="dropdown-content">
                        <Link className="nav-link " to="#">
                          Port agency / Liner agents
                        </Link>

                        <Link className="nav-link " to="#">
                          Chartering
                        </Link>

                        <Link className="nav-link " to="#">
                          Freight Forwarding
                        </Link>
                        <Link className="nav-link " to="#">
                          Air freight{" "}
                        </Link>
                        <Link className="nav-link " to="#">
                          Stevedoring{" "}
                        </Link>
                        <Link className="nav-link " to="#">
                          IMO / Dangerous goods{" "}
                        </Link>
                        <Link className="nav-link " to="#">
                          Project cargo and heavy lift{" "}
                        </Link>
                        <Link className="nav-link " to="#">
                          Parceling to Caspian Sea{" "}
                        </Link>
                      </div>
                    </Link>
                  </li>
                  <span className="vr text-white" />
                  <li className="nav-item ">
                    <Link
                      spy
                      smooth
                      duration={1000}
                      className="nav-link  "
                      to="advantages"
                    >
                      Advantages
                    </Link>
                  </li>
                  <span className="vr text-white" />
                  <li className="nav-item ">
                    <NavLink className="nav-link  " to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="phoneIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.301"
                  height="13.307"
                  viewBox="848.35 94.347 13.301 13.307"
                >
                  <path
                    d="M861.646 105.094c0 .358-.014.717.003 1.075.04.846-.585 1.516-1.53 1.483-4.637-.163-8.103-2.277-10.369-6.32-.927-1.654-1.352-3.46-1.4-5.354-.025-1.022.554-1.621 1.577-1.628.673-.004 1.346-.005 2.018 0 .951.006 1.46.536 1.54 1.487.056.681.177 1.361.329 2.029.116.511.053.95-.264 1.361-.273.353-.537.713-.813 1.063-.074.095-.081.163-.019.27a7.585 7.585 0 0 0 2.73 2.729c.104.061.173.06.27-.016.35-.277.71-.54 1.06-.815.419-.329.877-.41 1.383-.252a7.94 7.94 0 0 0 2.092.333c.812.028 1.372.586 1.389 1.393.008.387.001.775.001 1.162h.003Zm-.882 0c0-.373.005-.746 0-1.119-.005-.366-.186-.545-.557-.558a8.808 8.808 0 0 1-2.287-.366.619.619 0 0 0-.614.11c-.413.326-.836.64-1.253.96-.262.201-.528.214-.817.055a8.451 8.451 0 0 1-3.388-3.372c-.177-.32-.161-.603.069-.89.315-.395.61-.805.921-1.201.148-.188.169-.372.124-.61a43.343 43.343 0 0 1-.363-2.29c-.052-.392-.197-.574-.596-.578a99.526 99.526 0 0 0-2.128 0c-.452.005-.64.2-.634.651.005.329.024.658.057.985.257 2.478 1.254 4.625 2.96 6.43 1.793 1.9 3.995 3.038 6.59 3.386.456.061.92.078 1.378.076.367-.001.532-.196.537-.55.004-.373 0-.746 0-1.119Z"
                    fill="#fff"
                    fillRule="evenodd"
                    data-name="Trazado 8"
                  ></path>
                </svg>{" "}
              </div>
            </div>
            <p className="d-xl-flex flex-column m-0  ps-3 col-2 d-none ">
              <Link to="tel:+34 94 425 59 47" className="navbarContact">
                (+34) 94 425 59 47
              </Link>
              <Link to="tel:+34 91 161 01 51" className="navbarContact">
                (+34) 91 161 01 51
              </Link>
              <Link
                to="mailto:seatrans@sea-trans.net"
                className="navbarContact"
              >
                seatrans@sea-trans.net
              </Link>
            </p>

            <button
              className="navbar-toggler d-xl-none col-2 d-md-flex   justify-content-center align-items-center "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <motion.i
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                    repeat: "Infinity",
                  },
                }}
                className="fa   fa-bars  navbar-toggler-icon"
              ></motion.i>
              <motion.i
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                    repeat: "Infinity",
                    repeatDelay: 0,
                    delay: 0,
                  },
                }}
                className="fa   fa-times navbar-toggler-icon"
              ></motion.i>
            </button>
          </div>{" "}
        </div>{" "}
        <div
          className="collapse navbarSmall navbar-collapse  justify-content-center "
          id="collapsibleNavId"
        >
          <ul className="navbar-nav  ">
            <li className="nav-item ">
            <NavLink className="nav-link  contactHome" to="/">
                  Home
                </NavLink>
                <Link
                  className="nav-link Home "
                  spy
                  smooth
                  duration={1000}
                  to="home"
                >
                  Home
                </Link>
            </li>
            <li className="nav-item ">
              <Link spy smooth duration={1000} className="nav-link " to="about">
                About Us
              </Link>
            </li>
            <li className="nav-item   ">
              <Link
                spy
                smooth
                duration={1000}
                to="service"
                className="dropdown nav-link"
              >
                Services
                <i className="fa fa-caret-down ms-2" aria-hidden="true"></i>
                <div className="dropdown-content">
                  <Link className="nav-link " to="#">
                    Port agency / Liner agents
                  </Link>

                  <Link className="nav-link " to="#">
                    Chartering
                  </Link>

                  <Link className="nav-link " to="#">
                    Freight Forwarding
                  </Link>
                  <Link className="nav-link " to="#">
                    Air freight{" "}
                  </Link>
                  <Link className="nav-link " to="#">
                    Stevedoring{" "}
                  </Link>
                  <Link className="nav-link " to="#">
                    IMO / Dangerous goods{" "}
                  </Link>
                  <Link className="nav-link " to="#">
                    Project cargo and heavy lift{" "}
                  </Link>
                  <Link className="nav-link " to="#">
                    Parceling to Caspian Sea{" "}
                  </Link>
                </div>
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                spy
                smooth
                duration={1000}
                className="nav-link  "
                to="advantages"
              >
                Advantages
              </Link>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link  " to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
