# oopShopingWebsite

A simple Object-Oriented Programming (OOP) shopping website project.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Usage](#installation--usage)

## Introduction
This project is a demonstration of an online shopping website built using JavaScript with a focus on OOP design principles. It features a dynamic product list, cart management, and responsive UI, making it a great reference for OOP and modular JavaScript development.

## Features

- **Product Listing**: Displays products loaded from a data source (`data.json`) with their name, price, and image.
- **Shopping Cart**: Add products to the cart, adjust quantities, or remove items.
- **Cart Controls**: Increase/decrease product quantity, remove items, and view the total price.
- **OOP Design**: Core functionality is split into classes (`Display`, `Products`, `Cart`) for better structure and scalability.
- **Responsive UI**: Styled with CSS for modern appearance and usability.
- **Separation of Concerns**: Utility functions (e.g., data fetching) and modules are separated for clarity and maintainability.

## Project Structure

```
oopShopingWebsite/
│
├── index.html             # Main HTML file
├── css/
│   └── style.css          # Stylesheets
├── modules/
│   ├── Display.js         # Base class for UI display
│   ├── Products.js        # Handles product logic and display
│   └── Cart.js            # Handles cart logic and display
├── utils/
│   └── httpReq.js         # Utility for fetching product data
├── data.json              # Product data (referenced but not shown above)
└── README.md              # Project documentation
```

## Installation & Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/parsaabedi03/oopShopingWebsite.git
   ```

2. **Navigate to the project folder:**
   ```bash
   cd oopShopingWebsite
   ```

3. **Place your product data in `data.json`.**  
   Ensure it follows the required product schema (e.g., id, name, price, image, alt).

4. **Open `index.html` in your browser:**  
   No build process is required. This project runs directly in the browser.

5. **Interact with the product list and cart:**  
   Add, remove, and update products in the cart and observe the total price update dynamically.

---

Feel free to fork or extend the project to add more features or improve the UI!
