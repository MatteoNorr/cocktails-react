import { useState, useEffect } from "react";
import "./index.css";

const ProductItemFull = ({ name, setSection }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
      .then((res) => res.json())
      .then((data) => setList(data.drinks));
  }, []);

  return (
    <>
      <div className="ProductItemFull__heading">
        <h1 className="ProductItemFull__title">{name}</h1>
        <button className="ProductItemFull__close-btn" onClick={setSection}>
          X
        </button>
      </div>
      {list.map((data) => (
        <div className="ProductItemFull">
          <img className="ProductItemFull__img" src={data.strDrinkThumb} />
          <p className="ProductItemFull__title-prod">{data.strDrink}</p>
        </div>
      ))}
    </>
  );
};

export default ProductItemFull;
