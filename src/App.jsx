import { useState, useEffect } from "react";
import ProductSection from "./components/ProductSection";
import ProductList from "./components/ProductList";
import ProductItemFull from "./components/ProductItemFull";
import Searchbar from "./components/Searchbar";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [section, setSection] = useState("Home");

  {
    switch (section) {
      case "Home":
        return (
          <>
            <Searchbar setSection={() => setSection("singleCocktail")} />
            <ProductSection section={section} />
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
    }
  }
}

export default App;
