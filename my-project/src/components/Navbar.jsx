import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // For icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

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
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col items-center gap-4 text-lg font-medium bg-gray-800 py-4 rounded-lg">
          {["About", "Projects", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-blue-300 transition-colors"
              }
              onClick={toggleMenu} // Close menu on link click
            >
              {item}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
