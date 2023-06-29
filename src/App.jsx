import { useState, useEffect } from "react";
import ProductSection from "./components/ProductSection";
import ProductList from "./components/ProductList";
import "./App.css";
import ProductItemFull from "./components/ProductItemFull";

function App() {
  const [section, setSection] = useState("");

  {
    switch (section) {
      case "":
        return (
          <>
            <ProductSection />
            <ProductList name="Vodka" setSection={() => setSection("Vodka")} />
            <ProductList name="Rum" setSection={() => setSection("Rum")} />
            <ProductList
              name="Tequila"
              setSection={() => setSection("Tequila")}
            />
          </>
        );
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
