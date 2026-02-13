 import "./ProductCard.css";

function ProductCard({ title, price, inStock }) {
  return (
    <div className="card">
      <div className="card-image">
        <div className="image-placeholder"></div>
      </div>

      <h2>{title}</h2>
      <p className="price">${price}</p>

      <span className={inStock ? "stock in" : "stock out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

export default ProductCard;
