// ✅ Header.jsx
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useState } from 'react'; // You might not need useState here anymore

// import LogoSVG from './assets/logo.svg'; // Assuming you have an SVG logo

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="p-4 flex justify-between items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900">
      <Link to="/" className="text-xl font-bold flex items-center space-x-2 text-white dark:text-gray-900">
        {/* <img src={LogoSVG} alt="Crypto Tracker Logo" className="w-8 h-8" /> */}
        <img src="/favicon.png" alt="Crypto Tracker Logo" className="w-8 h-8" />
        <span>Crypto Tracker</span>
      </Link>

      <nav className="hidden md:flex space-x-4"> {/* Desktop Navigation */}
        <Link to="/" className="hover:text-cyan-400 transition duration-200 text-white dark:text-gray-900">
          Home
        </Link>
        <Link to="/about" className="hover:text-cyan-400 transition duration-200 text-white dark:text-gray-900">
          About
        </Link>
        <ThemeToggle /> {/* Use your existing ThemeToggle */}
      </nav>

      {/* Mobile Navigation Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none text-white dark:text-gray-900">
          {/* You can use an icon here (e.g., hamburger menu) */}
          ☰
        </button>
      </div>

      {/* Mobile Navigation Menu (you'll need to style this) */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 dark:bg-white shadow-md z-10">
          <Link to="/" className="block p-4 hover:text-cyan-400 transition duration-200 text-white dark:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="block p-4 hover:text-cyan-400 transition duration-200 text-white dark:text-gray-900">
            About
          </Link>
          <div className="p-4">
            <ThemeToggle /> {/* Use your existing ThemeToggle */}
          </div>
          {/* Add more mobile links here if needed */}
        </div>
      )}
    </header>
  );
};

export default Header;