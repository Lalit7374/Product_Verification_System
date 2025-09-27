import { Link } from "react-router-dom";
import Logo from "./assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-5 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="w-10 h-10 inline-block" />
          <span className="text-xl font-bold text-white">Product Verification System</span>
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-white font-semibold hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 px-4 py-2 transition">Home</Link>
          <Link to="/manufacturer" className="text-white font-semibold hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 px-4 py-2 transition">Manufacturer</Link>
          <Link to="/seller" className="text-white font-semibold hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 px-4 py-2 transition">Seller</Link>
          <Link to="/consumer" className="text-white font-semibold hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 px-4 py-2 transition">Consumer</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
