// import { useEffect, useState, useRef } from "react";
// import Web3 from "web3";
// import { Link } from "react-router-dom";
// import BackgroundImage from "./assets/Home.jpg";
// import Logo from "./assets/logo.svg";

// const fullText = "Welcome to the Product Verification System";
// const typingSpeed = 100;
// const pauseBeforeErase = 1200;
// const eraseSpeed = 60;

// export default function Home() {
//   const [account, setAccount] = useState(null);
//   const [text, setText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [charIndex, setCharIndex] = useState(0);
//   const hasAlerted = useRef(false);

//   useEffect(() => {
//     if (!hasAlerted.current) {
//       if (!window.ethereum) {
//         alert("🦊 MetaMask not detected. Please install MetaMask to use this app.");
//       } else {
//         window.web3 = new Web3(window.ethereum);
//       }
//       hasAlerted.current = true;
//     }
//   }, []);

//   useEffect(() => {
//     let timer;
//     if (!isDeleting && charIndex === fullText.length) {
//       timer = setTimeout(() => setIsDeleting(true), pauseBeforeErase);
//     } else if (isDeleting && charIndex === 0) {
//       timer = setTimeout(() => setIsDeleting(false), 600);
//     } else {
//       timer = setTimeout(() => {
//         if (!isDeleting) {
//           setText((prev) => prev + fullText.charAt(charIndex));
//           setCharIndex((prev) => prev + 1);
//         } else {
//           setText((prev) => prev.slice(0, -1));
//           setCharIndex((prev) => prev - 1);
//         }
//       }, isDeleting ? eraseSpeed : typingSpeed);
//     }

//     return () => clearTimeout(timer);
//   }, [charIndex, isDeleting]);

//   const connectWallet = async () => {
//     try {
//       const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//       setAccount(accounts[0]);
//       console.log("Connected wallet:", accounts[0]);
//     } catch (error) {
//       console.error("Wallet connection failed:", error);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex flex-col text-white bg-cover bg-center bg-no-repeat relative"
//       style={{ backgroundImage: `url(${BackgroundImage})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-800/80 z-0" />

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col flex-1">
//         {/* Navbar */}
//         <nav className="bg-gray-900 py-5 shadow-md sticky top-0 z-50">
//           <div className="container mx-auto flex justify-between items-center px-4">
//             <Link to="/" className="flex items-center space-x-3">
//               <img src={Logo} alt="Logo" className="w-10 h-10 inline-block" />
//               <span className="text-xl font-bold text-white">Product Verification System</span>
//             </Link>
//             <div className="flex space-x-4">
//               <Link to="/" className="text-white font-semibold hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 px-4 py-2 transition">Home</Link>
//               <Link to="/manufacturer" className="text-white font-semibold hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 px-4 py-2 transition">Manufacturer</Link>
//               <Link to="/seller" className="text-white font-semibold hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 px-4 py-2 transition">Seller</Link>
//               <Link to="/consumer" className="text-white font-semibold hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 px-4 py-2 transition">Consumer</Link>
//             </div>
//           </div>
//         </nav>

//         {/* Hero Section */}
//         <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-6 leading-tight">
//             {text}
//             <span className="border-r-2 border-white animate-pulse ml-1" />
//           </h1>

//           <p className="text-lg md:text-xl mb-8 max-w-2xl text-center font-bold animate-colorCycle">
//             Ensure the authenticity of your products using Blockchain technology. Join us in making the world a safer place for consumers!
//           </p>

//           <style>
//             {`
//               @keyframes colorCycle {
//                 0%   { color: #facc15; text-shadow: 0 0 4px #facc15; opacity: 0.6; }
//                 33%  { color: #ffffff; text-shadow: 0 0 12px #ffffff; opacity: 1; }
//                 66%  { color: #00ffd1; text-shadow: 0 0 8px #00ffd1; opacity: 0.8; }
//                 100% { color: #facc15; text-shadow: 0 0 4px #facc15; opacity: 0.6; }
//               }
//               .animate-colorCycle {
//                 animation: colorCycle 3s infinite ease-in-out;
//                 font-weight: bold;
//               }
//             `}
//           </style>

