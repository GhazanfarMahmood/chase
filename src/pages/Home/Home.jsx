import React from "react";

//components
import Main from "../../components/Main/Main";
import Slider from "../../components/Slider/SliderSection";
import PaymentCards from "../../components/PaymentCards/PaymentCards";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <Main />
      <Slider />
      <PaymentCards />
      <Hero />
    </>
  );
};

export default Home;
