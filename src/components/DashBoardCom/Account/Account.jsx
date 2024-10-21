import React from "react";

//REACT ICON
import { FaPlane, FaStopCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

//CSS
import "./Account.scss";
import { Collapse } from "antd";

const Account = () => {
  return (
    <div className="account">
      <div className="container">
        <div className="wrapper">
          <div>
            <h3>Good evening</h3>
            <Collapse>
              <Collapse.Panel header="Credit Cards">
                <div className="price">
                  <span>$0.00</span>
                  <div>Current balance</div>
                  <a href="/">
                    Details
                    <MdOutlineKeyboardArrowDown />
                  </a>
                  <div>
                    <div>
                      <h2>Oct 5, 2024</h2>
                      <span>Payment due date</span>
                    </div>
                    <div>
                      <h2>$0.00</h2>
                      <span>Minimum payment due</span>
                    </div>
                    <div>
                      <h2>$0.00</h2>
                      <span>Last statement balance</span>
                    </div>
                    <div>
                      <h2>$7,000.00</h2>
                      <span>Available Credit</span>
                    </div>
                  </div>
                </div>
                <div className="price">
                  <span>$0.00</span>
                  <div>Current balance</div>
                  <a href="/">
                    Details
                    <MdOutlineKeyboardArrowDown />
                  </a>
                  <div style={{ borderBottom: "0px" }}>
                    <div>
                      <h2>Oct 5, 2024</h2>
                      <span>Payment due date</span>
                    </div>
                    <div>
                      <h2>$0.00</h2>
                      <span>Minimum payment due</span>
                    </div>
                    <div>
                      <h2>$0.00</h2>
                      <span>Last statement balance</span>
                    </div>
                    <div>
                      <h2>$7,000.00</h2>
                      <span>Available Credit</span>
                    </div>
                  </div>
                </div>
              </Collapse.Panel>
            </Collapse>
          </div>
          <div>
            <div>
              <h4>Rewards</h4>
              <div>
                <span>
                  <FaStopCircle />
                </span>
                <div>
                  <span>8,927</span>
                  <span>Ultimate Rewards points</span>
                </div>
                <span>
                  <IoIosArrowForward />
                </span>
              </div>
            </div>
            <div>
              <h4>Travel</h4>
              <div>
                <span>
                  <FaPlane />
                </span>
                <div>
                  <p>Explore millions of business travel options</p>
                  <span>Book hotels, flights, car rentals & more</span>
                </div>
                <span>
                  <IoIosArrowForward />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
