import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "./assets/ConsumerHome.jpg"; // Make sure the path is correct

export default function ConsumerHome() {
  const fullText = "Product Verification System";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [consumerInfo, setConsumerInfo] = useState(null);

  // Typing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index % (fullText.length + 1)));
      setIndex((prev) => prev + 1);
    }, 150);
    return () => clearInterval(interval);
  }, [index]);

  // MetaMask detection
  useEffect(() => {
    if (typeof window.ethereum === "undefined") {
      alert(
        "MetaMask is not installed. Please install it to use this application."
      );
    }
  }, []);

  // Fetch consumer info
  useEffect(() => {
    const fetchConsumerInfo = async () => {
      try {
        const response = await fetch("https://product-verification-system.onrender.com/api/consumer/info");
        const data = await response.json();
        setConsumerInfo(data);
      } catch (error) {
        console.error("Error fetching consumer info:", error);
      }
    };
    fetchConsumerInfo();
  }, []);

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Background image */}
      <img
        src={BackgroundImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0" />

      {/* Inline animations */}
      <style>
        {`
          @keyframes colorBlink {
            0% { color: #ff69b4; text-shadow: 0 0 6px #ff69b4; }
            50% { color: #00bfff; text-shadow: 0 0 10px #00bfff; }
            100% { color: #ff69b4; text-shadow: 0 0 6px #ff69b4; }
          }

          @keyframes fadeBlink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          .shining-blink {
            animation: colorBlink 3s infinite ease-in-out, fadeBlink 3s infinite ease-in-out;
            font-weight: 800;
          }

          .gradient-animate {
            background: linear-gradient(270deg, #ff69b4, #00bfff, #ff69b4);
            background-size: 600% 600%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientShift 6s ease infinite;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* Top Navbar */}
      <div className="relative z-10 bg-black bg-opacity-70 shadow py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          Product Verification System{" "}
          <span className="text-sm text-gray-300">using Secure Digital Ledger Technology</span>
        </h1>
        {consumerInfo && (
          <span className="text-sm text-gray-200">
            Welcome, {consumerInfo.name}
          </span>
        )}
      </div>

      {/* Main Navbar */}
      <nav className="relative z-10 bg-black shadow-md sticky top-0">
        <div className="container mx-auto px-6 py-4">
          <ul className="flex space-x-8 justify-center">
            <li>
              <Link
                to="/"
                className="text-white font-semibold hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 px-4 py-2 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/consumer-history"
                className="text-white font-semibold hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 px-4 py-2 transition"
              >
                Consumer Purchase History
              </Link>
            </li>
            <li>
              <Link
                to="/verify-product"
                className="text-white font-semibold hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 px-4 py-2 transition"
              >
                Product Verification
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Typing Title */}
      <div className="relative z-10 text-center mt-12 px-4">
        <h1 className="text-5xl font-extrabold leading-tight h-20 gradient-animate">
          {displayText}
          <span className="animate-pulse text-white">|</span>
        </h1>
        <p className="text-xl text-white mt-2">
          using Secure Digital Ledger Technology
        </p>
      </div>

      {/* Consumer Info */}
      <section className="relative z-10 container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl shining-blink mb-4">Welcome, Consumer</h2>
        <h3 className="text-lg text-white">
          Use the navigation bar above to verify products or view your purchase
          history.
        </h3>
        <div className="mt-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1532/1532637.png"
            alt="Consumer Icon"
            className="mx-auto w-24 h-24 opacity-90"
          />
        </div>
      </section>
    </div>
  );
}
