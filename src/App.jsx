
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

     
    </BrowserRouter>
  );
};

export default App;
