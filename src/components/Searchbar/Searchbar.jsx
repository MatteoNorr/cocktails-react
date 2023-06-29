import { useState, useEffect } from "react";
import { GET } from "../../utils/https";
import SingleProd from "../SingleProd";
import "./index.css";

const Searchbar = ({ setSection }) => {
  const [input, setInput] = useState("");
  const [cocktail, setCocktail] = useState([]);
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    GET(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    ).then((data) => setCocktail(data.drinks));
  }, []);

  const onChangeSearch = (e) => {
    setInput(e.target.value);
  };

  const searchData = (e) => {
    e.preventDefault();
    const filterCocktail = cocktail.filter((data) =>
      data.strDrink.toLowerCase().includes(input)
    );

    setCocktail(filterCocktail[0]);
    setSection();
    filterCocktail && setBoolean(true);
  };

  return (
    <div>
      <form className="Searchbar" onSubmit={searchData}>
        <input
          className="Searchbar__input"
          type="text"
          input={input}
          onChange={(e) => onChangeSearch(e)}
        />
        <input
          className="Searchbar__submit"
          type="submit"
          value="Submit"
          input={input}
        />
      </form>
      {boolean && <SingleProd data={cocktail} />}
    </div>
  );
};

export default Searchbar;