//           <div className="flex flex-col md:flex-row gap-4">
//             <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold uppercase">Get Started</Link>
//             <Link to="/register" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold uppercase">Register to Verify</Link>
//           </div>

//           <button
//             onClick={connectWallet}
//             className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded"
//           >
//             {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
//           </button>
//         </section>

//         {/* Social Media Icons */}
//         <div className="flex justify-center gap-6 text-2xl my-6">
//           <i className="fa fa-facebook hover:text-yellow-400 cursor-pointer"></i>
//           <i className="fa fa-twitter hover:text-yellow-400 cursor-pointer"></i>
//           <i className="fa fa-linkedin hover:text-yellow-400 cursor-pointer"></i>
//           <i className="fa fa-instagram hover:text-yellow-400 cursor-pointer"></i>
//         </div>

//         {/* Footer */}
//         <footer className="bg-gray-900 text-center text-sm py-4">
//           &copy; 2025 Product Verification System |{" "}
//           <Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link> |{" "}
//           <Link to="/terms-of-service" className="hover:text-blue-400">Terms of Service</Link>
//         </footer>
//       </div>
//     </div>
//   );
// }

//updated --->------------------->
// import { useEffect, useState, useRef } from "react";
// import Web3 from "web3";
// import { Link } from "react-router-dom";
// import BackgroundImage from "./assets/Home.jpg";
// import Navbar from "./Navbar"; // ✅ Imported new Navbar

// const fullText = "Welcome to the Product Verification System";
// const typingSpeed = 100;
// const pauseBeforeErase = 1200;
// const eraseSpeed = 60;

// export default function Home() {
//   const [account, setAccount] = useState(null);
//   const [text, setText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [charIndex, setCharIndex] = useState(0);
//   const hasAlerted = useRef(false);

//   useEffect(() => {
//     if (!hasAlerted.current) {
//       if (!window.ethereum) {
//         alert("🦊 MetaMask not detected. Please install MetaMask to use this app.");
//       } else {
//         window.web3 = new Web3(window.ethereum);
//       }
//       hasAlerted.current = true;
//     }
//   }, []);

//   useEffect(() => {
//     let timer;
//     if (!isDeleting && charIndex === fullText.length) {
//       timer = setTimeout(() => setIsDeleting(true), pauseBeforeErase);
//     } else if (isDeleting && charIndex === 0) {
//       timer = setTimeout(() => setIsDeleting(false), 600);
//     } else {
//       timer = setTimeout(() => {
//         if (!isDeleting) {
//           setText((prev) => prev + fullText.charAt(charIndex));
//           setCharIndex((prev) => prev + 1);
//         } else {
//           setText((prev) => prev.slice(0, -1));
//           setCharIndex((prev) => prev - 1);
//         }
//       }, isDeleting ? eraseSpeed : typingSpeed);
//     }

//     return () => clearTimeout(timer);
//   }, [charIndex, isDeleting]);

//   const connectWallet = async () => {
//     try {
//       const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//       setAccount(accounts[0]);
//       console.log("Connected wallet:", accounts[0]);
//     } catch (error) {
//       console.error("Wallet connection failed:", error);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex flex-col text-white bg-cover bg-center bg-no-repeat relative"
//       style={{ backgroundImage: `url(${BackgroundImage})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-800/80 z-0" />

//       <div className="relative z-10 flex flex-col flex-1">
//         {/* ✅ Use Navbar */}
//         <Navbar />

//         {/* Hero Section */}
//         <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-6 leading-tight">
//             {text}
//             <span className="border-r-2 border-white animate-pulse ml-1" />
//           </h1>

//           <p className="text-lg md:text-xl mb-8 max-w-2xl text-center font-bold animate-colorCycle">
//            Ensure the authenticity of your products. Join us in making the world a safer place for consumers!
//           </p>

//           <style>
//             {`
//               @keyframes colorCycle {
//                 0%   { color: #facc15; text-shadow: 0 0 4px #facc15; opacity: 0.6; }
//                 33%  { color: #ffffff; text-shadow: 0 0 12px #ffffff; opacity: 1; }
//                 66%  { color: #00ffd1; text-shadow: 0 0 8px #00ffd1; opacity: 0.8; }
//                 100% { color: #facc15; text-shadow: 0 0 4px #facc15; opacity: 0.6; }
//               }
//               .animate-colorCycle {
//                 animation: colorCycle 3s infinite ease-in-out;
//                 font-weight: bold;
//               }
//             `}
//           </style>

