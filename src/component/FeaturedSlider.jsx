import { useState, useEffect } from "react";
import "../style/FeaturedSlider.css";

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
import banner5 from "../assets/banner5.png";
import banner6 from "../assets/banner6.png";
import banner7 from "../assets/banner7.png";
import banner8 from "../assets/banner8.png";
import banner9 from "../assets/banner9.png";

const banners = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
];

function FeaturedSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  return (
    <section className="featured-slider">

     <button className="featured-arrow featured-left" onClick={prevSlide}>
        ❮
      </button>

      <img src={banners[current]} alt="Banner" />

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      <div className="dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>

    </section>
  );
}

export default FeaturedSlider;