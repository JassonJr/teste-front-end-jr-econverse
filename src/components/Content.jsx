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
      });
  }, []);

  const marca = "../src/Assets/svg/marca.svg";
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

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [selectedButtonIndex, setSelectedButtonIndex] = React.useState(null);

  const handleButtonClick = (indexButton) => {
    setSelectedButtonIndex(indexButton);
    console.log(indexButton);
  };

  return (
    <section className="content-main">
      {modalIsOpen && selectedButtonIndex !== null && (
        <div className="modal">
          <div className="modal-content">
            <img
              src={updatedPrice[selectedButtonIndex].photo}
              alt={updatedPrice[selectedButtonIndex].name}
            />
            <div className="modal-infos">
              <h1 className="modal-title">
                {updatedPrice[selectedButtonIndex].descriptionShort}
              </h1>
              <p className="modal-price">
                R$ {updatedPrice[selectedButtonIndex].price}
              </p>
              <p className="modal-description">
                {updatedPrice[selectedButtonIndex].descriptionShort}
              </p>
              <a className="modal-see-more" href="/">
                Veja mais detalhes do produto {">"}{" "}
              </a>
              <button
                className="modal-button"
                onClick={() => setModalIsOpen(false)}
              ></button>
            </div>
          </div>
        </div>
      )}
      {/* parte 1 */}
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
          {updatedPrice.slice(0, 4).map((product, index) => (
            <div key={index} className="grid-3 content-card">
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
              <button
                onClick={() => {
                  setModalIsOpen(true);
                  handleButtonClick(index);
                }}
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="content-partners">
        <div className="partner-card">
          <div className="partner-info shadow">
            <h1 className="partner-title">Parceiros</h1>
            <p className="partner-text">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <button className="partner-button">confira</button>
          </div>
        </div>
        <div className="partner-card">
          <div className="partner-info shadow">
            <h1 className="partner-title">Parceiros</h1>
            <p className="partner-text">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <button className="partner-button">confira</button>
          </div>
        </div>
      </div>
      {/* seção 2 */}
      <div className="sec-divider">
        <p className="highlight">Produtos relacionados</p>
      </div>
      <span className="see-all">Ver todos</span>
      <div className="content-products">
        <div className="card-container">
          {updatedPrice.slice(0, 4).map((product, index) => (
            <div key={index} className="grid-3 content-card">
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
              <button
                onClick={() => {
                  setModalIsOpen(true);
                  handleButtonClick(index);
                }}
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="content-partners">
        <div className="partner-card">
          <div className="partner-info shadow">
            <h1 className="partner-title">Parceiros</h1>
            <p className="partner-text">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <button className="partner-button">confira</button>
          </div>
        </div>
        <div className="partner-card">
          <div className="partner-info shadow">
            <h1 className="partner-title">Parceiros</h1>
            <p className="partner-text">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <button className="partner-button">confira</button>
          </div>
        </div>
      </div>
      {/* seção 3 */}
      <div className="content-brands">
        <h1 className="brands-title highlight">Navegue por marcas</h1>
        <ul className="brands-list">
          {(() => {
            const items = [];
            for (let i = 0; i < 5; i++) {
              items.push(
                <li className="brands-list-item" key={i}>
                  <img src="./src/Assets/svg/marca.svg" alt="vtex" />
                </li>
              );
            }
            return items;
          })()}
        </ul>
      </div>
      <div className="sec-divider">
        <p className="highlight">Produtos relacionados</p>
      </div>
      <span className="see-all">Ver todos</span>
      <div className="content-products">
        <div className="card-container">
          {updatedPrice.slice(0, 4).map((product, index) => (
            <div key={index} className="grid-3 content-card">
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
              <button
                onClick={() => {
                  setModalIsOpen(true);
                  handleButtonClick(index);
                }}
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
