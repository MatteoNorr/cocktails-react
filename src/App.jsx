import { useState, useEffect } from "react";
import ProductSection from "./components/ProductSection";
import ProductList from "./components/ProductList";
import "./App.css";

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
        return <ProductList name="Vodka" />;
      case "Rum":
        return <ProductList name="Rum" />;
      case "Tequila":
        return <ProductList name="Tequila" />;
    }
  }
}

export default App;
