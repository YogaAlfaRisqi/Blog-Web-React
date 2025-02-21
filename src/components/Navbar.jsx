import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Book,
  PlayCircle,
  // Home
} from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-1 font-medium text-gray-800 dark:text-white hover:text-blue-500">
        {title}
        <ChevronDown size={16} />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 border dark:border-gray-700">
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Cek perubahan scroll untuk efek navbar transparan
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-4 z-50 transition-all ${
        isScrolled
          ? "bg-white/10 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center justify-start space-x-8">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600 dark:text-white">
            TechUpdate
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-white">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
                Category <ChevronDown size={16} />
              </div>
              <ul className="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-md rounded-md text-gray-700 dark:text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50">
                {["Trending", "New Arrivals", "Categories"].map(
                  (item, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-blue-600">
                      <a href="#">{item}</a>
                    </li>
                  )
                )}
              </ul>
            </li>
            <li>
              <Link
                to="/artikel"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <Book size={18} />
                Artikel
              </Link>
            </li>
            <li>
              <Link
                to="tutorial"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <PlayCircle size={18} /> Tutorial
              </Link>
            </li>
          </ul>
        </div>

        {/* Dark Mode Toggle + Login & Signup Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle/>
          {/* Login & Signup */}
          <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
            Login
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-white ml-auto"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-2 shadow-lg transition-all duration-300 transform translate-y-0">
          <ul className="text-left space-y-4 text-gray-700 dark:text-white px-4">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full hover:text-blue-500 transition-colors duration-200"
              >
                Category{" "}
                <ChevronDown
                  size={16}
                  className={`transform transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <ul className="mt-2 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-700 dark:text-white transition-all duration-300 transform scale-95 origin-top">
                  {["Trending", "New Arrivals", "Categories"].map(
                    (item, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors duration-200"
                      >
                        <a href="#">{item}</a>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-200"
              >
                <Book size={18} /> Artikel
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-200"
              >
                <PlayCircle size={18} /> Tutorial
              </a>
            </li>
          </ul>

          {/* Tombol Login & Sign Up */}
          <div className="mt-4 px-4 space-y-4">
            <button className="w-full py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-200">
              Login
            </button>
            <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200">
              Sign Up
            </button>
          </div>

          {/* Dark Mode Toggle (Mobile) */}
          <div className="mt-4 px-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full py-2 border rounded-md text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
