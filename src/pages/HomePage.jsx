import React from "react";
import TextWriterSlider from "../components/Slider";
import HomePageBelowSection from "../components/HomePageBelowSection";
const HomePage = () => {
  return (
    <div className="w-full flex flex-col">
      <TextWriterSlider />
      <HomePageBelowSection />
    </div>
  );
};

export default HomePage;