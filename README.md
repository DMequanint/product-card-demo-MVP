The layout uses a mobile-first design approach, with a centered product card contained within a flexbox-based <main> element that centers content both vertically and horizontally across all screen sizes. Responsiveness is achieved by defining base styles optimized for small screens (stacked, single-column layout) and enhancing the layout on wider viewports via media queries to switch to a two-column horizontal layout, ensuring a seamless and user-friendly experience across devices.
Product Card Demo
A simple, mobile-first React demo that showcases a visually pleasing, responsive product card. The card displays product details, an image, selectable variants (with in-stock/out-of-stock info), and an "Add to Cart" button.

Layout Approach
The app uses a mobile-first layout, centering a product card within a flexbox <main> container.

The product card adapts responsively:

On small screens, details are vertically stacked and easy to read/tap.

On larger screens, a media query reflows the card to a horizontal two-column layout for better use of space.

Features
Mobile-first, responsive design with CSS media queries.

Accessibility features (button disabling, ARIA labels).

"Out of Stock" status reflected in both variant selector and main button.

Local image asset support.

Getting Started
Clone the repository:

bash
git clone https://github.com/DMequanint/product-card-demo.git
cd product-card-demo
Install dependencies:

bash
npm install
# or
yarn install
Run the app locally:

bash
npm start
# or
yarn start
Open http://localhost:3000 to view it in your browser.

File Structure
src/App.tsx – App root, centers the card.

src/ProductCard.tsx – Product card component with variant selector and button.

src/ProductCard.css – Card styling, mobile-first, with desktop enhancements.

src/assets/ethcoffee.jpeg – Example product image.

Customization
Replace the sample product in App.tsx with your own data or expand the list as needed.

Edit CSS files for further visual tweaks or theme enhancements.

Deployment
To deploy (e.g., with GitHub Pages):

Build the app:

bash
npm run build
Serve the build/ directory or follow GitHub Pages instructions for React projects.
