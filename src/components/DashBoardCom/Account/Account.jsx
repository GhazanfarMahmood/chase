import React, { useState } from "react";
import { Button, Modal } from "antd";

//REACT ICON
import { FaPlane, FaStopCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

//CSS
import "./Account.scss";
import { Collapse } from "antd";

const Account = () => {
  const [isPaymentSuccessOpen, setIsPaymentSuccessOpen] = useState(false);
  const [isPaymentFailedOpen, setIsPaymentFailedOpen] = useState(false);

  const showSuccessModal = () => {
    setIsPaymentSuccessOpen(true);
  };

  const showFailedModal = () => {
    setIsPaymentFailedOpen(true);
  };

  const handleOk = () => {
    setIsPaymentSuccessOpen(false);
    setIsPaymentFailedOpen(false);
  };

  const handleCancel = () => {
    setIsPaymentSuccessOpen(false);
    setIsPaymentFailedOpen(false);
  };

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

          <div className="modal">
            <Button type="primary" onClick={showSuccessModal}>
              Payment Succeed
            </Button>
            <Modal
              title="Payment Sent"
              open={isPaymentSuccessOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div className="firstBox">
                <h2>Zelle®</h2>
                <p>Successfully sent $1500.00 to Mastha B...</p>
                <div className="content">
                  <div>
                    <span>Send to </span> Jourdain F.
                  </div>
                  <div>
                    <span>Phone or email</span> Jayd...@gmail.com
                  </div>
                  <div>
                    <span>Amount</span> $500.00
                  </div>
                  <div>
                    <span>From Account</span>Checking ...8008
                  </div>
                  <div>Memo</div>
                </div>
              </div>
            </Modal>

            <Button type="primary" onClick={showFailedModal}>
              Payment Failed
            </Button>
            <Modal
              title="Payment Failed"
              open={isPaymentFailedOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div className="secondBox">
                <h2>Zelle®</h2>
                <p>Failed to send $500.00 to Jourdain F.....</p>
                <p>Note: Due to insufficient funds</p>
                <div className="content">
                  <div>
                    <span>Send to </span> Jourdain F.
                  </div>
                  <div>
                    <span>Phone or email</span> Jayd...@gmail.com
                  </div>
                  <div>
                    <span>Amount</span> $500.00
                  </div>
                  <div>
                    <span>From Account</span>Checking ...8008
                  </div>
                  <div>Memo</div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
