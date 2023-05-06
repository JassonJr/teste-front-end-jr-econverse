import React, { useState, useEffect } from "react";
import "./components/styles/App.scss";
//import Products from "./components/Products";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
