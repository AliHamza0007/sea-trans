import "../styles/Advantages.css";
import lock from "../assets/advantages/Grupo-47.webp";
import Img24 from "../assets/advantages/24img.webp";
import clock from "../assets/advantages/clock.webp";
import Independent from "../assets/advantages/Independent.webp";
import ION from "../assets/advantages/ION.webp";
import medal from "../assets/advantages/medal.webp";
import MS from "../assets/advantages/MS.webp";
import PO from "../assets/advantages/PO.webp";
import ship from "../assets/advantages/ship.webp";
import www from "../assets/advantages/www.webp";
import { Fade } from "react-reveal";
const Advantages = () => {
  return (
    <div className="advantage pb-5">
      <h1 className="text-center cb font-gilroy-bold ">
        Our Advantages - Your benefit
      </h1>
      <p className="text-center py-2 sf">
        Below we have listed some major advantages that our{" "}
        <br className="d-lg-block d-none" /> organisation can offer to
        principals:
      </p>
      <div className="col-lg-5 col-md-10 col-12 mx-auto py-5 px-3">
        <Fade left>
          {" "}
          <div className="d-flex flex-md-row flex-column gap-md-5 mb-4  align-items-center">
            <img className="advantageIcon" src={lock} alt="lock" />
            <span className="vr d-md-block d-none" />
            <p className="sf">Privately owned</p>
          </div>
        </Fade>
        <Fade right>
          {" "}
          <div className="d-flex flex-md-row flex-column gap-md-5 mb-4 align-items-center">
            <img
              className="advantageIcon"
              src={Independent}
              alt="Independent"
            />
            <span className="vr d-md-block d-none" />
            <p className="sf">Independent</p>
          </div>
        </Fade>
        <Fade left>
          {" "}
          <div className="d-flex flex-md-row flex-column gap-md-5 mb-4  align-items-center">
            <img className="advantageIcon" src={MS} alt="MS" />
            <span className="vr d-md-block d-none" />
            <p className="sf">Medium Sized</p>
          </div>
        </Fade>
        <Fade right>
          {" "}
          <div className="d-flex flex-md-row flex-column gap-md-5 mb-4 align-items-center">
            <img className="advantageIcon" src={Img24} alt="Img24" />
            <span className="vr d-md-block d-none" />
            <p className="sf">24 hours, 7 days a week</p>
          </div>
        </Fade>
        <Fade left>
          {" "}
          <div className="d-flex flex-md-row flex-column gap-md-5 mb-4 align-items-center">
            <img className="advantageIcon" src={www} alt="www" />
            <span className="vr d-md-block d-none" />
            <p className="sf text-md-start text-center">
              World-wide trades / World-wide customers
            </p>
          </div>
        </Fade>
        <Fade right>
          {" "}
          <div className="d-flex flex-md-row flex-column gap-md-5 mb-4 align-items-center">
            <img className="advantageIcon" src={ship} alt="ship" />
            <span className="vr d-md-block d-none" />
            <p className="sf text-md-start text-center">
              Vast know-how in container shipping, b/b and Ro/Ro
            </p>
          </div>
        </Fade>
        <Fade left>
          {" "}
          <div className="d-flex flex-md-row flex-column gap-md-5 mb-4 align-items-center">
            <img className="advantageIcon" src={clock} alt="clock" />
            <span className="vr d-md-block d-none" />
            <p className="sf">Well advanced edp-systems</p>
          </div>
        </Fade>
        <Fade right>
          {" "}
          <div className="d-flex flex-md-row flex-column gap-md-5 mb-4 align-items-center">
            <img className="advantageIcon" src={ION} alt="ION" />
            <span className="vr d-md-block d-none" />
            <p className="sf">Inland office network</p>
          </div>
        </Fade>
        <Fade left>
          {" "}
          <div className="d-flex flex-md-row flex-column gap-md-5 mb-4 align-items-center">
            <img className="advantageIcon" src={medal} alt="medal" />
            <span className="vr d-md-block d-none" />
            <p className="sf">Financially sound and reliable</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Advantages;
