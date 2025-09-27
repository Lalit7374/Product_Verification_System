// import React from "react";

// const Queryproduct = () => {
//   return (
//     <>
//       {/* Header Section */}
//       <section className="bg-gray-100 py-4 px-6">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="text-center md:text-left mb-4 md:mb-0">
//             <a className="text-2xl font-bold text-blue-700" href="/">
//               Product Verification System <span className="block text-sm text-gray-600">through Blockchain</span>
//             </a>
//           </div>
//           <div className="hidden md:block">
//             {/* Optional Search Form */}
//           </div>
//         </div>
//       </section>

//       {/* Navigation */}
//       <nav className="bg-gray-900 text-white">
//         <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
//           <button
//             className="md:hidden block text-white"
//             type="button"
//             aria-label="Toggle Menu"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//           <ul className="flex space-x-6">
//             <li><a href="/" className="hover:text-yellow-400">Home</a></li>
//             <li><a href="/manufacturer" className="hover:text-yellow-400">Manufacturer</a></li>
//             <li><a href="/sell" className="hover:text-yellow-400">Seller</a></li>
//             <li><a href="/consumer" className="hover:text-yellow-400">Consumer</a></li>
//           </ul>
//         </div>
//       </nav>

//       {/* Seller Code Input */}
//       <section className="py-6 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-xl font-semibold mb-4">Products for sale with the seller</h2>
//           <div className="mb-4">
//             <label htmlFor="sellerCode" className="block mb-1 font-medium">Seller Code</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               id="sellerCode"
//               placeholder="Enter Seller Code"
//               name="sellerCode"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition"
//             id="register"
//           >
//             Submit
//           </button>
//         </div>
//       </section>

//       {/* Product Table */}
//       <section className="py-6">
//         <div className="container mx-auto px-4">
//           <h2 className="text-xl font-semibold mb-4">Product Details</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full border border-gray-300 text-sm text-left">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="px-4 py-2 border">Product ID</th>
//                   <th className="px-4 py-2 border">Serial Number</th>
//                   <th className="px-4 py-2 border">Name</th>
//                   <th className="px-4 py-2 border">Brand</th>
//                   <th className="px-4 py-2 border">Price</th>
//                   <th className="px-4 py-2 border">Status</th>
//                 </tr>
//               </thead>
//               <tbody id="logdata" className="bg-white divide-y divide-gray-200">
//                 {/* Dynamic rows will be inserted here */}
//               </tbody>
//             </table>
//           </div>
//           <div className="mt-4 text-center">
//             <p>Your address is <b id="add"></b></p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Queryproduct;
import React, { useState } from "react";

const Queryproduct = () => {
  const [sellerCode, setSellerCode] = useState("");
  const [products, setProducts] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://product-verification-system.onrender.com/api/query-products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sellerCode }),
      });

      const data = await response.json();
      if (response.ok) {
        setProducts(data.products);
        setWalletAddress(data.walletAddress || "N/A");
      } else {
        alert(data.message || "Something went wrong.");
        setProducts([]);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error while querying products.");
    }
  };

  return (
    <>
      {/* Header Section */}
      <section className="bg-gray-100 py-4 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a className="text-2xl font-bold text-blue-700" href="/">
              Product Verification System
              <span className="block text-sm text-gray-600">
                using Secure Digital Ledger Technology
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="/manufacturer" className="hover:text-yellow-400">
                Manufacturer
              </a>
            </li>
            <li>
              <a href="/sell" className="hover:text-yellow-400">
                Seller
              </a>
            </li>
            <li>
              <a href="/consumer" className="hover:text-yellow-400">
                Consumer
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Seller Code Input */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4">
            Products for sale with the seller
          </h2>
          <div className="mb-4">
            <label htmlFor="sellerCode" className="block mb-1 font-medium">
              Seller Code
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="sellerCode"
              placeholder="Enter Seller Code"
              value={sellerCode}
              onChange={(e) => setSellerCode(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </section>

      {/* Product Table */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4">Product Details</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border">Product ID</th>
                  <th className="px-4 py-2 border">Serial Number</th>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Brand</th>
                  <th className="px-4 py-2 border">Price</th>
                  <th className="px-4 py-2 border">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.length > 0 ? (
                  products.map((product, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 border">{product.productId}</td>
                      <td className="px-4 py-2 border">{product.serialNumber}</td>
                      <td className="px-4 py-2 border">{product.name}</td>
                      <td className="px-4 py-2 border">{product.brand}</td>
                      <td className="px-4 py-2 border">{product.price}</td>
                      <td className="px-4 py-2 border">{product.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-4 py-4 text-center text-gray-500">
                      No products found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <p>
              Your address is <b>{walletAddress || "Not connected"}</b>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Queryproduct;
