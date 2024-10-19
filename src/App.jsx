import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// page
import Home from "./pages/Home/Home";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import LogIn from "./components/LogIn/LogIn";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/Login" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      {pathname !== "/Login" && <Footer />}
    </>
  );
};

export default App;
