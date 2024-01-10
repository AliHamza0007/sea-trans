import "../styles/About.css";
import Logo from "../assets/service/Grupo-59.webp";
import vedioimg from "../assets/about/Captura-de-pant-1.webp";
import { Link } from "react-scroll";
import { useState } from "react";
import Flash from "react-reveal/Flash";
import { useEffect } from "react";
import { Zoom } from "react-reveal";
const About = () => {
  const [vedio, setVedio] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVedio(false);
    }, 1000 * 60);
  }, [vedio]);
  return (
    <div className="about position-relative">
      <img src={Logo} className="logo" alt="Logo" />{" "}
      <div className="container py-5 text-center">
        <h2 className="font-gilroy-bold cb mt-4">About Us</h2>
        <p className=" text-secondary col-xl-6 col-md-10 col-12 mx-auto  font-gilroy-bold  ">
          Logistics service provider at all Iberian Peninsula ports offering an
          <br className="d-md-block d-none" />
          end-to-end service. We handle part-loads, storage,
          <br className="d-md-block d-none" />
          transhipments and special projects.{" "}
        </p>
      </div>
      <div className="col-xxl-4 col-xl-5 mb-5 col-md-7 col-11  mx-auto px-xl-4">
        <div className="card rounded-5 p-md-5 p-sm-4 p-3 ">
          <h2 className="cb mb-xxl-5 display-1 font-gilroy-bold text-center">
            <Flash>Since 1983</Flash>
          </h2>{" "}
          <p>
            SEATRANS MARITIME S.A. is a privately owned and Independent Maritime
            agency and Logistics services provider founded in Spain in 1.983
            covering Iberian Peninsula and Balearic as well as Canary Islands.
          </p>
          <p>
            We offer a wide range of services, which include vessel and port
            agencies project, freight forwarding, stevedoring and warehousing
            services.
          </p>
          <p>
            We combine the different transportation services available from the
            market to provide full logistical solutions matching geographical
            destinations and cargo composition to every cargo.
          </p>
          <p className="pb-md-5 pb-3">
            Our mission is to create, develop and deliver professional,
            trustworthy and efficient services to our clients worldwide.
          </p>
          <Link className="aboutBtn  rounded-pill font-gilroy-bold btn ">
            Service
          </Link>{" "}
          <img src={Logo} className="BottomLogo" alt="Logo" />{" "}
        </div>
      </div>
      <Zoom bottom duration={1000}>
        <div className="py-xl-2 py-lg-5 py-3 position-relative vedio-relative">
          <img src={Logo} className="vediologo" alt="Logo" />{" "}
          <div className="mt-5  text-center vedioDiv overflow-hidden   ">
            {" "}
            <img src={vedioimg} alt="vedio" className="vedio mx-auto" />
            <video
              className={`vedioFrame ${vedio ? "show" : ""} `}
              src="https://www.sea-trans.net/wp-content/uploads/2023/01/Sea-trans.mp4"
              controls
              preload="metadata"
            />{" "}
            <div onClick={() => setVedio(true)} className="play-icon">
              <i className="fas fa-play play-1"></i>
              <i className="fas fa-play play-2"></i>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default About;
