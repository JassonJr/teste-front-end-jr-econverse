import React from "react";

const Header = () => {
  return (
    <header>
      {/* benefícios */}
      <section className="benefits">
        <div className="benefits-item">
          <img src="../src/Assets/svg/ShieldCheck.svg" alt="segurança" />
          <p>
            Compra <span className="highlight">100% segura</span>
          </p>
        </div>
        <div className="benefits-item">
          <img src="../src/Assets/svg/Truck.svg" alt="Frete Gratis" />
          <p>
            <span className="highlight">Frete grátis</span> acima de R$200
          </p>
        </div>
        <div className="benefits-item">
          <img src="../src/Assets/svg/CreditCard.svg" alt="Parcele" />
          <p>
            <span className="highlight">Parecele</span> suas compras
          </p>
        </div>
      </section>

      {/* search bar */}
      <section className="barSection">
        <img src="../src/Assets/svg/marca.svg" alt="vtex" />
        <div className="input-container">
          <input
            className="input-field"
            type="text"
            placeholder="O que você está buscando?"
          />
          <img
            className="container-input_icon"
            src="../src/Assets/svg/MagnifyingGlass.svg"
          ></img>
        </div>
        <div className="icons">
          <img src="../src/Assets/svg/box.svg" alt="compras" />
          <img src="../src/Assets/svg/heart.svg" alt="favoritos" />
          <img src="../src/Assets/svg/UserCircle.svg" alt="perfil" />
          <img src="../src/Assets/svg/ShoppingCart.svg" alt="carrinho" />
        </div>
      </section>

      {/* nav bar */}
      <nav>
        <ul>
          <li>
            <a href="/">todas as categorias</a>
          </li>
          <li>
            <a href="/">supermercado</a>
          </li>
          <li>
            <a href="/">livros</a>
          </li>
          <li>
            <a href="/">moda</a>
          </li>
          <li>
            <a href="/">lançamentos</a>
          </li>
          <li>
            <a href="">
              <span className="highlight">ofertas do dia</span>
            </a>
          </li>
          <li>
            <img className="icon" src="../src/Assets/svg/crown.svg" alt=" " />
            <a href="/">assinatura</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
