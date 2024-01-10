import "../styles/Footer.css";
import Logo from "../assets/LOGO.webp";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer py-5">
        <div className="container">
          <div className="row px-md-0 px-3">
            <div className="col-md-5 col-12">
              <img src={Logo} alt="Logo" className="Logo" />
              <div className="pt-3">
                <p className="cb font-gilroy-bold fs-5 mb-4">
                  SEATRANS MARITIME, S.A.
                </p>
                <p className="mb-4 text-secondary">
                  {" "}
                  Alda. Urquijo 28 - 1°D
                  <br /> Bilbao 48011 - Bizkaia (Spain)
                </p>{" "}
                <p className="mb-4 text-secondary">
                  Avda, Leonardo Da Vinci 8.
                  <br /> Of 116. 28906 - Madrid (Spain)
                </p>
                <Link className="cb text-decoration-none d-block font-gilroy-bold">
                  {" "}
                  (+34) 94 425 59 47
                </Link>
                <Link className="cb text-decoration-none d-block font-gilroy-bold">
                  (+34) 91 161 01 51
                </Link>
                <Link className="cb text-decoration-none d-block font-gilroy-bold">
                  seatrans@sea-trans.net
                </Link>
                <Link className="cb text-decoration-none d-block font-gilroy-bold">
                  www.sea-trans.net
                </Link>
              </div>
            </div>
            <div className="col-md-7 col-12">
              <div className="d-flex mt-4 flex-md-nowrap flex-wrap justify-content-center gap-lg-4 gap-2">
                <NavLink
                  className="text-decoration-none footer-nav-Link contactHome"
                  to="/"
                >
                  Home
                </NavLink>
                <Link
                  className="text-decoration-none footer-nav-Link Home "
                  spy
                  smooth
                  duration={1000}
                  to="home"
                >
                  Home
                </Link>
                <span className="vr" />
                <Link
                  to="about"
                  spy
                  smooth
                  className="text-decoration-none footer-nav-Link"
                >
                  About
                  <span className="ps-lg-1 ">Us</span>
                </Link>
                <span className="vr" />
                <Link
                  to="service"
                  spy
                  smooth
                  className="text-decoration-none footer-nav-Link"
                >
                  Services
                </Link>
                <span className="vr" />
                <Link
                  to="advantages"
                  spy
                  smooth
                  className="text-decoration-none footer-nav-Link"
                >
                  Advantages
                </Link>
                <span className="vr" />
                <NavLink
                  to="/contact"
                  className="text-decoration-none footer-nav-Link"
                >
                  Contact
                </NavLink>
                <span className="vr" />
              </div>
              <div className="col-lg-5 col-sm-10 col-12 ps-5 mx-auto pt-5 footerLinks2">
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
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-danger text-white  p-3">
        Copyright © 2023 · Seatrans Maritime S.A. |
        <span className=" ps-1 pointer">Legal advise </span>|
        <span className=" ps-1 pointer">Data protection</span>
      </div>
    </>
  );
};

export default Footer;
