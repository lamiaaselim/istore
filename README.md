# Istore E-commerce Webpage

## Overview

"Istore" is a simple E-commerce webpage built using React.js. The primary goal of this project is to demonstrate front-end development skills, including structuring a React application, implementing common front-end features, and ensuring the page is responsive and user-friendly.

## Features

1. **Website Header**:
   - Displays the name "Istore".
   - Placeholder for the company's logo.

2. **Search Bar**:
   - Functional search bar allowing users to search for products by name.

3. **Category Filter**:
   - Filters products dynamically based on categories:
     - Women's Clothes
     - Men's Clothes
     - Electronics
   - Updates the displayed products based on the selected category.

4. **Demo Products**:
   - Displays at least five demo products on the page.
   - Each product includes:
     - Name
     - Image
     - Price
     - Category
     - Brief description

## Requirements

- **Technology**: React.js
- **Design**: Responsive design using Bootstrap CSS framework.
- **Code Quality**: Clean, well-organized code following best practices.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A code editor (e.g., Visual Studio Code).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lamiaaselim/istore
   cd istore

2. Install dependencies:

    ```bash
        Copy code
        npm install ist

## Usage

Start the development server:
    ```bash
        npm start
    ```

** This will start the React development server and open the application in your default web browser at <http://localhost:3000>.

** Open the application and explore the "Istore" e-commerce page.

## Folder Structure

Istore
    ├── public/  
    │   ├── assets/                # Static assets like images or styles
    │   │   ├── images/
    │   │   └── icons/
    │   └── index.html             # HTML entry point
    ├── src/
    │   ├── api/                   # API-related calls
    │   │   └── product.js
    │   ├── components/            # Reusable components
    │   │   ├── common/            # Shared components (e.g., Navbar, Footer)
    │   │   │   ├── MyNav.jsx
    │   │   │   └── MyFooter.jsx
    │   │   ├── Product/
    │   │   │   ├── ProductCard.jsx
    │   │   │   ├── ProductSection.jsx
    │   │   │   └── ProductSlider.jsx  # If a separate slider component exists
    │   │   └── ...
    │   ├── hooks/                 # Custom React hooks
    │   │   └── useFetch.js        # Fetch-related logic
    │   ├── pages/                 # Pages corresponding to routes
    │   │   ├── Cart.jsx
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── NotFound.jsx
    │   │   ├── ProductDetails.jsx
    │   │   ├── Store.jsx
    │   │   └── Layout.jsx
    │   ├── redux/                 # Redux-related files
    │   │   ├── slices/            # Redux slices
    │   │   │   ├── cartCounter.js
    │   │   │   └── product.js
    │   │   └── store.js
    │   ├── styles/                # Global or reusable styles
    │   │   └── app.css
    │   ├── utils/                 # Helper functions/utilities
    │   │   └── validateEmail.js
    │   ├── App.jsx                # Main app component
    │   └── index.js               # Entry point
    └── package.json               # Project configuration and dependencies

## Contributions

Feel free to contribute to this project by forking it and submitting pull requests. Please ensure your code follows the project's coding standards and best practices.
