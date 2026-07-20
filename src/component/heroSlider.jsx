import "../style/HeroSlider.css";

function HeroSlider() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Up to <span>70% OFF</span>
        </h1>

        <h2>On Top Brands</h2>

        <p>
          Great deals on Electronics, Fashion,
          Home & More.
        </p>

        <button>Shop Now</button>

      </div>

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
          alt=""
        />

      </div>

    </section>
  );
}

export default HeroSlider;