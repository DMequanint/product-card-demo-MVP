import React, { useState } from 'react';
import './ProductCard.css';

/**
 * Represents a product variant with a name and stock availability.
 */
type Variant = {
  /** Name of the product variant (e.g., size or style) */
  name: string;
  /** Whether this variant is currently in stock */
  inStock: boolean;
};

/**
 * Represents a product with details and its available variants.
 */
type Product = {
  /** Product name */
  name: string;
  /** Product price displayed as a string (e.g., "$25.00") */
  price: string;
  /** URL or imported path for the product image */
  image: string;
  /** Array of available product variants */
  variants: Variant[];
};

/**
 * Props for the ProductCard component.
 */
type ProductCardProps = {
  /** The product object containing all necessary display data */
  product: Product;
};

/**
 * A React component that renders a product card displaying product image,
 * name, price, variants dropdown (if multiple variants), and an Add to Cart button.
 *
 * It manages the state of the currently selected variant and disables 
 * selection or purchasing options if the variant or all variants are out of stock.
 *
 * @param {ProductCardProps} props - The props object containing the product to display.
 * @returns JSX element representing the product card UI.
 */
export default function ProductCard({ product }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(
    product.variants.find(v => v.inStock) || product.variants[0]
  );

  const allOutOfStock = product.variants.every(v => !v.inStock);
  const isOutOfStock = !selectedVariant.inStock;

  return (
    <div
      className="product-card"
      role="group"
      aria-label={`${product.name} product card`}
    >
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        loading="lazy"
      />
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">{product.price}</p>

        {product.variants.length > 1 ? (
          <select
            className="variant-select"
            value={selectedVariant.name}
            onChange={e =>
              setSelectedVariant(
                product.variants.find(v => v.name === e.target.value)!
              )
            }
            aria-label="Select product variant"
          >
            {product.variants.map(variant => (
              <option
                key={variant.name}
                value={variant.name}
                disabled={!variant.inStock}
              >
                {variant.name} {variant.inStock ? '' : '(Out of Stock)'}
              </option>
            ))}
          </select>
        ) : (
          <p className="variant-label">Variant: {product.variants[0].name}</p>
        )}

        <button
          className="add-to-cart-btn"
          disabled={isOutOfStock || allOutOfStock}
          aria-disabled={isOutOfStock || allOutOfStock}
          aria-live="polite"
        >
          {isOutOfStock || allOutOfStock ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
