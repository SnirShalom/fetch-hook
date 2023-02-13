export const Product = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.title}</h2>
      <img src={product.image} alt={" "} style={{ width: "100px" }} />
      <p>{product.description}</p>
      <span>Price {product.price}</span>
      <p>
        ⭐️{product.rating.rate} 👤{product.rating.count}
      </p>
    </div>
  );
};
