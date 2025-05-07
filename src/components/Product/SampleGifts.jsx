import React from 'react';
import GiftGrid from './GiftGrid.jsx';

const sampleGifts = [
  {
    id: 1,
    name: "Valentine Rose Box",
    description: "Elegant rose box with scented candles and chocolates.",
    price: 49.99,
    image: "/images/rose-box.jpg",
    label: "New"
  },
  {
    id: 2,
    name: "Birthday Surprise Pack",
    description: "Colorful gift box with balloons and party favors.",
    price: 39.99,
    image: "/images/birthday-pack.jpg",
    label: "Sale"
  },
  {
    id: 3,
    name: "Luxury Chocolate Hamper",
    description: "Premium selection of chocolates and sweets.",
    price: 59.99,
    image: "/images/chocolate-hamper.jpg"
  },
  {
    id: 4,
    name: "Luxury Chocolate Hamper",
    description: "Premium selection of chocolates and sweets.",
    price: 59.99,
    image: "/images/chocolate-hamper.jpg"
  },
  {
    id: 5,
    name: "Luxury Chocolate Hamper",
    description: "Premium selection of chocolates and sweets.",
    price: 59.99,
    image: "/images/chocolate-hamper.jpg"
  }
];

const GiftShopPage = () => {
  const handleAddToCart = (id) => {
    console.log(`Gift ${id} added to cart`);
  };

  return <GiftGrid gifts={sampleGifts} onAddToCart={handleAddToCart} />;
};

export default GiftShopPage;
