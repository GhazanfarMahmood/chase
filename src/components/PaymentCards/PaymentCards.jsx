import React from "react";

// css
import "./PaymentCards.scss";

// icons
import { PiCarProfileFill } from "react-icons/pi";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsShop } from "react-icons/bs";

const paymentData = [
  {
    id: 0,
    title: "Chase Auto",
    icon: <PiCarProfileFill />,
    heading: "Get prequalification results in seconds",
    phara: "Learn how much you can borrow with no impact on your credit score.",
    button: "Get prequalified",
    bgColor: "var(--on-hover-primary-color)",
  },
  {
    id: 1,
    title: "Chase Freedom Unlimited",
    icon: <AiOutlineCreditCard />,
    heading: "Earn a 200$ bonus",
    phara:
      "Plus, earn unlimited 1.5% cash back or more on all purchases, including 3% on dining drugstores",
    bold: "- all with no annual fee",
    button: "Learn more",
    bgColor: "var(--link-color)",
  },
  {
    id: 2,
    title: "Payment Solutions",
    icon: <BsShop />,
    heading: "Accept payments anytime, anywhere",
    phara:
      "Make sure you're prepared for every sale, wherever your customers want to pay. Process credit cards anywhere in the U.S.",
    button: "Learn more",
    bgColor: "#00008B",
  },
];
const PaymentCards = () => {
  return (
    <div className="payment-card-container">
      <div className="payment-card-box">
        {paymentData.map((data) => {
          return (
            <div className="payment-card-card" key={data.id}>
              <div
                className="payment-upper-part"
                style={{ backgroundColor: data.bgColor }}
              >
                <h2>{data.title}</h2>
                <span>{data.icon}</span>
              </div>
              <div className="payment-text-card">
                <h3>{data.heading}</h3>
                <p>
                  {data.phara}
                  <b>{data?.bold}</b>
                </p>
                <button>{data.button}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentCards;
