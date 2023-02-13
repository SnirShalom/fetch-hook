import { useFetch } from "./useFetch";

export const Select = ({ selectHandler }) => {
  const categories = useFetch("https://fakestoreapi.com/products/categories");

  return (
    <select
      name="categoriesSelector"
      id="categoriesSelector"
      onChange={(event) => selectHandler(event.target.value)}
    >
      <option value={"all"}>All categories</option>

      {categories.map((category) => (
        <option value={category}>{category}</option>
      ))}
    </select>
  );
};
