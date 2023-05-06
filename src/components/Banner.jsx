import React from "react";
import foto from "../Assets/png/banner.png";

const Banner = () => {
  return (
    <section className="banner-container">
      <div className="banner-shadow">
        <h1>Venha conhecer nossas promoções</h1>
        <h2>50% Off nos produtos</h2>
        <button>Ver produto</button>
      </div>
    </section>
  );
};

export default Banner;
