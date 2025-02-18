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
        npm install

## Usage

Start the development server:
    ```bash
        npm start

- This will start the React development server and open the application in your default web browser at: <http://localhost:3000>.

- Open the application and explore the "Istore" e-commerce page.

## Folder Structure

```sh
Istore
    ├── public/  
    │   ├── assets/
    │   │   ├── images/
    │   │   └── icons/
    │   └── index.html
    ├── src/
    │   ├── api/
    │   │   └── product.js
    │   ├── components/
    │   │   ├── common/
    │   │   │   ├── MyNav.jsx
    │   │   │   └── MyFooter.jsx
    │   │   ├── Product/
    │   │   │   ├── ProductCard.jsx
    │   │   │   ├── ProductSection.jsx
    │   │   │   └── ProductSlider.jsx
    │   │   └── ...
    │   ├── hooks/
    │   │   └── useFetch.js
    │   ├── pages/
    │   │   ├── Cart.jsx
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── NotFound.jsx
    │   │   ├── ProductDetails.jsx
    │   │   ├── Store.jsx
    │   │   └── Layout.jsx
    │   ├── redux/
    │   │   ├── slices/
    │   │   │   ├── cartCounter.js
    │   │   │   └── product.js
    │   │   └── store.js
    │   ├── styles/
    │   │   └── app.css
    │   ├── utils/
    │   │   └── validateEmail.js
    │   ├── App.jsx
    │   └── index.js
    |
    ├── package.json
    |
    ├── package-lock.json
    |
    ├── README.md
    |
    ├── .gitignore
    │
    └── .env
```

## Contributions

Feel free to contribute to this project by forking it and submitting pull requests. Please ensure your code follows the project's coding standards and best practices.
