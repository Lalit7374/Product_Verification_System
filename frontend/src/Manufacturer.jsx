import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Manufacturer() {
  const [manufacturerInfo, setManufacturerInfo] = useState(null);

  useEffect(() => {
    const fetchManufacturerInfo = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/manufacturer/info");
        setManufacturerInfo(response.data);
      } catch (error) {
        console.error("Error fetching manufacturer info:", error);
      }
    };

    fetchManufacturerInfo();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 text-white relative overflow-hidden">
      {/* Glowing animated background */}
      <div className="absolute inset-0 z-0 bg-black opacity-40 blur-sm"></div>

      {/* Header */}
      <header className="relative z-10 bg-gray-900 bg-opacity-90 py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <Link
            to="/"
            className="text-3xl font-bold text-white bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg animate-pulse"
          >
            Product Verification System
            <span className="block md:inline text-sm font-light text-white drop-shadow-md">
              
            </span>
          </Link>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative z-10 bg-gray-800 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium">
            <li><Link to="/" className="text-white hover:text-yellow-400 transition duration-300">Home</Link></li>
            <li><Link to="/add-product" className="text-white hover:text-yellow-400 transition duration-300">Add Product</Link></li>
            <li><Link to="/add-seller" className="text-white hover:text-yellow-400 transition duration-300">Add Seller</Link></li>
            <li><Link to="/sell-product-seller" className="text-white hover:text-yellow-400 transition duration-300">Sell Product To Seller</Link></li>
            <li><Link to="/query-seller" className="text-white hover:text-yellow-400 transition duration-300">Query Seller</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center animate-fadeInUp">
        <h2 className="text-4xl font-extrabold mb-3 drop-shadow-md animate-textFocus">Manufacturer</h2>
        <h3 className="text-lg font-light mb-6 text-white/90">Go to navigation bar to perform operations.</h3>

        {manufacturerInfo && (
          <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6 max-w-md mx-auto backdrop-blur-sm bg-opacity-90 animate-fadeInUp">
            <h4 className="text-2xl font-semibold mb-4 text-purple-700">Profile Info</h4>
            <div className="text-left space-y-2">
              <p><span className="font-bold text-gray-700">Name:</span> {manufacturerInfo.name}</p>
              <p><span className="font-bold text-gray-700">Email:</span> {manufacturerInfo.email}</p>
              <p><span className="font-bold text-gray-700">Company:</span> {manufacturerInfo.companyName}</p>
            </div>
          </div>
        )}
      </main>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out both;
          }

          @keyframes textFocus {
            0%, 100% { text-shadow: 0 0 5px rgba(255,255,255,0.2); }
            50% { text-shadow: 0 0 15px rgba(255,255,255,0.6); }
          }

          .animate-textFocus {
            animation: textFocus 3s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
