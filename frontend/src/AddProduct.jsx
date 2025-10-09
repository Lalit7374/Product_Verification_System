// import React, { useState } from "react";
// import axios from "axios";

// const AddProduct = () => {
//   const [manufacturerID, setManufacturerID] = useState("");
//   const [productName, setProductName] = useState("");
//   const [productSN, setProductSN] = useState("");
//   const [productBrand, setProductBrand] = useState("");
//   const [productPrice, setProductPrice] = useState("");
//   const [qrSrc, setQrSrc] = useState("");
//   const [showQR, setShowQR] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async () => {
//     if (!manufacturerID || !productName || !productSN || !productBrand || !productPrice) {
//       alert("Please fill in all fields");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/add-product", {
//         manufacturerID,
//         productName,
//         productSN,
//         productBrand,
//         productPrice,
//       });

//       if (res.data.success) {
//         const src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${productSN}`;
//         setQrSrc(src);
//         setShowQR(true);
//         setMessage("✅ Product added successfully!");
//       } else {
//         setMessage("❌ Failed to add product.");
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Error adding product.");
//     }
//   };

//   const saveImage = () => {
//     const a = document.createElement("a");
//     a.href = qrSrc;
//     a.download = `${productSN}_qr.png`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     setShowQR(false);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         <div>
//           <label className="block mb-1">Manufacturer ID</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={manufacturerID}
//             onChange={(e) => setManufacturerID(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Product Name</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Product SN</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={productSN}
//             onChange={(e) => setProductSN(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Product Brand</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={productBrand}
//             onChange={(e) => setProductBrand(e.target.value)}
//           />
//         </div>

//         <div className="md:col-span-2">
//           <label className="block mb-1">Product Price</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={productPrice}
//             onChange={(e) => setProductPrice(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="text-center">
//         <button
//           onClick={handleSubmit}
//           className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Add the Product
//         </button>
//         {message && <p className="mt-4 text-center text-lg font-medium">{message}</p>}
//       </div>

//       {showQR && (
//         <div className="text-center mt-6">
//           <img src={qrSrc} alt="QR Code" className="mx-auto mb-4" />
//           <button
//             onClick={saveImage}
//             className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
//           >
//             Download QR Code
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddProduct;




//--------------------------------------------------------
// import React, { useState } from "react";
// import axios from "axios";

// const AddProduct = () => {
//   const [manufacturerID, setManufacturerID] = useState("");
//   const [productName, setProductName] = useState("");
//   const [productSN, setProductSN] = useState("");
//   const [productBrand, setProductBrand] = useState("");
//   const [productPrice, setProductPrice] = useState("");
//   const [qrSrc, setQrSrc] = useState("");
//   const [showQR, setShowQR] = useState(false);
//   const [message, setMessage] = useState("");
//   const [autoDownload, setAutoDownload] = useState(false);

//   const handleSubmit = async () => {
//     if (!manufacturerID || !productName || !productSN || !productBrand || !productPrice) {
//       alert("Please fill in all fields");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/product-add1", {
//         manufacturerID,
//         productName,
//         productSN,
//         productBrand,
//         productPrice,
//       });

//       if (res.data.success) {
//         const src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${productSN}`;
//         setQrSrc(src);
//         setShowQR(true);
//         setMessage("✅ Product added successfully!");
//         setAutoDownload(true); // flag to auto download after QR loads
//       } else {
//         setMessage("❌ Failed to add product.");
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Error adding product.");
//     }
//   };

//   const saveImage = () => {
//     const a = document.createElement("a");
//     a.href = qrSrc;
//     a.download = `${productSN}_qr.png`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     setAutoDownload(false);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         <div>
//           <label className="block mb-1">Manufacturer ID</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={manufacturerID}
//             onChange={(e) => setManufacturerID(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Product Name</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Product SN</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={productSN}
//             onChange={(e) => setProductSN(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Product Brand</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={productBrand}
//             onChange={(e) => setProductBrand(e.target.value)}
//           />
//         </div>

//         <div className="md:col-span-2">
//           <label className="block mb-1">Product Price</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={productPrice}
//             onChange={(e) => setProductPrice(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="text-center">
//         <button
//           onClick={handleSubmit}
//           className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Add the Product
//         </button>
//         {message && <p className="mt-4 text-center text-lg font-medium">{message}</p>}
//       </div>

