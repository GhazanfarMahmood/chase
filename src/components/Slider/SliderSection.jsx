import React from "react";

// css
import "./Slider.scss";

//icons
import { BsPeopleFill } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { GoCreditCard } from "react-icons/go";
import { LiaPagerSolid } from "react-icons/lia";
import { FaPlane } from "react-icons/fa";
import { LuPiggyBank } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { PiCarProfileFill } from "react-icons/pi";
import { BsGraphUp } from "react-icons/bs";
import { IoBusinessSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// css for slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const sliderData = [
  {
    id: 0,
    icon: <BsPeopleFill />,
    title: "Schedule a meeting",
  },
  {
    id: 1,
    icon: <BsSpeedometer2 />,
    title: "Free Credit score",
  },
  {
    id: 2,
    icon: <MdBusinessCenter />,
    title: "Business",
  },
  {
    id: 3,
    icon: <GoCreditCard />,
    title: "Credit Cards",
  },
  {
    id: 4,
    icon: <LiaPagerSolid />,
    title: "Checking",
  },
  {
    id: 5,
    icon: <FaPlane />,
    title: "Travel",
  },
  {
    id: 6,
    icon: <LuPiggyBank />,
    title: "Savings",
  },
  {
    id: 7,
    icon: <IoHomeOutline />,
    title: "Home loans",
  },
  {
    id: 8,
    icon: <PiCarProfileFill />,
    title: "Auto",
  },
  {
    id: 9,
    icon: <BsGraphUp />,
    title: "Investments",
  },
  {
    id: 10,
    icon: <IoBusinessSharp />,
    title: "Commercial",
  },
];

// custom arrow
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`custom-forward-arrow ${className}`}
      style={{ ...style, background: "transparent" }}
      onClick={onClick}
    >
      <div>
        <IoIosArrowForward />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`custom-backward-arrow ${className}`}
      style={{ ...style, background: "transparent" }}
      onClick={onClick}
    >
      <div>
        <IoIosArrowBack />
      </div>
    </div>
  );
}
const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <h1>Choose what&#x2019;s right for you</h1>
      <div className="slider-box">
        <Slider {...settings}>
          {sliderData.map((data) => {
            return (
              <div className="slider-card" key={data.id}>
                <div>{data.icon}</div>
                <p>{data.title}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderSection;
