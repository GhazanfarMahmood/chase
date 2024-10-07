import React from "react";

//css
import "./Header.scss";

// icon
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-img">
        <div>
          <img src={Logo} alt="ERROR" />
        </div>
      </div>
    </div>
  );
};

export default Header;
