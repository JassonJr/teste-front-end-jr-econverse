import React from "react";

const Navbar = () => {
  return (
    <section className="section-categories">
      <div className="category">
        <div className="category-box highlight-box">
          <img
            src="../src/Assets/png/tecnologia.png"
            alt="Equipamentos Eletrônicos"
          />
        </div>
        <p className="highlight">Tecnologia</p>
      </div>
      <div className="category">
        <div className="category-box">
          <img src="../src/Assets/png/supermercados.png" alt="Supermercado" />
        </div>
        <p>Supermercado</p>
      </div>
      <div className="category">
        <div className="category-box">
          <img src="../src/Assets/png/bebidas.png" alt="Bebidas" />
        </div>
        <p>Bebidas</p>
      </div>
      <div className="category">
        <div className="category-box">
          <img src="../src/Assets/png/Ferramentas.png" alt="Ferramentas" />
        </div>
        <p>Ferramentas</p>
      </div>
      <div className="category">
        <div className="category-box">
          <img src="../src/Assets/png/saude.png" alt="Saúde" />
        </div>
        <p>Saúde</p>
      </div>
      <div className="category">
        <div className="category-box">
          <img src="../src/Assets/png/esportes.png" alt="Esportes" />
        </div>
        <p>Esportes e Fitness</p>
      </div>
      <div className="category">
        <div className="category-box">
          <img src="../src/Assets/png/moda.png" alt="Moda" />
        </div>
        <p>Moda</p>
      </div>
    </section>
  );
};

export default Navbar;
