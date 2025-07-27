import { Route, Routes } from "react-router-dom";
import { CiDark } from "react-icons/ci";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";

import CartPage from "./pages/cartPage";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={
          theme === "light"
            ? "bg-white text-dark min-vh-100"
            : "bg-dark text-white min-vh-100"
        }
      >
        <Navbar />
        <div className="dark-toggle-container">
          <button onClick={toggleTheme} className=" dark-toggle-btn ">
            <CiDark />
          </button>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