//           <div className="flex flex-col md:flex-row gap-4">
//             <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold uppercase">Get Started</Link>
//             <Link to="/register" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold uppercase">Register to Verify</Link>
//           </div>

//           <button
//             onClick={connectWallet}
//             className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded"
//           >
//             {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
//           </button>
//         </section>

//         {/* Social Media Icons */}
//         <div className="flex justify-center gap-6 text-2xl my-6">
//           <i className="fa fa-facebook hover:text-yellow-400 cursor-pointer"></i>
//           <i className="fa fa-twitter hover:text-yellow-400 cursor-pointer"></i>
//           <i className="fa fa-linkedin hover:text-yellow-400 cursor-pointer"></i>
//           <i className="fa fa-instagram hover:text-yellow-400 cursor-pointer"></i>
//         </div>
          

//         {/* Footer */}
//         <footer className="bg-gray-900 text-center text-sm py-4">
//           &copy; 2025 Product Verification System |{" "}
//           <Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link> |{" "}
//           <Link to="/terms-of-service" className="hover:text-blue-400">Terms of Service</Link>
//         </footer>
//       </div>
//     </div>
//   );
// }
//------------> 
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import BackgroundImage from "./assets/Home.jpg";
// import Navbar from "./Navbar";

// const fullText = "Welcome to the Product Verification System";
// const typingSpeed = 100;
// const pauseBeforeErase = 1200;
// const eraseSpeed = 60;

// export default function Home() {
//   const [text, setText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // ✅ Check login token
//     const token = localStorage.getItem("token");
//     if (token) setIsLoggedIn(true);
//   }, []);

//   // ✅ Typing animation
//   useEffect(() => {
//     let timer;
//     if (!isDeleting && charIndex === fullText.length) {
//       timer = setTimeout(() => setIsDeleting(true), pauseBeforeErase);
//     } else if (isDeleting && charIndex === 0) {
//       timer = setTimeout(() => setIsDeleting(false), 600);
//     } else {
//       timer = setTimeout(() => {
//         if (!isDeleting) {
//           setText((prev) => prev + fullText.charAt(charIndex));
//           setCharIndex((prev) => prev + 1);
//         } else {
//           setText((prev) => prev.slice(0, -1));
//           setCharIndex((prev) => prev - 1);
//         }
//       }, isDeleting ? eraseSpeed : typingSpeed);
//     }

//     return () => clearTimeout(timer);
//   }, [charIndex, isDeleting]);

//   return (
//     <div
//       className="min-h-screen flex flex-col text-white bg-cover bg-center bg-no-repeat relative"
//       style={{ backgroundImage: `url(${BackgroundImage})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-800/80 z-0" />

//       <div className="relative z-10 flex flex-col flex-1">
//         {/* ✅ Show Navbar only if logged in */}
//         {isLoggedIn && <Navbar />}

//         {/* Hero Section */}
//         <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-6 leading-tight">
//             {text}
//             <span className="border-r-2 border-white animate-pulse ml-1" />
//           </h1>

//           <p className="text-lg md:text-xl mb-8 max-w-2xl text-center font-bold animate-colorCycle">
//             Ensure the authenticity of your products. Join us in making the world a safer place for consumers!
//           </p>

//           <style>
//             {`
//               @keyframes colorCycle {
//                 0%   { color: #facc15; text-shadow: 0 0 4px #facc15; opacity: 0.6; }
//                 33%  { color: #ffffff; text-shadow: 0 0 12px #ffffff; opacity: 1; }
//                 66%  { color: #00ffd1; text-shadow: 0 0 8px #00ffd1; opacity: 0.8; }
//                 100% { color: #facc15; text-shadow: 0 0 4px #facc15; opacity: 0.6; }
//               }
//               .animate-colorCycle {
//                 animation: colorCycle 3s infinite ease-in-out;
//                 font-weight: bold;
//               }
//             `}
//           </style>

