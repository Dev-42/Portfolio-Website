import { createContext, useState, useEffect, useContext } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("darkMode")) || true
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider
      value={{ isDarkMode, toggleDarkMode: () => setIsDarkMode(!isDarkMode) }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