//       {showQR && (
//         <div className="text-center mt-6">
//           <div className="inline-block border rounded p-4 shadow">
//             <img
//               src={qrSrc}
//               alt="QR Code"
//               className="mx-auto mb-4"
//               onLoad={() => {
//                 if (autoDownload) saveImage();
//               }}
//               style={{ width: "200px", height: "200px" }}
//             />
//             <button
//               onClick={saveImage}
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
//             >
//               Download QR Code
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddProduct;
//------------------------original-------------------------------------------------------
// import React, { useState } from "react";
// import axios from "axios";

// const AddProduct = () => {
//   const [manufacturerID, setManufacturerID] = useState("");
//   const [productName, setProductName] = useState("");
//   const [productSN, setProductSN] = useState("");
//   const [productBrand, setProductBrand] = useState("");
//   const [productPrice, setProductPrice] = useState("");
//   const [qrSrc, setQrSrc] = useState("");
//   const [showQR, setShowQR] = useState(false);
//   const [message, setMessage] = useState("");
//   const [autoDownload, setAutoDownload] = useState(false);

//   const handleSubmit = async () => {
//     if (!manufacturerID || !productName || !productSN || !productBrand || !productPrice) {
//       alert("Please fill in all fields");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/product-add1", {
//         manufacturerID,
//         productName,
//         productSN,
//         productBrand,
//         productPrice,
//       });

//       if (res.data.success) {
//         const src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${productSN}`;
//         setQrSrc(src);
//         setShowQR(true);
//         setMessage("✅ Product added successfully!");
//         setAutoDownload(true);
//       } else {
//         setMessage("❌ Failed to add product.");
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Error adding product.");
//     }
//   };

//   const saveImage = async () => {
//     try {
//       const response = await fetch(qrSrc);
//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);

//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `${productSN}_qr.png`;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       window.URL.revokeObjectURL(url);

//       setAutoDownload(false);
//     } catch (err) {
//       console.error("Failed to download QR code", err);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         <div>
//           <label className="block mb-1">Manufacturer ID</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={manufacturerID}
//             onChange={(e) => setManufacturerID(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Product Name</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Product SN</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={productSN}
//             onChange={(e) => setProductSN(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Product Brand</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={productBrand}
//             onChange={(e) => setProductBrand(e.target.value)}
//           />
//         </div>

//         <div className="md:col-span-2">
//           <label className="block mb-1">Product Price</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={productPrice}
//             onChange={(e) => setProductPrice(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="text-center">
//         <button
//           onClick={handleSubmit}
//           className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Add the Product
//         </button>
//         {message && <p className="mt-4 text-center text-lg font-medium">{message}</p>}
//       </div>

//       {showQR && (
//         <div className="text-center mt-6">
//           <div className="inline-block border rounded p-4 shadow">
//             <img
//               src={qrSrc}
//               alt="QR Code"
//               className="mx-auto mb-4"
//               onLoad={() => {
//                 if (autoDownload) saveImage();
//               }}
//               style={{ width: "200px", height: "200px" }}
//             />
//             <button
//               onClick={saveImage}
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
//             >
//               Download QR Code
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddProduct;
//------------------------------------------------------------------------------------------------------
// import React, { useState } from "react";
// import axios from "axios";

// const AddProduct = () => {
//   const [manufacturerID, setManufacturerID] = useState("");
//   const [productName, setProductName] = useState("");
//   const [productSN, setProductSN] = useState("");
//   const [productBrand, setProductBrand] = useState("");
//   const [productPrice, setProductPrice] = useState("");
//   const [qrSrc, setQrSrc] = useState("");
//   const [showQR, setShowQR] = useState(false);
//   const [message, setMessage] = useState("");
//   const [autoDownload, setAutoDownload] = useState(false);

//   const handleSubmit = async () => {
//     if (!manufacturerID || !productName || !productSN || !productBrand || !productPrice) {
//       alert("Please fill in all fields");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/product-add", {
//         manufacturerID,
//         productName,
//         productSN,
//         productBrand,
//         productPrice,
//       });

//       if (res.data.success) {
//         const src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${productSN}`;
//         setQrSrc(src);
//         setShowQR(true);
//         setMessage("✅ Product added successfully!");
//         setAutoDownload(true);
//       } else {
//         setMessage("❌ Failed to add product.");
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Error adding product.");
//     }
//   };

//   const saveImage = async () => {
//     try {
//       const response = await fetch(qrSrc);
//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);

//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `${productSN}_qr.png`;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       window.URL.revokeObjectURL(url);

