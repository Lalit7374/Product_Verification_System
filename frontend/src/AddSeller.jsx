// import React, { useState } from "react";
// import { FaPlusCircle } from "react-icons/fa";

// const AddSeller = () => {
//   const [formData, setFormData] = useState({
//     SellerName: "",
//     SellerBrand: "",
//     SellerCode: "",
//     SellerPhoneNumber: "",
//     SellerManager: "",
//     SellerAddress: "",
//     ManufacturerId: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitting Seller:", formData);
//     // TODO: Connect to backend/blockchain
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center p-6">
//       <div className="w-full max-w-4xl bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-10 border border-white/30">
//         <h2 className="text-4xl font-bold text-gray-900 text-center mb-8 drop-shadow-md">
//           🛍️ Register New Seller
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               { id: "SellerName", label: "Seller Name" },
//               { id: "SellerBrand", label: "Seller Brand" },
//               { id: "SellerCode", label: "Seller Code" },
//               { id: "SellerPhoneNumber", label: "Phone Number" },
//               { id: "SellerManager", label: "Seller Manager" },
//               { id: "SellerAddress", label: "Seller Address" },
//             ].map(({ id, label }) => (
//               <div key={id}>
//                 <label htmlFor={id} className="block mb-2 text-gray-900 font-medium">
//                   {label}
//                 </label>
//                 <input
//                   type="text"
//                   id={id}
//                   name={id}
//                   value={formData[id]}
//                   onChange={handleChange}
//                   className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
//                 />
//               </div>
//             ))}

//             <div className="md:col-span-2">
//               <label htmlFor="ManufacturerId" className="block mb-2 text-gray-900 font-medium">
//                 Manufacturer ID
//               </label>
//               <input
//                 type="text"
//                 id="ManufacturerId"
//                 name="ManufacturerId"
//                 value={formData.ManufacturerId}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
//               />
//             </div>
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="flex items-center gap-2 mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition duration-300"
//             >
//               <FaPlusCircle /> Add Seller
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddSeller;
//--->latest --------------
// import React, { useState } from "react";
// import { FaPlusCircle } from "react-icons/fa";
// import axios from "axios"; // Make sure axios is installed

// const AddSeller = () => {
//   const [formData, setFormData] = useState({
//     SellerName: "",
//     SellerBrand: "",
//     SellerCode: "",
//     SellerPhoneNumber: "",
//     SellerManager: "",
//     SellerAddress: "",
//     ManufacturerId: ""
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/api/sellers", formData);
//       setMessage("✅ Seller added successfully!");
//       setFormData({
//         SellerName: "",
//         SellerBrand: "",
//         SellerCode: "",
//         SellerPhoneNumber: "",
//         SellerManager: "",
//         SellerAddress: "",
//         ManufacturerId: ""
//       });
//     } catch (error) {
//       console.error("Error submitting seller:", error);
//       setMessage("❌ Failed to add seller.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center p-6">
//       <div className="w-full max-w-4xl bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-10 border border-white/30">
//         <h2 className="text-4xl font-bold text-gray-900 text-center mb-8 drop-shadow-md">
//           🛍️ Register New Seller
//         </h2>

//         {message && (
//           <p className="text-center text-lg font-semibold mb-4 text-white bg-black bg-opacity-40 p-2 rounded-md">
//             {message}
//           </p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               { id: "SellerName", label: "Seller Name" },
//               { id: "SellerBrand", label: "Seller Brand" },
//               { id: "SellerCode", label: "Seller Code" },
//               { id: "SellerPhoneNumber", label: "Phone Number" },
//               { id: "SellerManager", label: "Seller Manager" },
//               { id: "SellerAddress", label: "Seller Address" },
//             ].map(({ id, label }) => (
//               <div key={id}>
//                 <label htmlFor={id} className="block mb-2 text-gray-900 font-medium">
//                   {label}
//                 </label>
//                 <input
//                   type="text"
//                   id={id}
//                   name={id}
//                   value={formData[id]}
//                   onChange={handleChange}
//                   className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
//                   required
//                 />
//               </div>
//             ))}

//             <div className="md:col-span-2">
//               <label htmlFor="ManufacturerId" className="block mb-2 text-gray-900 font-medium">
//                 Manufacturer ID
//               </label>
//               <input
//                 type="text"
//                 id="ManufacturerId"
//                 name="ManufacturerId"
//                 value={formData.ManufacturerId}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="flex items-center gap-2 mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition duration-300"
//             >
//               <FaPlusCircle /> Add Seller
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddSeller;
//latest --->>>>>>>>..........----->

import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2"; // ✅ import SweetAlert2

const AddSeller = () => {
  const [formData, setFormData] = useState({
    SellerName: "",
    SellerBrand: "",
    SellerCode: "",
    SellerPhoneNumber: "",
    SellerManager: "",
    SellerAddress: "",
    ManufacturerId: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/sellers", formData);

      // ✅ Show success popup
      Swal.fire({
        title: "Success!",
        text: "Seller added successfully ✅",
        icon: "success",
        confirmButtonColor: "#3085d6"
      });

      // Reset form
      setFormData({
        SellerName: "",
        SellerBrand: "",
        SellerCode: "",
        SellerPhoneNumber: "",
        SellerManager: "",
        SellerAddress: "",
        ManufacturerId: ""
      });
    } catch (error) {
      console.error("Error submitting seller:", error);

      // ❌ Show error popup
      Swal.fire({
        title: "Error!",
        text: "Failed to add seller. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-10 border border-white/30">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8 drop-shadow-md">
          🛍️ Register New Seller
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: "SellerName", label: "Seller Name" },
              { id: "SellerBrand", label: "Seller Brand" },
              { id: "SellerCode", label: "Seller Code" },
              { id: "SellerPhoneNumber", label: "Phone Number" },
              { id: "SellerManager", label: "Seller Manager" },
              { id: "SellerAddress", label: "Seller Address" },
            ].map(({ id, label }) => (
              <div key={id}>
                <label htmlFor={id} className="block mb-2 text-gray-900 font-medium">
                  {label}
                </label>
                <input
                  type="text"
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  required
                />
              </div>
            ))}

            <div className="md:col-span-2">
              <label htmlFor="ManufacturerId" className="block mb-2 text-gray-900 font-medium">
                Manufacturer ID
              </label>
              <input
                type="text"
                id="ManufacturerId"
                name="ManufacturerId"
                value={formData.ManufacturerId}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                required
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center gap-2 mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition duration-300"
            >
              <FaPlusCircle /> Add Seller
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSeller;
