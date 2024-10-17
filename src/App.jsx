import React from "react";

// page
import Home from "./pages/Home/Home";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Route from react-router-dom
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
