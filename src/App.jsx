import React, { useState, useEffect } from "react";
import "./components/styles/App.scss";
import Products from "./components/Products";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Navbar />
      {/* <Products /> */}
      {/* <Main /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