//           {/* ✅ Show buttons only if NOT logged in */}
//           {!isLoggedIn && (
//             <div className="flex flex-col md:flex-row gap-4">
//               <Link
//                 to="/login"
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold uppercase"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold uppercase"
//               >
//                 Register
//               </Link>
//             </div>
//           )}
//         </section>

//         {/* Social Media Icons */}
//         <div className="flex justify-center gap-6 text-2xl my-6">
//           <i className="fa fa-facebook hover:text-yellow-400 cursor-pointer"></i>
//           <i className="fa fa-twitter hover:text-yellow-400 cursor-pointer"></i>
//           <i className="fa fa-linkedin hover:text-yellow-400 cursor-pointer"></i>
//           <i className="fa fa-instagram hover:text-yellow-400 cursor-pointer"></i>
//         </div>

//         {/* Footer */}
//         <footer className="bg-gray-900 text-center text-sm py-4">
//           &copy; 2025 Product Verification System |{" "}
//           <Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link> |{" "}
//           <Link to="/terms-of-service" className="hover:text-blue-400">Terms of Service</Link>
//         </footer>
//       </div>
//     </div>
//   );
// }
//-----------------------------------------------


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "./assets/Home.jpg";
import Navbar from "./Navbar";

const fullText = "Welcome to the Product Verification System";
const typingSpeed = 100;
const pauseBeforeErase = 1200;
const eraseSpeed = 60;

export default function Home() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // ✅ Check login token
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  // ✅ Typing animation
  useEffect(() => {
    let timer;
    if (!isDeleting && charIndex === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), pauseBeforeErase);
    } else if (isDeleting && charIndex === 0) {
      timer = setTimeout(() => setIsDeleting(false), 600);
    } else {
      timer = setTimeout(() => {
        if (!isDeleting) {
          setText((prev) => prev + fullText.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }
      }, isDeleting ? eraseSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting]);

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.reload(); // reload page after logout
  };

  return (
    <div
      className="min-h-screen flex flex-col text-white bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-800/80 z-0" />

      <div className="relative z-10 flex flex-col flex-1">
        {/* ✅ Show Navbar only if logged in */}
        {isLoggedIn && (
          <div className="relative">
            <Navbar />
            {/* Logout button just below right of Navbar */}
            <div className="flex justify-end pr-6 mt-2">
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-6 leading-tight">
            {text}
            <span className="border-r-2 border-white animate-pulse ml-1" />
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl text-center font-bold animate-colorCycle">
            Ensure the authenticity of your products. Join us in making the world a safer place for consumers!
          </p>

          <style>
            {`
              @keyframes colorCycle {
                0%   { color: #facc15; text-shadow: 0 0 4px #facc15; opacity: 0.6; }
                33%  { color: #ffffff; text-shadow: 0 0 12px #ffffff; opacity: 1; }
                66%  { color: #00ffd1; text-shadow: 0 0 8px #00ffd1; opacity: 0.8; }
                100% { color: #facc15; text-shadow: 0 0 4px #facc15; opacity: 0.6; }
              }
              .animate-colorCycle {
                animation: colorCycle 3s infinite ease-in-out;
                font-weight: bold;
              }
            `}
          </style>

          {/* ✅ Show buttons only if NOT logged in */}
          {!isLoggedIn && (
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold uppercase"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold uppercase"
              >
                Register
              </Link>
            </div>
          )}
        </section>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 text-2xl my-6">
          <i className="fa fa-facebook hover:text-yellow-400 cursor-pointer"></i>
          <i className="fa fa-twitter hover:text-yellow-400 cursor-pointer"></i>
          <i className="fa fa-linkedin hover:text-yellow-400 cursor-pointer"></i>
          <i className="fa fa-instagram hover:text-yellow-400 cursor-pointer"></i>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-center text-sm py-4">
          &copy; 2025 Product Verification System |{" "}
          <Link to="/privacy-policy" className="hover:text-blue-400">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms-of-service" className="hover:text-blue-400">
            Terms of Service
          </Link>
        </footer>
      </div>
    </div>
  );
}
