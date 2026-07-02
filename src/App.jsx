import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./public/logo.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import Events from "./components/Events";
import ContactUs from "./components/ContactUs";
import Team from "./components/Team";
import Services from "./components/Services";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  const words = ["Ideate.", "Inspire.", "Invest."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 800);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative min-h-screen bg-gray-100 ">
      {/* Loading Screen */}
      <div className="">
        {isLoading && (
          <div className="absolute inset-0 grid justify-center items-center bg-black min-h-screen">
            <div>
              <img className=" w-60" src={logo} alt="logo" />
            </div>
            <div className="text-white text-5xl w-full text-center">
              {words[currentWordIndex]}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="overflow-hidden">
        {!isLoading && (
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<Aboutus />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/team" element={<Team />} />
              <Route path="/services" element={<Services />} />
            </Routes>
            <Footer />
          </Router>
        )}
      </div>
    </div>
  );
}

export default App;