//       setAutoDownload(false);
//     } catch (err) {
//       console.error("Failed to download QR code", err);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6 text-center animate-slide-in">
//         Add Product
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         <div>
//           <label className="block mb-1">Manufacturer ID</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={manufacturerID}
//             onChange={(e) => setManufacturerID(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Product Name</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Product SN</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={productSN}
//             onChange={(e) => setProductSN(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Product Brand</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={productBrand}
//             onChange={(e) => setProductBrand(e.target.value)}
//           />
//         </div>

//         <div className="md:col-span-2">
//           <label className="block mb-1">Product Price</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             type="text"
//             value={productPrice}
//             onChange={(e) => setProductPrice(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="text-center">
//         <button
//           onClick={handleSubmit}
//           className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Add the Product
//         </button>
//         {message && (
//           <p className="mt-4 text-center text-lg font-medium animate-fade-bounce">
//             {message}
//           </p>
//         )}
//       </div>

//       {showQR && (
//         <div className="text-center mt-6">
//           <div className="inline-block border rounded p-4 shadow animate-bounce-in">
//             <img
//               src={qrSrc}
//               alt="QR Code"
//               className="mx-auto mb-4"
//               onLoad={() => {
//                 if (autoDownload) saveImage();
//               }}
//               style={{ width: "200px", height: "200px" }}
//             />
//             <button
//               onClick={saveImage}
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
//             >
//               Download QR Code
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddProduct;
import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [manufacturerID, setManufacturerID] = useState("");
  const [productName, setProductName] = useState("");
  const [productSN, setProductSN] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productType, setProductType] = useState(""); // New State for Dropdown
  const [qrSrc, setQrSrc] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [message, setMessage] = useState("");
  const [autoDownload, setAutoDownload] = useState(false);

  const handleSubmit = async () => {
    if (!manufacturerID || !productName || !productSN || !productBrand || !productPrice || !productType) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post("https://product-verification-system.onrender.com/product-add1", {
        manufacturerID,
        productName,
        productSN,
        productBrand,
        productPrice,
        productType, // Send product type also
      });

      if (res.data.success) {
        const src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${productSN}`;
        setQrSrc(src);
        setShowQR(true);
        setMessage("✅ Product added successfully!");
        setAutoDownload(true);
      } else {
        setMessage("❌ Failed to add product.");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Error adding product.");
    }
  };

  const saveImage = async () => {
    try {
      const response = await fetch(qrSrc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${productSN}_qr.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      setAutoDownload(false);
    } catch (err) {
      console.error("Failed to download QR code", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-600 to-yellow-400">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-2xl animate-fadeIn">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add Product
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-600">Manufacturer ID</label>
            <input
              className="w-full p-3 mt-1 border-2 border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-red-50"
              type="text"
              value={manufacturerID}
              onChange={(e) => setManufacturerID(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Product Name</label>
            <input
              className="w-full p-3 mt-1 border-2 border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-red-50"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Product SN</label>
            <input
              className="w-full p-3 mt-1 border-2 border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-red-50"
              type="text"
              value={productSN}
              onChange={(e) => setProductSN(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Product Brand</label>
            <input
              className="w-full p-3 mt-1 border-2 border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-red-50"
              type="text"
              value={productBrand}
              onChange={(e) => setProductBrand(e.target.value)}
              required
            />
          </div>

          {/* ✅ New Dropdown for Product Type */}
          <div>
            <label className="block text-sm text-gray-600">Product Type</label>
            <select
              className="w-full p-3 mt-1 border-2 border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-red-50"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              required
            >
              <option value="">-- Select Product Type --</option>
              <option value="Medicine">Medicine</option>
              <option value="Food">Food</option>
              <option value="Cosmetic">Cosmetic</option>
              <option value="Shoes">Shoes</option>
              <option value="Electronic">Electronic</option>
              <option value="Cloths">Cloths</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600">Product Price</label>
            <input
              className="w-full p-3 mt-1 border-2 border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-red-50"
              type="text"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-red-600 text-white mt-6 py-3 rounded-md hover:bg-red-700 transition duration-300"
        >
          Add the Product
        </button>

        {message && (
          <p className="mt-4 text-center text-lg font-medium animate-fade-bounce">
            {message}
          </p>
        )}

        {showQR && (
          <div className="text-center mt-6">
            <div className="inline-block border rounded-xl p-6 shadow-lg bg-gray-50 animate-bounce-in">
              <img
                src={qrSrc}
                alt="QR Code"
                className="mx-auto mb-4"
                onLoad={() => {
                  if (autoDownload) saveImage();
                }}
                style={{ width: "200px", height: "200px" }}
              />
              <button
                onClick={saveImage}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Download QR Code
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProduct;

