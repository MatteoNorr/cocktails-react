import { useState } from "react";
import "./index.css";

const Filters = ({ setCategory }) => {
  const [vodka, setVodka] = useState(true);
  const [rum, setRum] = useState(true);
  const [tequila, setTequila] = useState(true);

  const renderFilterDrink = () => {
    const filterDrinks = drinks.filter((drink) => drink.isChecked);
    setCategory(filterDrinks);
  };

  const onCkickVodka = () => {
    setVodka(!vodka);
  };
  const onCkickRum = () => {
    setRum(!rum);
  };
  const onCkickTequila = () => {
    setTequila(!tequila);
  };

  const drinks = [
    { name: "Vodka", isChecked: vodka },
    { name: "Rum", isChecked: rum },
    { name: "Tequila", isChecked: tequila },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    renderFilterDrink();
  };

  return (
    <form className="Filters" onSubmit={onSubmit}>
      <div className="vodka">
        <label htmlFor="vodka">Vodka</label>
        <input
          type="checkbox"
          name="vodka"
          checked={vodka}
          onChange={onCkickVodka}
        />
      </div>
      <div className="rum">
        <label htmlFor="rum">Rum</label>
        <input type="checkbox" name="rum" checked={rum} onChange={onCkickRum} />
      </div>

      <div className="tequila">
        <label htmlFor="tequila">Tequila</label>
        <input
          type="checkbox"
          name="tequila"
          checked={tequila}
          onChange={onCkickTequila}
        />
      </div>

      <input type="submit" value="Apply" />
    </form>
  );
};
export default Filters;
