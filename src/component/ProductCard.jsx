import "../style/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-img">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">

        <h3>{product.name}</h3>

        <p className="offer">
          {product.offer}
        </p>

        <button className="shop-btn">
          Shop Now →
        </button>

      </div>

    </div>
  );
}

export default ProductCard;