import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between bg-gray-900/80 backdrop-blur-md px-6 py-4 z-50">
      {/* Logo */}
      <NavLink
        to="/"
        className="w-12 h-12 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="text-blue-600">DB</p>
      </NavLink>

      {/* Navigation Links */}
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : "text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : "text-white"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : "text-white"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
