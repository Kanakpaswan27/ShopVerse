import "../style/Navbar.css";
function Navbar() {
  return (
    <>
      <div className="topbar">
        🔥 Summer Sale Up To 70% OFF
      </div>

      <nav className="navbar">

        <div className="logo">
          ShopVerse 🛒
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Search products, brands and more..."
          />
          <button>🔍</button>
        </div>

        <div className="menu">
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">Wishlist</a>
          <a href="/">Cart</a>
        </div>

      </nav>

      <div className="category-bar">
        <a>Fashion</a>
        <a>Electronics</a>
        <a>Beauty</a>
        <a>Home</a>
        <a>Sports</a>
        <a>Books</a>
        <a>Mobiles</a>
        <a>Gaming</a>
      </div>
    </>
  );
}

export default Navbar;