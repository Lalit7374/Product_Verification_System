// import { useEffect } from "react";
// import { Html5QrcodeScanner } from "html5-qrcode";

// const SellProductSeller = () => {
//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner("qr-reader", {
//       fps: 10,
//       qrbox: 250,
//     });

//     scanner.render((decodedText, decodedResult) => {
//       const audio = new Audio("/beep.wav");
//       audio.play();
//       document.getElementById("qr-reader-results").innerHTML = decodedText;
//       document.getElementById("productSN").value = decodedText;
//     });
//   }, []);

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h2 className="text-2xl font-bold text-center mb-6">Sell Product to Consumer</h2>

//       <div className="flex justify-center mb-4">
//         <div id="qr-reader" className="w-72" />
//       </div>
//       <div id="qr-reader-results" className="text-center text-sm text-gray-600 mb-6"></div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Product SN:</label>
//           <input
//             type="text"
//             id="productSN"
//             name="productSN"
//             disabled
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Consumer Code:</label>
//           <input
//             type="text"
//             id="consumerCode"
//             name="consumerCode"
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <button
//           id="register"
//           className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
//         >
//           Sell to Consumer
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SellProductSeller;

//-----------updated code -------------------------
// import { useEffect, useState } from "react";
// import { Html5QrcodeScanner } from "html5-qrcode";
// import axios from "axios";

// const SellProductSeller = () => {
//   const [productSN, setProductSN] = useState("");
//   const [consumerCode, setConsumerCode] = useState("");
//   const [status, setStatus] = useState("");

//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner("qr-reader", {
//       fps: 10,
//       qrbox: 250,
//     });

//     scanner.render(async (decodedText) => {
//       setProductSN(decodedText);
//       document.getElementById("qr-reader-results").innerText = `Scanned: ${decodedText}`;

//       try {
//         const response = await axios.post("http://localhost:5000/api/verify-product", {
//           productSN: decodedText,
//         });

//         if (response.data.exists) {
//           setStatus("✅ Product is Genuine.");
//         } else {
//           setStatus("❌ Product not found or invalid.");
//         }
//       } catch (error) {
//         console.error("Verification error:", error.message);
//         setStatus("❌ Error verifying product.");
//       }
//     });
//   }, []);

//   const handleSell = async () => {
//     if (!productSN || !consumerCode) {
//       alert("Please scan a product and enter consumer code.");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/api/sell-product1", {
//         productSN,
//         consumerCode,
//       });

//       if (res.data.success) {
//         alert("✅ Product sold successfully.");
//         setConsumerCode("");
//         setStatus("");
//       } else {
//         alert("❌ Failed to sell product.");
//       }
//     } catch (err) {
//       console.error("Sell error:", err.message);
//       alert("❌ Error while sending data to backend.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h2 className="text-2xl font-bold text-center mb-6">Sell Product to Consumer</h2>

//       <div className="flex justify-center mb-4">
//         <div id="qr-reader" className="w-72" />
//       </div>
//       <div id="qr-reader-results" className="text-center text-sm text-gray-600 mb-2"></div>
//       <div className="text-center text-md font-medium mb-6 text-green-600">{status}</div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Product SN:</label>
//           <input
//             type="text"
//             value={productSN}
//             disabled
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Consumer Code:</label>
//           <input
//             type="text"
//             value={consumerCode}
//             onChange={(e) => setConsumerCode(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <button
//           onClick={handleSell}
//           className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
//         >
//           Sell to Consumer
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SellProductSeller;
//updated code ------- ----------->

import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from "axios";
import Swal from "sweetalert2"; // ✅ import SweetAlert2

const SellProductSeller = () => {
  const [productSN, setProductSN] = useState("");
  const [consumerCode, setConsumerCode] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: 250,
    });

    scanner.render(async (decodedText) => {
      setProductSN(decodedText);
      document.getElementById("qr-reader-results").innerText = `Scanned: ${decodedText}`;

      try {
        const response = await axios.post("https://product-verification-system.onrender.com/api/verify-product", {
          productSN: decodedText,
        });

        if (response.data.exists) {
          setStatus("✅ Product is Genuine.");
        } else {
          setStatus("❌ Product not found or invalid.");
        }
      } catch (error) {
        console.error("Verification error:", error.message);
        setStatus("❌ Error verifying product.");
      }
    });
  }, []);

  const handleSell = async () => {
    if (!productSN || !consumerCode) {
      Swal.fire({
        title: "Warning ⚠️",
        text: "Please scan a product and enter consumer code.",
        icon: "warning",
        confirmButtonColor: "#f59e0b",
      });
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/sell-product1", {
        productSN,
        consumerCode,
      });

      if (res.data.success) {
        Swal.fire({
          title: "Success 🎉",
          text: "✅ Product sold successfully to consumer.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
        setConsumerCode("");
        setStatus("");
      } else {
        Swal.fire({
          title: "Failed ❌",
          text: "Could not sell product. Please try again.",
          icon: "error",
          confirmButtonColor: "#d33",
        });
      }
    } catch (err) {
      console.error("Sell error:", err.message);
      Swal.fire({
        title: "Server Error ❌",
        text: "Error while sending data to backend.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Sell Product to Consumer</h2>

      <div className="flex justify-center mb-4">
        <div id="qr-reader" className="w-72" />
      </div>
      <div id="qr-reader-results" className="text-center text-sm text-gray-600 mb-2"></div>
      <div className="text-center text-md font-medium mb-6 text-green-600">{status}</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Product SN:</label>
          <input
            type="text"
            value={productSN}
            disabled
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Consumer Code:</label>
          <input
            type="text"
            value={consumerCode}
            onChange={(e) => setConsumerCode(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSell}
          className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Sell to Consumer
        </button>
      </div>
    </div>
  );
};

export default SellProductSeller;
