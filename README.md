project:
  name: "Product Verification System"
  tagline: "🔍 Secure | Scalable | Smart Product Authentication"
  description: >
    A full-stack MERN web application that helps users verify product authenticity 
    using a unique product code. Built with React, Node.js, Express, MongoDB, and deployed on Render.
    Users can register, log in, and verify products to prevent counterfeit or duplicate items.
  
  live_links:
    frontend: "https://product-verification-system-x6qg.onrender.com"
    backend: "https://product-verification-system.onrender.com"

  overview:
    - Secure user registration and login (JWT-based)
    - Product verification using unique product IDs
    - MongoDB Atlas integration for reliable cloud database
    - Responsive and user-friendly UI built with Tailwind CSS
    - Fully deployed on Render (Frontend + Backend)

  tech_stack:
    frontend:
      - React.js
      - Tailwind CSS
      - React Router
    backend:
      - Node.js
      - Express.js
    database:
      - MongoDB Atlas
    deployment:
      - Render
    tools:
      - Git
      - GitHub

  architecture_diagram: |
    flowchart TD
    A[React Frontend] -->|Fetch API| B[Express Backend]
    B -->|Mongoose| C[(MongoDB Atlas)]
    B --> D[Authentication / Routes]
    A --> E[User Interface (Login, Register, Verify Product)]

  features:
    - name: "User Authentication"
      details: "Secure registration and login using JWT tokens"
    - name: "Product Verification"
      details: "Validate products using unique product codes"
    - name: "Product Management"
      details: "Admins can add and manage product entries"
    - name: "Database Integration"
      details: "MongoDB Atlas for scalable cloud data storage"
    - name: "Responsive Design"
      details: "Built using Tailwind CSS to support all devices"
    - name: "Full Deployment"
      details: "Both frontend and backend are hosted on Render"

  folder_structure: |
    Product-Verification-System/
    ├── backend/
    │   ├── models/
    │   ├── routes/
    │   ├── server.js
    │   └── .env
    ├── frontend/
    │   ├── src/
    │   │   ├── components/
    │   │   ├── pages/
    │   │   └── App.jsx
    │   ├── public/
    │   ├── package.json
    │   └── static.json
    └── README.md

  api_endpoints:
    - method: "POST"
      endpoint: "/user/register"
      description: "Register new user"
    - method: "POST"
      endpoint: "/user/login"
      description: "Authenticate user"
    - method: "POST"
      endpoint: "/verify"
      description: "Verify product code"
    - method: "GET"
      endpoint: "/products"
      description: "Fetch product list"
    - method: "POST"
      endpoint: "/add-product"
      description: "Add new product (Admin only)"

  setup_instructions:
    steps:
      - step: "Clone Repository"
        command: |
          git clone https://github.com/yourusername/Product-Verification-System.git
          cd Product-Verification-System
      - step: "Setup Backend"
        command: |
          cd backend
          npm install
          npm start
        note: "Add your MongoDB URI and JWT secret in .env"
      - step: "Setup Frontend"
        command: |
          cd ../frontend
          npm install
          npm run dev
      - step: "Access Locally"
        frontend: "http://localhost:5173"
        backend: "http://localhost:5000"

  screenshots:
    - title: "Home / Verification Page"
      image: "https://github.com/yourusername/Product-Verification-System/assets/home.png"
    - title: "Register Page"
      image: "https://github.com/yourusername/Product-Verification-System/assets/register.png"
    - title: "Login Page"
      image: "https://github.com/yourusername/Product-Verification-System/assets/login.png"

  author:
    name: "Lalit Chowhan"
    email: "lalitc.dev@gmail.com"
    portfolio: "https://lalit7374.github.io/My%20Portfolio/"
    linkedin: "https://linkedin.com/in/lalit-chowhan"
    github: "https://github.com/Lalit7374"

  support:
    message: "If you like this project, please ⭐ it on GitHub — it helps others find it!"

  quote: "Building trust, one verified product at a time. 🚀"
