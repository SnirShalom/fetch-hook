import { useEffect, useState } from "react";

export function useFetch(url) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((responseData) => setProducts(responseData));
  }, [url]);

  return products;
}
