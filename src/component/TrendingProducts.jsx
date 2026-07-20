import trendingProducts from "../data/trendingProducts";
import "../style/TrendingProducts.css";
import { FaHeart } from "react-icons/fa";

function TrendingProducts() {
  return (
    <section className="trending-section">

      <div className="trending-header">

        <h2>⭐ Trending Products</h2>

        <button>View All</button>

      </div>

      <div className="trending-grid">

        {trendingProducts.map((item) => (

          <div className="trending-card" key={item.id}>

            <span className="badge">
              {item.badge}
            </span>
            <div className="wishlist">
  <FaHeart />
</div>

            <div className="trending-image">

              <img
                src={item.image}
                alt={item.name}
              />

            </div>

            <div className="rating">

              ⭐ {item.rating}

            </div>

            <h3>{item.name}</h3>

            <div className="price">

              <span className="new-price">
                ₹{item.price.toLocaleString()}
              </span>

              <span className="old-price">
                ₹{item.oldPrice.toLocaleString()}
              </span>

            </div>

            <button className="cart-btn">

              Add to Cart

            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default TrendingProducts;