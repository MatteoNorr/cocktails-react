import { useState, useEffect } from "react";
import ProductSection from "./components/ProductSection";
import ProductList from "./components/ProductList";
import ProductItemFull from "./components/ProductItemFull";
import Searchbar from "./components/Searchbar";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [section, setSection] = useState("Home");

  const render = () => {
    switch (section) {
      case "Home":
        return (
          <>
            <ProductList name="Vodka" setSection={() => setSection("Vodka")} />
            <ProductList name="Rum" setSection={() => setSection("Rum")} />
            <ProductList
              name="Tequila"
              setSection={() => setSection("Tequila")}
            />
          </>
        );
      case "Login":
        return <Login setSection={() => setSection("Home")} />;
      case "Vodka":
        return (
          <ProductItemFull name="Vodka" setSection={() => setSection("")} />
        );
      case "Rum":
        return <ProductItemFull name="Rum" setSection={() => setSection("")} />;
      case "Tequila":
        return (
          <ProductItemFull name="Tequila" setSection={() => setSection("")} />
        );
      default:
        return <ProductSection section={section} />;
    }
  };

  return (
    <div>
      <Searchbar setSection={setSection} />
      {render()}
    </div>
  );
}

export default App;
