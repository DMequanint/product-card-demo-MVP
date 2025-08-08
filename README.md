The layout uses a mobile-first design approach, with a centered product card contained within a flexbox-based <main> element that centers content both vertically and horizontally across all screen sizes. Responsiveness is achieved by defining base styles optimized for small screens (stacked, single-column layout) and enhancing the layout on wider viewports via media queries to switch to a two-column horizontal layout, ensuring a seamless and user-friendly experience across devices.

Product Card Demo:

A simple, mobile-first React demo that showcases a visually pleasing, responsive product card. The card displays product details, an image, selectable variants (with in-stock/out-of-stock info), and an "Add to Cart" button.

Layout Approach:
- Uses mobile-first CSS: on small screens, product information and controls are stacked vertically for easy reading and use.
- Content is centered with a flexbox <main> container. On larger screens, a media query displays the product card in a two-column horizontal layout.

Features:
- Mobile-first, responsive, and accessible design
- Product variant selection with stock awareness
- "Add to Cart" button is disabled if selected or all variants are out of stock
- Handles local image asset imports with Vite's bundler

Getting Started:
1. Clone the repository:
    git clone https://github.com/DMequanint/product-card-demo-MVP.git
    cd product-card-demo
2. Install dependencies:
    npm install
    # or
    yarn
3. Run the development server (Vite’s default is port 5173):
    npm run dev
    # or
    yarn dev
4. File Structure
   - src/App.tsx – App entry, centers the product card
   - src/ProductCard.tsx – Product card UI and logic (variants, add to cart)
   - src/ProductCard.css – Responsive, mobile-first styles
   - src/assets/ – Product images and static assets.
