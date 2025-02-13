import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // For icons
import { FiDownload } from "react-icons/fi"; // Download icon
import DarkModeToggle from "./ToggleButton";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const isHomePage = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-6 py-4 shadow-lg z-50 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-white text-2xl font-bold"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg">
            <p className="text-blue-600 font-bold">DB</p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
          {!isHomePage && (
            <div className="hidden md:block">
              <DarkModeToggle />
            </div>
          )}
          {["About", "Projects", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-blue-400 after:rounded-full"
                  : "text-gray-300 hover:text-blue-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-blue-300 hover:after:w-full after:transition-all after:duration-300"
              }
            >
              {item}
            </NavLink>
          ))}

          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1gy1qNTmWaQ36PFICkdiIWgqDNJzWACM7"
            download="Dev_Bhattacharya_Resume.pdf"
            className="relative inline-flex items-center gap-3 px-6 py-3 text-sm md:text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #9333ea)",
              borderImageSlice: 1,
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-50 blur-md"></div>
            <FiDownload className="text-xl transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:scale-110" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Dark Mode Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {!isHomePage && <DarkModeToggle />}
          {/* Mobile Menu Toggle */}
          <button
            className="text-white text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-gray-900 bg-opacity-80 backdrop-blur-md transition-opacity duration-500"
            onClick={toggleMenu} // Closes menu when the background is clicked
          ></div>

          {/* Menu Content */}
          <div className="relative flex flex-col bg-black">
            {/* Close Button */}
            <button
              className="text-white text-3xl self-end p-4 hover:text-red-500 transition-transform transform hover:rotate-90"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <FiX />
            </button>

            {/* Navigation Menu */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col items-center gap-8"
              style={{ background: "black", padding: "20px" }}
            >
              {["About", "Projects", "Contact"].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive
                      ? "w-10/12 text-center py-3 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 font-bold shadow-lg"
                      : "w-10/12 text-center py-3 rounded-full text-gray-200 bg-gray-800 hover:bg-gradient-to-r from-blue-400 to-blue-600 font-medium shadow-md transition-all"
                  }
                  onClick={toggleMenu}
                >
                  {item}
                </NavLink>
              ))}

              {/* Resume Button */}
              <a
                href="https://drive.google.com/uc?export=download&id=1gy1qNTmWaQ36PFICkdiIWgqDNJzWACM7"
                download="Dev_Bhattacharya_Resume.pdf"
                className="relative w-10/12 text-center py-3 rounded-full text-white font-bold shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-teal-600 before:absolute before:inset-0 before:rounded-full before:opacity-40 before:blur-md before:bg-gradient-to-r before:from-green-500 before:to-teal-600 before:transition-opacity before:duration-300 hover:before:opacity-80"
              >
                <FiDownload className="inline-block mr-2 text-xl" />
                Download Resume
              </a>
            </motion.nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
