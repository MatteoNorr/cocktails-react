import { useState, useEffect } from "react";
import ProductItem from "../ProductItem";
import "./index.css";

const ProductList = ({ name, setSection, category }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + name)
      .then((res) => res.json())
      .then((data) => setList(data.drinks));
  }, [category]);

  return (
    <>
      <h1 className="ProductSection__title">{name}</h1>
      <div className="ProductList">
        <div className="ProductList__container">
          {list.map((data, i) => (
            <div
              className="ProductItem__container"
              key={i}
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
