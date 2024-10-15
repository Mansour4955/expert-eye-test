import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/r_006.jpg";
import image2 from "../assets/553r-dark-green-muscle-car-1920x914.webp";
import image3 from "../assets/sports-vs-supercars-cover-230920221250-420x230.jpg";
import Typewriter from "react-typewriter-effect";

const TextWriterSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (current, next) => setCurrentSlide(next), // Track current slide
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
          bottom: "40px",
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          height: "30px",
          color: currentSlide === i ? "gray" : "#ddd",
          backgroundColor: currentSlide === i ? "#f1f5f9" : "transparent",
          border: "1px #ddd solid",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  const images = [image1, image2, image3];

  return (
    <div className="relative w-full mx-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-5xl text-gray-200 font-bold">
        <Typewriter
          text="Welcome to the biggest cars market in the world!"
          cursorColor="#ddd"
          cursor={true}
        />
      </div>

      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img
              className="w-full h-[500px]"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TextWriterSlider;
