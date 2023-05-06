import React from "react";

const Products = () => {
  const [products, setProducts] = React.useState([]);

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
  return <div></div>;
};

export default Products;
