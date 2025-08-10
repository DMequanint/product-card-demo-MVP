Overview of Layout Approach:
- The layout uses a mobile-first design approach, with a centered product card contained within a flexbox-based <main> element that centers content both vertically and horizontally across all screen sizes.
- Responsiveness is achieved by defining base styles optimized for small screens (stacked, single-column layout).

Product Card Demo:

A minimum viable product, simple, mobile-first React demo that showcases a visually pleasing, responsive product card.
Features:
- Mobile-first, responsive, and accessible design
- Product variant selection with stock awareness
- "Add to Cart" button is disabled if selected or all variants are out of stock
- Handles local image asset imports with Vite's bundler

Getting Started:
1. Clone the repository:
   - git clone https://github.com/DMequanint/product-card-demo-MVP.git
   - cd product-card-demo
3. Install dependencies:
    - npm install
4. Run the development server (Vite’s default is port 5173):
    - npm run dev
5. File Structure
   - src/App.tsx – App entry, centers the product card
   - src/ProductCard.tsx – Product card UI and logic (variants, add to cart)
   - src/ProductCard.css – Responsive, mobile-first styles
   - src/assets/ – Product images and static assets.
