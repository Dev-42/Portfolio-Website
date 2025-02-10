import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contact";
import Navbar from "./components/Navbar";
import { HelmetProvider } from "react-helmet-async";
import DarkModeToggle from "./components/ToggleButton";

const App = () => {
  return (
    <HelmetProvider>
      <main className="bg-slate-300/20 min-h-screen">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contacts />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </HelmetProvider>
  );
};

export default App;
