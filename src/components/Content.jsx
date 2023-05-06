import React from "react";
import Products from "./Products";

const Content = () => {
  React.useEffect(() => {
    fetch(
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    )
      .then((response) => response.json())
      .then((json) => {
        const products = json.products;
        setProducts(products);
        console.log(json);
      });
  }, []);

  const [products, setProducts] = React.useState([]);
  const updatedPrice = products.map((product) => {
    const oldPrice = product.price + 2000;
    const halfPrice = product.price / 2;
    return {
      ...product,
      oldPrice,
      halfPrice,
    };
  });

  return (
    <section className="content-main">
      <div className="sec-divider">
        <p className="highlight">Produtos relacionados</p>
      </div>
      <nav className="content-nav">
        <ul className="content-related">
          <li className="cel">
            <a className="highlight" href="/">
              <span>celular</span>
            </a>
          </li>
          <li>
            <a href="/">acessórios</a>
          </li>
          <li>
            <a href="/">tablets</a>
          </li>
          <li>
            <a href="/">notebooks</a>
          </li>
          <li>
            <a href="/">tvs</a>
          </li>
          <li>
            <a href="/">ver todos</a>
          </li>
        </ul>
      </nav>
      <div className="content-products">
        <div className="card-container">
          {updatedPrice.slice(0, 4).map((product) => (
            <div key={product.id} className="grid-3 content-card">
              <img src={product.photo} alt={product.name} />
              <p className="product-description">{product.descriptionShort}</p>
              <p className="old-price">R$ {product.oldPrice}</p>
              <p className="new-price">R$ {product.price}</p>
              <p className="installments">
                ou 2x de R$ {product.halfPrice} sem juros
              </p>
              <p>
                <span className="highlight frt">Frete grátis</span>
              </p>
              <button>Comprar</button>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="content-partners">
        <div className="container-partners">
          <div className="grid-5 partner-card"></div>
          <div className="grid-5 partner-card"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Content;
