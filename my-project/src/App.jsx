import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contact";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <main className="bg-slate-300/20 v-[100vh]">
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
  );
};

export default App;
