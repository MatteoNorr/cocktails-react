import { useState, useEffect } from "react";
import { GET } from "../../utils/https";
import ProductItem from "../ProductItem";
import "./index.css";

const ProductList = ({ name, setSection }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    GET(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
    ).then((data) => setList(data.drinks));
  }, []);

  return (
    <div className="ProductList">
      <div className="ProductSection__title">
        <h1>{name}</h1>
      </div>
      <div className="ProductList__container">
        {list.map((data) => (
          <div
            className="ProductItem__container"
            key={data.idDrink}
            onClick={setSection}
          >
            <ProductItem data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
