import "../styles/Service.css";
import Logo from "../assets/service/Grupo-59.webp";
import ship from "../assets/service/ship.png";
import { Link } from "react-scroll";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Fade } from "react-reveal";
const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = (swiperInstance) => {
    if (swiperInstance === null) return;
    const currentSlide = swiperInstance?.activeIndex;
    setCurrentIndex(currentSlide);
  };

  return (
    <div className="service  py-2">
      <div className="position-relative  my-3">
        <img src={Logo} className="logo" alt="Logo" />
      </div>
      <Fade top>
        <div className="container text-center py-5">
          <h1 className="font-gilroy-bold cb">Our Service</h1>
          <h4 className="font-gilroy-bold cb fw-normal ">
            WORLDWIDE BESPOKE LOGISTICS
          </h4>
          <div>
            <ul className="d-flex flex-wrap justify-content-center  text-center list-unstyled my-5 service-link ">
              <li>
                <Link
                  to="https://www.sea-trans.net/port-agency-liner-agents/"
                  className="text-decoration-none text-secondary   font-gilroy-bold"
                >
                  Port agency / Liner agents
                </Link>
              </li>{" "}
              <span className="vr " />
              <li>
                <Link
                  to="https://www.sea-trans.net/chartering/"
                  className="text-decoration-none text-secondary   font-gilroy-bold"
                >
                  Chartering
                </Link>
              </li>
              <span className="vr " />
              <li>
                <Link
                  to="https://www.sea-trans.net/freight-forwarding/"
                  className="text-decoration-none text-secondary   font-gilroy-bold"
                >
                  Freight Forwarding
                </Link>
              </li>
              <span className="vr " />
              <li>
                <Link
                  to="https://www.sea-trans.net/project-cargo-and-heavy-lift/"
                  className="text-decoration-none text-secondary   font-gilroy-bold"
                >
                  Project cargo and heavy lift
                </Link>
              </li>
              <span className="vr " />
              <li>
                <Link
                  to="https://www.sea-trans.net/air-freight/"
                  className="text-decoration-none text-secondary   font-gilroy-bold"
                >
                  Air freight
                </Link>
              </li>
              <span className="vr " />
              <li>
                <Link
                  to="https://www.sea-trans.net/stevedoring/"
                  className="text-decoration-none text-secondary   font-gilroy-bold"
                >
                  Stevedoring
                </Link>
              </li>
              <span className="vr " />
              <li>
                <Link
                  to="https://www.sea-trans.net/imo-dangerous-goods/"
                  className="text-decoration-none text-secondary   font-gilroy-bold"
                >
                  IMO / Dangerous goods
                </Link>
              </li>
              <span className="vr " />
              <li>
                <Link
                  to="https://www.sea-trans.net/parceling-to-caspian-sea/"
                  className="text-decoration-none text-secondary   font-gilroy-bold"
                >
                  Parceling to Caspian Sea
                </Link>
              </li>
              <span className="vr " />
              <li>
                <Link
                  to="https://www.sea-trans.net/used-and-new-containers/"
                  className="text-decoration-none text-secondary   font-gilroy-bold"
                >
                  Used and new containers
                </Link>
              </li>
            </ul>
          </div>

          <div className="serviceSwiperBg container py-5">
            <Fade bottom delay={1000}>
              <Swiper
                modules={[Navigation, EffectFade, Autoplay, Pagination]}
                breakpoints={{
                  1024: { slidesPerView: 3 },
                  768: { slidesPerView: 1 },
                }}
                centeredSlides={true}
                spaceBetween={100}
                effect="slide"
                slideToClickedSlide={true}
                pagination={{ clickable: true }}
                navigation
                speed="1000"
                initialSlide={currentIndex}
                onActiveIndexChange={updateIndex}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                className="swiper py-5"
              >
                <p className="activeIndex">{currentIndex + 1}</p>
                <p className="totalIndex">9</p>
                <SwiperSlide>
                  <div className="serviceCard">
                    <div className="serviceIconDiv">
                      <i className="far  serviceIcon fa-calendar "></i>
                    </div>
                    <div>
                      <h3 className=" text-secondary  py-2 ">
                        Parceling to Caspian Sea
                      </h3>
                      <Link className="aboutBtn  rounded-pill font-gilroy-bold btn mt-md-5 mt-3">
                        More info
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div className="serviceCard">
                    <div className="serviceIconDiv">
                      <i className="far fa-handshake serviceIcon"></i>
                    </div>
                    <div>
                      <h3 className=" text-secondary  py-2 ">
                        Port agency / Liner agents
                      </h3>
                      <Link className="aboutBtn  rounded-pill font-gilroy-bold btn mt-md-5 mt-3">
                        More info
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="serviceCard">
                    <div className="serviceIconDiv">
                      <i className="fa-regular fa-square-check serviceIcon"></i>
                    </div>
                    <div>
                      <h3 className=" text-secondary  py-2 ">Chartering</h3>
                      <Link className="aboutBtn  rounded-pill font-gilroy-bold btn mt-md-5 mt-3">
                        More info
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="serviceCard">
                    <div className="serviceIconDiv">
                      <img alt="ship" src={ship} className=" serviceIcon" />
                    </div>
                    <div>
                      <h3 className=" text-secondary  py-2 ">
                        Freight Forwarding
                      </h3>
                      <Link className="aboutBtn  rounded-pill font-gilroy-bold btn mt-md-5 mt-3">
                        More info
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="serviceCard">
                    <div className="serviceIconDiv">
                      <i className="fa fa-chart-column serviceIcon"></i>
                    </div>
                    <div>
                      <h3 className=" text-secondary  py-2 ">Air Freight</h3>
                      <Link className="aboutBtn  rounded-pill font-gilroy-bold btn mt-md-5 mt-3">
                        More info
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="serviceCard">
                    <div className="serviceIconDiv">
                      <i className="fa-regular fa-clipboard serviceIcon"></i>
                    </div>
                    <div>
                      <h3 className=" text-secondary  py-2 ">
                        IMO/ Dangerous goods
                      </h3>
                      <Link className="aboutBtn  rounded-pill font-gilroy-bold btn mt-md-5 mt-3">
                        More info
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="serviceCard">
                    <div className="serviceIconDiv">
                      <i className="far  serviceIcon fa-calendar "></i>
                    </div>
                    <div>
                      <h3 className=" text-secondary  py-2 ">
                        Parceling to Caspian Sea
                      </h3>
                      <Link className="aboutBtn  rounded-pill font-gilroy-bold btn mt-md-5 mt-3">
                        More info
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="serviceCard">
                    <div className="serviceIconDiv">
                      <i className="far fa-handshake serviceIcon"></i>
                    </div>
                    <div>
                      <h3 className=" text-secondary  py-2 ">
                        Port agency / Liner agents
                      </h3>
                      <Link className="aboutBtn  rounded-pill font-gilroy-bold btn mt-md-5 mt-3">
                        More info
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="serviceCard">
                    <div className="serviceIconDiv">
                      <i className="fa fa-chart-column serviceIcon"></i>
                    </div>
                    <div>
                      <h3 className=" text-secondary  py-2 ">Air Freight</h3>
                      <Link className="aboutBtn  rounded-pill font-gilroy-bold btn mt-md-5 mt-3">
                        More info
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Fade>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Service;
