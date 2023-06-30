import { useState, useEffect } from "react";
import { GET } from "../../utils/https.js";
import "./index.css";

const ProductSection = ({ section }) => {
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {

    GET("?s=" + section).then((data) => setCocktail(data.drinks[0]));

  }, []);

  return (
    <div className="ProductSection">
      <img
        className="ProductSection__img"
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
      />
      <div className="ProductSection__head__title">
        <h1>{cocktail.strDrink}</h1>
      </div>
      <div className="ProductSection__info">
        <p>{cocktail.strAlcoholic}</p>
        <p>{cocktail.strCategory}</p>
        <p>{cocktail.strGlass}</p>
      </div>
      <div className="ProductSection__instruction">
        <p>{cocktail.strInstructions}</p>
      </div>
    </div>
  );
};

export default ProductSection;
