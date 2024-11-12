import React, { useState } from "react";

//CSS
import "./Dashboard.scss";

//IMAGES
import Logo from "../../assets/white-logo.svg";

//ICONS
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";

//ANT DESIGN
import { Drawer } from "antd";

//COMPONENTS
import Account from "../../components/DashBoardCom/Account/Account";
import PayAndTransfer from "../../components/DashBoardCom/PayAndTransfer/PayAndTransfer";
import CollectAndDeposit from "../../components/DashBoardCom/CollectAndDeposit/CollectAndDeposit";
import AccountManagement from "../../components/DashBoardCom/AccountManagment/AccountManagement";
import SecurityAndPrivacy from "../../components/DashBoardCom/SecurityAndPrivacy/SecurityAndPrivacy";

const Dashboard = () => {
  const [stepper, setStepper] = useState("account");
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="dashboard">
        <div className="header">
          <div className="container">
            <div className="content">
              <img src={Logo} alt="ERROR" />
              <span>
                <CgProfile />
                <a href="/">Open an account</a>
                <a href="/">Sign Out</a>
              </span>
            </div>
            <div className="links">
              <a
                onClick={() => setStepper("account")}
                className={stepper === "account" && "after-effect"}
              >
                Accounts
              </a>
              <a
                onClick={() => setStepper("payAndTransfer")}
                className={stepper === "payAndTransfer" && "after-effect"}
              >
                Pay & transfer
              </a>
              <a
                onClick={() => setStepper("collectAndDeposit")}
                className={stepper === "collectAndDeposit" && "after-effect"}
              >
                Collect & deposit
              </a>
              <a
                onClick={() => setStepper("accountManagement")}
                className={stepper === "accountManagement" && "after-effect"}
              >
                Account management
              </a>
              <a
                onClick={() => setStepper("secruityAndPrivacy")}
                className={stepper === "secruityAndPrivacy" && "after-effect"}
              >
                Security & privacy
              </a>
            </div>

            <span className="dashboard-menu" onClick={showDrawer}>
              <IoMdMenu />
            </span>
          </div>
        </div>
        {stepper === "account" && <Account />}
        {stepper === "payAndTransfer" && <PayAndTransfer />}
        {stepper === "collectAndDeposit" && <CollectAndDeposit />}
        {stepper === "accountManagement" && <AccountManagement />}
        {stepper === "secruityAndPrivacy" && <SecurityAndPrivacy />}
        <Drawer
          onClose={onClose}
          open={open}
          width={250}
          style={{ background: "#0060f0" }}
        >
          <div className="mobile-links">
            <a
              onClick={() => setStepper("account")}
              className={stepper === "account" && "after-effect"}
            >
              Accounts
            </a>
            <a
              onClick={() => setStepper("payAndTransfer")}
              className={stepper === "payAndTransfer" && "after-effect"}
            >
              Pay & transfer
            </a>
            <a
              onClick={() => setStepper("collectAndDeposit")}
              className={stepper === "collectAndDeposit" && "after-effect"}
            >
              Collect & deposit
            </a>
            <a
              onClick={() => setStepper("accountManagement")}
              className={stepper === "accountManagement" && "after-effect"}
            >
              Account management
            </a>
            <a
              onClick={() => setStepper("secruityAndPrivacy")}
              className={stepper === "secruityAndPrivacy" && "after-effect"}
            >
              Security & privacy
            </a>
            <span>
              <CgProfile />
              <a href="/">Open an account</a>
              <a href="/">Sign Out</a>
            </span>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Dashboard;
