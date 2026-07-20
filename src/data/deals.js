import iphone from "../assets/deals/iphone-deal.png";
import laptop from "../assets/deals/laptop-deal.png";
import headphone from "../assets/deals/headphone-deal.png";
import watch from "../assets/deals/watch-deal.png";
import shoes from "../assets/deals/shoes-deal.png";
import bag from "../assets/deals/bag-deal.png";

const deals = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    image: iphone,
    price: 99999,
    oldPrice: 129999,
    discount: "23% OFF",
  },
  {
    id: 2,
    name: "MacBook Air M4",
    image: laptop,
    price: 89999,
    oldPrice: 109999,
    discount: "18% OFF",
  },
  {
    id: 3,
    name: "Sony Headphones",
    image: headphone,
    price: 19999,
    oldPrice: 29999,
    discount: "33% OFF",
  },
  {
    id: 4,
    name: "Apple Watch",
    image: watch,
    price: 34999,
    oldPrice: 44999,
    discount: "22% OFF",
  },
  {
    id: 5,
    name: "Nike Air Max",
    image: shoes,
    price: 5999,
    oldPrice: 8999,
    discount: "34% OFF",
  },
  {
    id: 6,
    name: "Leather Bag",
    image: bag,
    price: 2499,
    oldPrice: 3999,
    discount: "38% OFF",
  },
];

export default deals;