import { Element } from "react-scroll";
import Slider from "./Slider";
import Service from "./Service";
import About from "./About";
import Advantages from "./Advantages";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
    <Navbar/>
      <Element name="home">
        <Slider />
      </Element>

      <Element name="service">
        <Service />
      </Element>

      <Element name="about">
        <About />
      </Element>
      <Element name="advantages">
        <Advantages />
      </Element>
      <Footer/>
    </>
  );
};

export default Home;
