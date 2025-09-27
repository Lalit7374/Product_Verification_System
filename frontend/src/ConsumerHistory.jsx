// import React, { useState } from "react";

// const ConsumerHistory = () => {
//   const [consumerCode, setConsumerCode] = useState("");
//   const [productLogs, setProductLogs] = useState([]);
//   const [address, setAddress] = useState("");

//   const getProducts = () => {
//     // Dummy data – replace with actual blockchain/backend logic
//     const dummyData = [
//       { sn: "P123", seller: "S456", manufacturer: "M789" },
//       { sn: "P124", seller: "S457", manufacturer: "M790" },
//     ];
//     setProductLogs(dummyData);
//     setAddress("0x123...abc");
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Consumer Product History</h2>

//       <div className="mb-4">
//         <label htmlFor="consumerCode" className="block text-gray-700 font-medium mb-1">
//           Consumer Code
//         </label>
//         <input
//           type="text"
//           id="consumerCode"
//           className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={consumerCode}
//           onChange={(e) => setConsumerCode(e.target.value)}
//           placeholder="Enter Consumer Code"
//         />
//       </div>

//       <button
//         onClick={getProducts}
//         className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
//       >
//         Get Products
//       </button>

//       <div className="mt-10">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Products Purchased by Consumer</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-300 rounded-md">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="py-2 px-4 border-b text-left">Product SN</th>
//                 <th className="py-2 px-4 border-b text-left">Seller Code</th>
//                 <th className="py-2 px-4 border-b text-left">Manufacturer Code</th>
//               </tr>
//             </thead>
//             <tbody>
//               {productLogs.map((log, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="py-2 px-4 border-b">{log.sn}</td>
//                   <td className="py-2 px-4 border-b">{log.seller}</td>
//                   <td className="py-2 px-4 border-b">{log.manufacturer}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {address && (
//           <div className="mt-6 text-center text-sm text-gray-600">
//             Your address is <span className="font-semibold">{address}</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ConsumerHistory;
import React, { useState } from "react";
import axios from "axios";

const ConsumerHistory = () => {
  const [consumerCode, setConsumerCode] = useState("");
  const [productLogs, setProductLogs] = useState([]);
  const [address, setAddress] = useState("");

  const getProducts = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/consumer/history", {
        consumerCode,
      });

      if (response.data.success) {
        setProductLogs(response.data.products);
        setAddress(response.data.address); // Optional: if you're sending user address from backend
      } else {
        alert("No products found for this consumer.");
        setProductLogs([]);
        setAddress("");
      }
    } catch (error) {
      console.error("Error fetching product history:", error);
      alert("Error fetching data. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Consumer Product History</h2>

      <div className="mb-4">
        <label htmlFor="consumerCode" className="block text-gray-700 font-medium mb-1">
          Consumer Code
        </label>
        <input
          type="text"
          id="consumerCode"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={consumerCode}
          onChange={(e) => setConsumerCode(e.target.value)}
          placeholder="Enter Consumer Code"
        />
      </div>

      <button
        onClick={getProducts}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
      >
        Get Products
      </button>

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Products Purchased by Consumer</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b text-left">Product SN</th>
                <th className="py-2 px-4 border-b text-left">Seller Code</th>
                <th className="py-2 px-4 border-b text-left">Manufacturer Code</th>
              </tr>
            </thead>
            <tbody>
              {productLogs.map((log, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{log.sn}</td>
                  <td className="py-2 px-4 border-b">{log.seller}</td>
                  <td className="py-2 px-4 border-b">{log.manufacturer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {address && (
          <div className="mt-6 text-center text-sm text-gray-600">
            Your address is <span className="font-semibold">{address}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsumerHistory;
