import React from "react";
import foto from "../Assets/png/banner.png";

const Banner = () => {
  return (
    <section className="banner-container">
      <div className="banner-inside shadow">
        <h1 className="banner-title">Venha conhecer nossas promoções</h1>
        <p className="banner-text">50% Off nos produtos</p>
        <button className="banner-button">Ver produto</button>
      </div>
    </section>
  );
};

export default Banner;
