import "./App.css";
import { useState } from "react";
import { useFetch } from "./useFetch";
import { Product } from "./Product";
import { Select } from "./Select";

function App() {
  const [url, setUrl] = useState("https://fakestoreapi.com/products/");

  const products = useFetch(url);

  const selectHandler = (category) => {
    category === "all"
      ? setUrl("https://fakestoreapi.com/products/")
      : setUrl(`https://fakestoreapi.com/products/category/${category}`);
  };

  return (
    <div className="App">
      <Select selectHandler={selectHandler} />

      {products.length === 0 ? (
        <h1>loading...</h1>
      ) : (
        products.map((product) => <Product product={product} />)
      )}
    </div>
  );
}

export default App;
