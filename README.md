# 👟 Nike E-Commerce Website

A modern and responsive Nike-inspired e-commerce website built with **React.js**, **Redux Toolkit**, and **Tailwind CSS**.

The project provides a complete shopping experience where users can browse products, add items to the cart, manage quantities, and keep their cart data saved using Local Storage.

---

## 🚀 Features

### 🏠 Home Page

- Modern Nike hero section
- Product showcase
- Promotional videos
- Social media links
- Responsive design for all devices

---

### 👟 Products

The website contains different product sections:

- Popular Sales
- Top Rated Sales
- Featured Products
- Nike Stories

---

### 🛒 Shopping Cart

A complete cart management system using **Redux Toolkit**.

Users can:

- Add products to cart
- Increase product quantity
- Decrease product quantity
- Remove products
- Clear the cart
- View total items
- View total price

Cart data is automatically saved in the browser using:

```
Local Storage
```

so users do not lose their cart after refreshing the page.

---

### 🔔 Notifications

The project uses **React Hot Toast** for displaying notifications.

Examples:

- Product added successfully
- Quantity increased
- Quantity decreased
- Product removed
- Cart cleared

---

## 🛠 Technologies Used

### Frontend

- React.js
- JavaScript (ES6+)
- Redux Toolkit
- React Redux
- Tailwind CSS
- Vite

---

# 📂 Project Structure

```
src
│
├── app
│   ├── CartSlice.js
│   └── store.js
│
├── assets
│   ├── images
│   └── videos
│
├── components
│   │
│   ├── Home.jsx
│   ├── Cart.jsx
│   ├── Sales.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── FlexContent.jsx
│   ├── Stories.jsx
│   │
│   ├── cart
│   │   ├── CartItem.jsx
│   │   ├── CartCount.jsx
│   │   └── CartEmpty.jsx
│   │
│   └── utils
│       ├── Item.jsx
│       ├── Title.jsx
│       ├── Clips.jsx
│       └── SocialLink.jsx
│
├── data
│   └── data.js
│
├── App.jsx
└── main.jsx
```

---

# ⚙️ Installation and Setup

## 1. Clone the repository

```bash
git clone https://github.com/ibrahimyasser450/Nike-E-Commerce-Website.git
```

---

## 2. Go to project directory

```bash
cd nike-ecommerce
```

---

## 3. Install dependencies

```bash
npm install
```

---

## 4. Run the project

```bash
npm run dev
```

The application will run on:

```
http://localhost:5173
```

---


# 🎨 UI Features

- Responsive layout
- Modern Nike design
- Smooth animations
- Product hover effects
- Blur effects
- Clean reusable components
- Mobile-friendly interface

---

# 🔮 Future Improvements

Future versions can include:

- User authentication
- Backend API
- Database integration
- Product management dashboard
- Payment gateway
- Order system
- Product search
- Product filtering
- Wishlist feature
- User reviews

---

# 👨‍💻 Author

## Ibrahim Yasser

Software Engineer

GitHub:

```
https://github.com/ibrahimyasser450
```
