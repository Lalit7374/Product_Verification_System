// import React from 'react';
// import { Link } from 'react-router-dom';

// const Seller = () => {
//   return (
//     <>
//       <header className="bg-white shadow">
//         <div className="container mx-auto px-4 py-6 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Product Verification System <span className="block text-sm text-gray-500">through Blockchain</span>
//           </h1>
//         </div>
//       </header>

//       <nav className="bg-gray-800">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between py-3">
//             <div className="flex space-x-4">
//               <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
              
//               <Link to="/sell" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Sell Product To Consumer</Link>
//               <Link to="/products" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Products For Sale</Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <section className="py-10">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Seller</h2>
//           <h3 className="text-xl text-gray-600">Go to navigation bar to perform operations.</h3>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Seller;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "./assets/Seller.jpg"; // make sure this exists

const Seller = () => {
  const [products, setProducts] = useState([]);
  const [displayText, setDisplayText] = useState("");

  const fullText = "Product Verification System";

  useEffect(() => {
    // Typing animation
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) index = 0;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch products from backend (MongoDB)
    fetch("http://localhost:5000/api/products-for-sale")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <>
      {/* Embedded Styles */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes blink {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }

          @keyframes glowColorCycle {
            0% { color: #ffffff; text-shadow: 0 0 8px #ffffff; opacity: 1; }
            33% { color: #facc15; text-shadow: 0 0 12px #facc15; opacity: 0.85; }
            66% { color: #2dd4bf; text-shadow: 0 0 10px #2dd4bf; opacity: 0.75; }
            100% { color: #ffffff; text-shadow: 0 0 8px #ffffff; opacity: 1; }
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out;
          }

          .blinking-cursor::after {
            content: '|';
            animation: blink 1s step-end infinite;
            font-weight: 500;
            margin-left: 2px;
            color: #facc15;
          }

          .animate-glow-multicolor {
            animation: glowColorCycle 3.5s ease-in-out infinite;
          }
        `}
      </style>

      {/* Background and overlay */}
      <div className="relative w-full min-h-screen text-white overflow-hidden">
        <img
          src={BackgroundImage}
          alt="Seller Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-0" />

        <div className="relative z-10">
          {/* Navbar */}
          <nav className="bg-black py-5 shadow-md sticky top-0 z-50">
            <div className="mx-auto max-w-screen-xl px-4">
              <div className="flex items-center justify-between">
                <div className="flex space-x-6">
                  <Link
                    to="/"
                    className="text-white font-medium hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 px-4 py-2 transition"
                  >
                    Home
                  </Link>
                  <Link
                    to="/sell"
                    className="text-white font-medium hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 px-4 py-2 transition"
                  >
                    Sell Product To Consumer
                  </Link>
                  <Link
                    to="/products"
                    className="text-white font-medium hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 px-4 py-2 transition"
                  >
                    Products For Sale
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Animated Header */}
          <header className="py-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold animate-fade-in-down blinking-cursor">
              <span className="bg-gradient-to-r from-yellow-400 via-white to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
                {displayText}
              </span>
            </h1>
            <p className="text-sm mt-2 text-white font-bold">using Secure Digital Ledger Technology</p>
          </header>

          {/* Main Section */}
          <section className="py-16 animate-fade-in-up">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Seller</h2>
              <h3 className="text-xl font-bold animate-glow-multicolor mb-10">
                Go to navigation bar to perform operations.
              </h3>

              {/* Products */}
              {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <div
                      key={product._id}
                      className="bg-white/10 backdrop-blur-sm text-white shadow-lg rounded-xl p-6"
                    >
                      <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
                      <p className="text-sm opacity-80">ID: {product._id}</p>
                      <p className="text-sm opacity-80">
                        Status: {product.status || "Available"}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-white/60">No products available for sale.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Seller;
