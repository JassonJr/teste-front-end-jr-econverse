import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <ul>
          <li>Compra 100% segura</li>
          <li>Frete grátis acima de R$200</li>
          <li>Parece suas compras</li>
        </ul>
      </div>
      <div>
        <img src="../src/Assets/svg/marca.svg" alt="vtex" />
        <input type="text" />
        <img src="../src/Assets/svg/box.svg" alt="compras" />
        <img src="../src/Assets/svg/heart.svg" alt="favoritos" />
        <img src="../src/Assets/svg/UserCircle.svg" alt="perfil" />
        <img src="../src/Assets/svg/ShoppingCart.svg" alt="carrinho" />
      </div>
      <nav>
        <ul>
          <li>todas as categorias</li>
          <li>supermercado</li>
          <li>livros</li>
          <li>moda</li>
          <li>lançamentos</li>
          <li>ofertas do dia</li>
          <li>
            <img src="../src/Assets/svg/crown.svg" alt=" " />
            assinatura
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
