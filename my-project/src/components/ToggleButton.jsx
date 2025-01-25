// ToggleButton.js
import React from "react";
import { useDarkMode } from "../Context/dark/DarkModeContext";
import { Moon, Sun } from "lucide-react"; // Icons for visual feedback

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow hover:scale-105 transition-transform"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <Sun className="text-yellow-500 w-6 h-6" />
      ) : (
        <Moon className="text-gray-700 dark:text-gray-300 w-6 h-6" />
      )}
    </button>
  );
};

export default DarkModeToggle;
