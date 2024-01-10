import "../styles/Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/service/Grupo-59.webp";
import { useState, useMemo } from "react";
import countryList from "react-select-country-list";
import { Link } from "react-scroll";

const Contact = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div className="contactPage">
      <Navbar />

      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height={600}
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Urkixo%20Zumarkalea+(sea-trans)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
        >
          <a href="https://www.maps.ie/population/">Find Population on Map</a>
        </iframe>
      </div>
      <div className="position-relative contact-form-bg pb-5">
        <img src={logo} alt="logo" className="logoCon1" />
        <img src={logo} alt="logo" className="logoCon2" />
        <div className="py-5 ">
          <h1 className="cb mt-5 text-center font-gilroy-bold fs-3">
            Contact Us
          </h1>
          <h4 className="font-gilroy-bold text-secondary text-center py-3">
            Please feel free to contact us should you have any question
          </h4>
          <div className="container bg-white rounded-5 shadow px-md-5 py-5  px-2">
            <div className="row px-3">
              <div className="col-md-6 col-12 mb-3">
                <label className="input-group d-block">
                  Name
                  <input
                    type="text"
                    className="form-control mt-3 rounded-5  w-100"
                  />
                </label>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="input-group d-block">
                  Email
                  <input
                    type="email"
                    className="form-control mt-3 rounded-5  w-100"
                  />
                </label>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="input-group d-block">
                  Phone Number
                  <input
                    type="text"
                    className="form-control mt-3 rounded-5  w-100"
                  />
                </label>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="input-group d-block">
                  Select Your Country
                  <i className="fa  fa-caret-down "></i>
                  <select
                    className="form-control mt-3 rounded-5 pointer  w-100"
                    onChange={changeHandler}
                  >
                    {options.map((item) => {
                      return (
                        <option key={item.id} value={item.label}>
                          {item.label}
                        </option>
                      );
                    })}
                  </select>
                </label>
              </div>
              <div className="col-12 mb-3">
                <label className="input-group d-block">
                  Message (Max. 500 characters)
                  <textarea
                    rows={7}
                    className="form-control  rounded-5 mt-3 w-100"
                  />
                </label>
              </div>
              <div className="text-center">
                <Link className="aboutBtn  rounded-pill font-gilroy-bold btn ">
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
