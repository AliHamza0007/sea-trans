import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import s1 from "../assets/slider/s1.webp";
import s2 from "../assets/slider/s2.webp";
import s3 from "../assets/slider/s3.webp";
import s4 from "../assets/slider/s4.webp";
import overlay from "../assets/slider/Slideroverlay.webp";
import "../styles/Slider.css";
import { useState } from "react";
import { Link } from "react-scroll";
import Jump from "react-reveal/Jump";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const updateIndex = (swiperInstance) => {
    if (swiperInstance === null) return;
    const currentSlide = swiperInstance?.activeIndex;
    setCurrentIndex(currentSlide);
  };

  return (
    <div
      className="Slider
    "
    >
      {" "}
      <Swiper
        modules={[Navigation, EffectFade, Autoplay, Pagination]}
        effect="fade"
        pagination={{ clickable: true }}
        navigation
        speed="1000"
        initialSlide={currentIndex}
        onActiveIndexChange={updateIndex}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        className="swiper "
      >
        <p className="activeIndex">{currentIndex + 1}</p>
        <p className="totalIndex">4</p>
        <SwiperSlide>
          <div>
            <img src={s1} className="img-fluid sliderImages " alt=" s1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={s2} className="img-fluid sliderImages " alt=" s1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={s3} className="img-fluid sliderImages " alt=" s1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={s4} className="img-fluid sliderImages " alt=" s1" />
          </div>
        </SwiperSlide>
        <img src={overlay} className="overlay" alt="Overlay" />
        <div className="SliderContent text-md-start text-center">
          <Jump delay={2000}>
            <h1 className="text-white lh-sm display-2 font-gilroy-bold ">
              Fast Flexible Reliable
            </h1>
            <h2 className="text-white  font-gilroy-semibold  ">
              The preferred agent
            </h2>{" "}
            <Link className="aboutBtn  rounded-pill font-gilroy-bold btn mt-md-5 mt-3">
              About Us
            </Link>
          </Jump>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
