import { useState, useEffect } from "react";
import { GET } from "../../utils/https";
import ProductItem from "../ProductItem";
import "./index.css";

const ProductList = ({ name, setSection }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + name)
      .then((res) => res.json())
      .then((data) => setList(data.drinks));
  }, []);

  return (
    <>
      <h1 className="ProductSection__title">{name}</h1>
      <div className="ProductList">
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
    </>
  );
};

export default ProductList;
