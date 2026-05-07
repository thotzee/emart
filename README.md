# EMart - E-Commerce React Application

A modern, full-featured e-commerce web application built with **React**, **Redux**, and **React Bootstrap**. EMart provides a seamless shopping experience with product browsing, filtering, user authentication, and a fully functional shopping cart.

## 🌟 Features

### User Experience
- **Responsive Design** - Built with React Bootstrap for mobile-first, responsive UI
- **Product Browse** - Browse and filter products by category
- **Product Details** - View detailed information about individual products
- **Shopping Cart** - Add/remove products, adjust quantities with persistent state management
- **User Authentication** - Register and login functionality
- **Loading States** - Skeleton loading screens for better perceived performance
- **Navigation** - Smooth routing between pages using React Router v6

### Core Functionality
- **Real Product Data** - Fetches products from [FakeStore API](https://fakestoreapi.com/)
- **Redux State Management** - Centralized state for cart operations (add/remove items)
- **Product Filtering** - Filter products by category
- **Quantity Management** - Increment/decrement product quantities in cart
- **GitHub Pages Deployment** - Pre-configured for easy deployment

## 🛠 Tech Stack

- **Frontend Framework:** React 18.2.0
- **State Management:** Redux 4.2.0 + React-Redux 8.0.4
- **Routing:** React Router DOM 6.4.2
- **UI Framework:** React Bootstrap 2.5.0 + Bootstrap 5.2.2
- **Icons:** Font Awesome 4.7.0
- **Loading States:** React Loading Skeleton 3.1.0
- **Build Tool:** React Scripts 5.0.1
- **Deployment:** gh-pages 4.0.0

## 📁 Project Structure

```
emart/
├── public/              # Static assets
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/          # Images and static files
│   ├── component/       # React components
│   │   ├── Navbar2.jsx       # Main navigation bar
│   │   ├── Home2.jsx         # Home page with hero section
│   │   ├── Products2.jsx     # Products listing with filtering
│   │   ├── Product.jsx       # Individual product detail page
│   │   ├── Cart.jsx          # Shopping cart page
│   │   ├── Login.jsx         # User login form
│   │   ├── Register.jsx      # User registration form
│   │   └── Footer.jsx        # Application footer
│   ├── redux/           # Redux state management
│   │   ├── store.js           # Redux store configuration
│   │   ├── action/            # Action creators
│   │   └── reducer/
│   │       ├── HandleCart.js  # Cart reducer (add/remove items)
│   │       └── index.js       # Root reducer
│   ├── App.js           # Main app component with routes
│   ├── App.css          # Global styles
│   ├── index.js         # React entry point
│   └── index.css        # Global CSS
└── package.json         # Project dependencies and scripts
```

## 📦 Redux State Structure

### Cart Reducer (`HandleCart.js`)
Manages shopping cart state with actions:
- **ADDITEM** - Add product to cart or increment quantity if exists
- **DELITEM** - Remove product or decrement quantity

Cart item structure:
```javascript
{
  id: number,
  title: string,
  price: number,
  category: string,
  qty: number,
  // ... other product properties
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/thotzee/emart.git
   cd emart
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app opens at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### Development
```bash
npm start
```
Runs the app in development mode with hot-reload and error logging.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

### Deployment
```bash
npm run predeploy  # Builds the app
npm run deploy     # Deploys to GitHub Pages
```

### Testing
```bash
npm test
```
Launches the test runner in interactive watch mode.

## 🌐 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/emart` | Home2 | Home page with hero section and featured products |
| `/products` | Products2 | Full products listing with category filtering |
| `/products/:id` | Product | Individual product details page |
| `/cart` | Cart | Shopping cart with items and total |
| `/login` | Login | User login form |
| `/register` | Register | User registration form |

## 🎯 Key Components

### Navbar2
Main navigation bar with links to all pages and cart icon showing item count.

### Home2
Hero banner showcasing seasonal arrivals with call-to-action and featured products grid.

### Products2
Products grid with:
- Real-time product fetching from FakeStore API
- Category-based filtering
- Loading skeleton states
- Product cards with price and quick actions

### Cart
Shopping cart display with:
- List of cart items with quantities
- Add/remove functionality
- Total price calculation
- Redux-powered state management

### Login/Register
User authentication forms for account creation and login.

## 🔄 Redux Workflow

1. **Add to Cart Flow:**
   - User clicks "Add to Cart" on a product
   - `ADDITEM` action is dispatched with product data
   - HandleCart reducer checks if product exists
   - If exists: increments quantity
   - If new: adds product with qty: 1
   - Cart state updates in real-time

2. **Remove from Cart Flow:**
   - User clicks remove/minus on cart item
   - `DELITEM` action is dispatched
   - If qty === 1: item is removed from cart
   - Otherwise: quantity is decremented

## 🎨 Styling

- **Bootstrap Classes** - For responsive grid, buttons, cards, and utilities
- **Font Awesome** - For icons throughout the app
- **Custom CSS** - App.css for project-specific styles
- **React Bootstrap Components** - Pre-styled components like Card, Button, Badge

## 📡 API Integration

EMart fetches product data from the **FakeStore API**:
- **Endpoint:** `https://fakestoreapi.com/products`
- **Response:** Array of product objects with id, title, price, category, image, etc.
- **No Authentication:** Public API, no API key required

## 🚀 Deployment

The project is configured for deployment to **GitHub Pages**:

1. Update `homepage` in `package.json` (already set to: `https://thotzee.github.io/emart`)
2. Run: `npm run deploy`
3. Your app is live at: `https://thotzee.github.io/emart`

## 📝 Future Enhancements

- User authentication backend integration
- Checkout and payment processing
- Order history and tracking
- Product reviews and ratings
- Wishlist functionality
- Search functionality
- Admin dashboard for product management
- Database integration (MongoDB/Firebase)

## 🐛 Troubleshooting

**Products not loading:**
- Check internet connection
- Verify FakeStore API is accessible
- Check browser console for errors

**Cart not persisting:**
- Cart state is in-memory (Redux store)
- Implement localStorage to persist across sessions
- Connect Redux to backend database

**Styling issues:**
- Ensure Bootstrap CSS is loaded
- Clear browser cache and rebuild
- Check for CSS conflicts

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Thotzee**
- GitHub: [@thotzee](https://github.com/thotzee)
- Project: [EMart Repository](https://github.com/thotzee/emart)

---

**Happy Shopping! 🛍️**
