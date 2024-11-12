import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// page
import Home from "./pages/Home/Home";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import LogIn from "./components/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import ScheduleTransfer from "./components/DashBoardCom/ScheduleTransfer/ScheduleTransfer";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="scheduleTransfer" element={<ScheduleTransfer />} />
      </Routes>
      {pathname === "/" && <Footer />}
    </>
  );
};

export default App;
