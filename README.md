# 🔍 Product Verification System

## ✅ Secure | Scalable | Smart Product Authentication

A **full-stack MERN web application** designed to help users **verify the authenticity of products** using a unique product code. This project aims to reduce counterfeit products in the market by providing a trustworthy verification platform for both consumers and brands.  

Built with modern technologies like **React, Node.js, Express, and MongoDB Atlas**, the app is fully responsive, secure, and deployed on **Render**.

---

## 🌐 Live Demo

- 🚀 **LIVE LINK:** [https://product-verification-system-x6qg.onrender.com](https://product-verification-system-x6qg.onrender.com)  

---

## 🧭 Introduction

The Product Verification System enables users to register, log in, and verify products through a simple interface. Each product is assigned a **unique verification code**, which can be entered by users to confirm whether the product is authentic or counterfeit.  

This project demonstrates:

- End-to-end **MERN stack skills** (MongoDB, Express, React, Node.js)  
- Implementation of **secure authentication using JWT**  
- **API integration** between frontend and backend  
- **Full deployment pipeline** with Render  

---

## 🧠 Features Overview

### ✨ Key Highlights

- 🔐 **User Authentication:** Secure signup and login with encrypted passwords (JWT)  
- 🧾 **Product Verification:** Instantly verify product authenticity using a unique product code  
- 🧠 **Admin Controls:** Add or manage product details (optional role-based access)  
- 🌍 **Responsive Design:** Built using Tailwind CSS for perfect viewing on all devices  
- ☁️ **Cloud Database:** Integrated with MongoDB Atlas for scalable storage  
- ⚡ **Deployed on Render:** Both backend and frontend fully deployed online  

---

## 🖥️ Tech Stack

| Category   | Technologies                          |
|-----------|--------------------------------------|
| Frontend  | React.js, Tailwind CSS, React Router |
| Backend   | Node.js, Express.js                  |
| Database  | MongoDB Atlas                        |
| Deployment| Render (Frontend + Backend)          |
| Version Control | Git & GitHub                     |

---
## 🖼️ Project Screenshots

### 🏠 Home / Verification Page

<img width="1918" height="867" alt="image" src="https://github.com/user-attachments/assets/fd5a4ccb-ccc2-4655-a770-e35af89555e2" />




### 🧍 Register Page
<img width="1918" height="867" alt="image" src="https://github.com/user-attachments/assets/155f896a-4461-42eb-ae2d-7592a3ba42d0" />


### 🔑 Login Page
<img width="1918" height="867" alt="image" src="https://github.com/user-attachments/assets/50ce7307-a617-4eb4-9229-ceae5c0240f3" />



## ⚙️ System Architecture

```mermaid
flowchart TD
    A[React Frontend] -->|Fetch API| B[Express Backend]
    B -->|Mongoose| C[(MongoDB Atlas)]
    B --> D[Authentication / Routes]
    A --> E[User Interface: Login, Register, Verify Product]



