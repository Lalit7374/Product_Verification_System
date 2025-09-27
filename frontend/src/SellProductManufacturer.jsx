// import React, { useEffect } from 'react';
// import { Html5QrcodeScanner } from 'html5-qrcode';
// import { Link } from 'react-router-dom';

// const SellProductManufacturer = () => {
//   useEffect(() => {
//     const qrScanner = new Html5QrcodeScanner('qr-reader', { fps: 10, qrbox: 250 });

//     const onScanSuccess = (decodedText) => {
//       const audio = new Audio('/beep.wav');
//       audio.play();

//       document.getElementById('qr-reader-results').innerText = decodedText;
//       document.getElementById('productSN').value = decodedText;
//     };

//     qrScanner.render(onScanSuccess);

//     // Cleanup on unmount
//     return () => {
//       qrScanner.clear().catch(error => console.error('QR Scanner cleanup failed', error));
//     };
//   }, []);

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
//               <Link to="/manufacturer" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Manufacturer</Link>
//               <Link to="/seller" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Seller</Link>
//               <Link to="/consumer" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Consumer</Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <section className="py-10">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Sell Product to Seller</h2>

//           <div className="flex justify-center mb-6">
//             <div id="qr-reader" className="w-72" />
//           </div>
//           <div id="qr-reader-results" className="text-center text-lg font-semibold text-green-600 mb-6"></div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div>
//               <label htmlFor="productSN" className="block text-gray-700 font-medium mb-1">Product SN:</label>
//               <input type="text" id="productSN" className="w-full p-2 border rounded" disabled />
//             </div>
//             <div>
//               <label htmlFor="sellerCode" className="block text-gray-700 font-medium mb-1">Seller Code:</label>
//               <input type="text" id="sellerCode" className="w-full p-2 border rounded" />
//             </div>
//           </div>

//           <button id="register" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded">
//             Sell to Seller
//           </button>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SellProductManufacturer;

//updated ---->-----------------------
// import React, { useEffect, useState } from 'react';
// import { Html5QrcodeScanner } from 'html5-qrcode';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const SellProductManufacturer = () => {
//   const [productSN, setProductSN] = useState('');
//   const [sellerCode, setSellerCode] = useState('');
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const qrScanner = new Html5QrcodeScanner('qr-reader', { fps: 10, qrbox: 250 });

//     const onScanSuccess = (decodedText) => {
//       const audio = new Audio('/beep.wav');
//       audio.play();

//       setProductSN(decodedText);
//       setMessage(`Scanned: ${decodedText}`);
//     };

//     qrScanner.render(onScanSuccess);

//     return () => {
//       qrScanner.clear().catch(error => console.error('QR Scanner cleanup failed', error));
//     };
//   }, []);

//   const handleSell = async () => {
//     if (!productSN || !sellerCode) {
//       setMessage('Please scan product and enter seller code');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/sell-product', {
//         productSN,
//         sellerCode
//       });

//       if (response.data.success) {
//         setMessage('✅ Product sold successfully and stored in MongoDB');
//         setSellerCode('');
//       } else {
//         setMessage('❌ Failed to sell product');
//       }
//     } catch (error) {
//       console.error('Error while selling product:', error);
//       setMessage('❌ Server error while selling product');
//     }
//   };

//   return (
//     <>
//       <header className="bg-white shadow">
//         <div className="container mx-auto px-4 py-6 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Product Verification System <span className="block text-sm text-gray-500"></span>
//           </h1>
//         </div>
//       </header>

//       <nav className="bg-gray-800">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between py-3">
//             <div className="flex space-x-4">
//               <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
//               <Link to="/manufacturer" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Manufacturer</Link>
//               <Link to="/seller" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Seller</Link>
//               <Link to="/consumer" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Consumer</Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <section className="py-10">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Sell Product to Seller</h2>

//           <div className="flex justify-center mb-6">
//             <div id="qr-reader" className="w-72" />
//           </div>

//           {message && (
//             <div className="text-center text-lg font-semibold text-green-600 mb-6">
//               {message}
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div>
//               <label htmlFor="productSN" className="block text-gray-700 font-medium mb-1">Product SN:</label>
//               <input
//                 type="text"
//                 id="productSN"
//                 value={productSN}
//                 className="w-full p-2 border rounded"
//                 disabled
//               />
//             </div>
//             <div>
//               <label htmlFor="sellerCode" className="block text-gray-700 font-medium mb-1">Seller Code:</label>
//               <input
//                 type="text"
//                 id="sellerCode"
//                 value={sellerCode}
//                 onChange={(e) => setSellerCode(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//           </div>

//           <button
//             onClick={handleSell}
//             className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded"
//           >
//             Sell to Seller
//           </button>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SellProductManufacturer;

//---updated ----------------------------------------------------

import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; // ✅ import SweetAlert2

const SellProductManufacturer = () => {
  const [productSN, setProductSN] = useState('');
  const [sellerCode, setSellerCode] = useState('');

  useEffect(() => {
    const qrScanner = new Html5QrcodeScanner('qr-reader', { fps: 10, qrbox: 250 });

    const onScanSuccess = (decodedText) => {
      const audio = new Audio('/beep.wav');
      audio.play();

      setProductSN(decodedText);

      // ✅ Popup on scan
      Swal.fire({
        title: "Scanned!",
        text: `Product SN: ${decodedText}`,
        icon: "info",
        confirmButtonColor: "#3085d6"
      });
    };

    qrScanner.render(onScanSuccess);

    return () => {
      qrScanner.clear().catch(error => console.error('QR Scanner cleanup failed', error));
    };
  }, []);

  const handleSell = async () => {
    if (!productSN || !sellerCode) {
      Swal.fire({
        title: "Warning",
        text: "Please scan product and enter seller code",
        icon: "warning",
        confirmButtonColor: "#f59e0b"
      });
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/sell-product', {
        productSN,
        sellerCode
      });

      if (response.data.success) {
        Swal.fire({
          title: "Success!",
          text: "✅ Product sold successfully and stored in MongoDB",
          icon: "success",
          confirmButtonColor: "#3085d6"
        });
        setSellerCode('');
      } else {
        Swal.fire({
          title: "Failed",
          text: "❌ Failed to sell product",
          icon: "error",
          confirmButtonColor: "#d33"
        });
      }
    } catch (error) {
      console.error('Error while selling product:', error);
      Swal.fire({
        title: "Server Error",
        text: "❌ Error while selling product",
        icon: "error",
        confirmButtonColor: "#d33"
      });
    }
  };

  return (
    <>
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Product Verification System <span className="block text-sm text-gray-500"></span>
          </h1>
        </div>
      </header>

      <nav className="bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex space-x-4">
              <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
              <Link to="/manufacturer" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Manufacturer</Link>
              <Link to="/seller" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Seller</Link>
              <Link to="/consumer" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Consumer</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sell Product to Seller</h2>

          <div className="flex justify-center mb-6">
            <div id="qr-reader" className="w-72" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="productSN" className="block text-gray-700 font-medium mb-1">Product SN:</label>
              <input
                type="text"
                id="productSN"
                value={productSN}
                className="w-full p-2 border rounded"
                disabled
              />
            </div>
            <div>
              <label htmlFor="sellerCode" className="block text-gray-700 font-medium mb-1">Seller Code:</label>
              <input
                type="text"
                id="sellerCode"
                value={sellerCode}
                onChange={(e) => setSellerCode(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <button
            onClick={handleSell}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded"
          >
            Sell to Seller
          </button>
        </div>
      </section>
    </>
  );
};

export default SellProductManufacturer;

