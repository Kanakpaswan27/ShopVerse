import "../style/Categories.css";

const categories = [
  { name: "Mobiles", image: "https://picsum.photos/120?1" },
  { name: "Laptops", image: "https://picsum.photos/120?2" },
  { name: "Fashion", image: "https://picsum.photos/120?3" },
  { name: "Footwear", image: "https://picsum.photos/120?4" },
  { name: "Beauty", image: "https://picsum.photos/120?5" },
  { name: "Home", image: "https://picsum.photos/120?6" },
  { name: "Furniture", image: "https://picsum.photos/120?7" },
  { name: "Sports", image: "https://picsum.photos/120?8" },
  { name: "Books", image: "https://picsum.photos/120?9" },
  { name: "Toys", image: "https://picsum.photos/120?10" },
  { name: "Grocery", image: "https://picsum.photos/120?11" },
  { name: "Watches", image: "https://picsum.photos/120?12" },
];

function Category() {
  return (
    <section className="category-section">
      <div className="category-list">
        {categories.map((item, index) => (
          <div className="category-item" key={index}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;