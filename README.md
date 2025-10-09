🧾 Product Verification System
🔍 Secure | Scalable | Smart Product Authentication






Building trust, one verified product at a time. 🚀

🌐 Live Demo

Frontend: https://product-verification-system-x6qg.onrender.com

Backend: https://product-verification-system.onrender.com

🧠 Project Overview

A full-stack MERN web application that enables users to verify the authenticity of products using a unique product code.
It prevents counterfeit or duplicate products by providing a secure, token-based authentication system and real-time verification interface.

✨ Core Highlights

🔐 JWT-based user authentication

🧾 Product verification using unique codes

☁️ MongoDB Atlas integration

💻 Responsive UI built with Tailwind CSS

🚀 Fully deployed on Render (Frontend + Backend)

⚙️ Tech Stack
Category	Technologies
Frontend	React.js, Tailwind CSS, React Router
Backend	Node.js, Express.js
Database	MongoDB Atlas
Deployment	Render
Tools	Git, GitHub
🏗️ System Architecture
flowchart TD
A[React Frontend] -->|Fetch API| B[Express Backend]
B -->|Mongoose| C[(MongoDB Atlas)]
B --> D[Authentication / Routes]
A --> E[User Interface (Login, Register, Verify Product)]

🌟 Features
Feature	Description
🧍‍♂️ User Authentication	Secure login and registration using JWT tokens
✅ Product Verification	Validate products via unique product codes
🛠️ Admin Product Management	Add and manage product details
☁️ Database Integration	Scalable cloud storage via MongoDB Atlas
📱 Responsive Design	Tailwind CSS ensures seamless mobile and desktop experience
🌍 Full Deployment	Frontend and backend hosted on Render
📁 Folder Structure
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

🔗 API Endpoints
Method	Endpoint	Description
POST	/user/register	Register new user
POST	/user/login	Authenticate user
POST	/verify	Verify product code
GET	/products	Fetch product list
POST	/add-product	Add new product (Admin only)
🧩 Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/Lalit7374/Product-Verification-System.git
cd Product-Verification-System

2️⃣ Setup Backend
cd backend
npm install
npm start


📝 Add your MongoDB URI and JWT Secret in the .env file.

3️⃣ Setup Frontend
cd ../frontend
npm install
npm run dev

4️⃣ Access Locally

Frontend → http://localhost:5173

Backend → http://localhost:5000

🖼️ Screenshots
Page	Preview
🏠 Home / Verification Page	

📝 Register Page	

🔑 Login Page	
👨‍💻 Author

Lalit Chowhan
📧 lalitc.dev@gmail.com

🌐 Portfolio

💼 LinkedIn

🐙 GitHub

❤️ Support

If you like this project, please ⭐ star this repo — it helps others find it!
Your feedback and suggestions are always welcome. 🙌

🏁 Quote

“Building trust, one verified product at a time.”
