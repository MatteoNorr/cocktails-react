import { useState, useEffect } from "react";
import { GET } from "../../utils/https";
import "./index.css";

const ProductItemFull = ({ name, setSection }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    GET(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
    ).then((data) => setList(data.drinks));
  }, []);

  return (
    <>
      <h1 className="ProductItemFull__title">{name}</h1>
      <button className="ProductItemFull__close-btn" onClick={setSection}>
        X
      </button>
      {list.map((data) => (
        <div className="ProductItemFull">
          <img className="ProductItemFull__img" src={data.strDrinkThumb} />
          <p className="ProductItemFull__title">{data.strDrink}</p>
        </div>
      ))}
    </>
  );
};

export default ProductItemFull;
