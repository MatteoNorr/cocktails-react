import { useState, useEffect } from "react";
import Login from "./components/Login";
import ProductSection from "./components/ProductSection";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import ProductItemFull from "./components/ProductItemFull";
import Searchbar from "./components/Searchbar";
import "./App.css";

function App() {
  const [section, setSection] = useState("Home");
  const [category, setCategory] = useState([]);

  const render = () => {
    switch (section) {
      case "Home":
        return (
          <div>
            {category.length === 0 ? (
              <>
                <ProductList
                  name="Vodka"
                  setSection={() => setSection("Vodka")}
                />
                <ProductList name="Rum" setSection={() => setSection("Rum")} />
                <ProductList
                  name="Tequila"
                  setSection={() => setSection("Tequila")}
                />
              </>
            ) : (
              category.map((data, i) => (
                <ProductList
                  key={i}
                  name={data.name}
                  setSection={() => setSection(data.name)}
                  category={category}
                />
              ))
            )}
          </div>
        );
      case "Login":
        return <Login setSection={() => setSection("Home")} />;
      case "Vodka":
        return (
          <ProductItemFull name="Vodka" setSection={() => setSection("Home")} />
        );
      case "Rum":
        return (
          <ProductItemFull name="Rum" setSection={() => setSection("Home")} />
        );
      case "Tequila":
        return (
          <ProductItemFull
            name="Tequila"
            setSection={() => setSection("Home")}
          />
        );
      default:
        return <ProductSection section={section} />;
    }
  };

  return (
    <div>
      <Searchbar setSection={setSection} />
      <Filters setCategory={setCategory} />
      {render()}
    </div>
  );
}

export default App;
