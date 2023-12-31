import { useState, useEffect } from "react";

import "./index.css";

const Searchbar = ({ setSection }) => {
  const [input, setInput] = useState("");

  const onChangeSearch = (e) => {
    setInput(e.target.value);
  };

  const searchData = (e) => {
    e.preventDefault();
    setSection(input);
  };

  return (
    <div>
      <h1 className="Searchbar-title">Cocktails</h1>
      <form className="Searchbar" onSubmit={searchData}>
        <input
          className="Searchbar__input"
          placeholder="Search a cocktail..."
          type="text"
          value={input}
          onChange={onChangeSearch}
        />
      </form>
    </div>
  );
};

export default Searchbar;
