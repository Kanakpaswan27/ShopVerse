import Navbar from "../component/Navbar";
import HeroSlider from "../component/heroSlider";
import Deals from "../component/Deals";
import Features from "../component/Features";
import Category from "../component/Category";
import Products from "../component/Products";
import Footer from "../component/Footer";
import FeaturedSlider from "../component/FeaturedSlider";
import TrendingProducts from "../component/TrendingProducts";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Deals />
      <TrendingProducts />
      <Category />
      <FeaturedSlider />
      <Products />
      <Features />
      <Footer />
    </>
  );
}

export default Home;
