import ProductCard from "./ProductCard";
import products from "../data/products";
import "../style/Products.css";

function Products() {
  return (
    <section className="products-section">

      <h2 className="section-title">
        Shop By Category
      </h2>

      <div className="products-grid">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
}

export default Products;