import React from 'react';
import ProductCard from './ProductCard';
import ethCoffeeImage from './assets/ethcoffee.jpeg';
import './App.css';

const sampleProduct = {
  name: "Ethiopia Coffee",
  price: "$15.00",
  image: ethCoffeeImage,
  variants: [
    { name: "Yirgachefe", inStock: true },
    { name: "Sidamo", inStock: true },
    { name: "Harrar", inStock: false },
  ],
};

/**
 * The root component of the application.
 * 
 * It renders the main container that centers content vertically
 * and horizontally using CSS flexbox and includes a `ProductCard`
 * component displaying a sample coffee product with variants.
 * 
 * The product data includes the name, price, image, and variant stock status.
 *
 * @returns JSX.Element representing the main app layout and product card.
 */
export default function App() {
  return (
    <main className="main-container">
      <ProductCard product={sampleProduct} />
    </main>
  );
}
