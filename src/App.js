import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import HotelPage from "./HotelPage";
import FoodPage from "./FoodPage";
import TouristPage from "./TouristPage";

function App() {
  const iconsSectionRef = useRef(null);

  const handleScroll = () => {
    iconsSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <Router>
        <div className="App">
          {/* Search Bar */}
          <header className="header">
            <div className="search-container">
              {/* Logo */}
              <img
                  src="https://www.pngkey.com/png/detail/631-6317072_penang-global-tourism-penang-global-tourism-logo-png.png" // Replace with your Google Drive logo ID
                  alt="Logo"
                  className="logo"
              />
              <input
                  type="text"
                  placeholder="Search for attractions, food, or hotels..."
                  className="search-input"
              />
              <button className="search-button">Search</button>
            </div>
          </header>

          <Routes>
            <Route
                path="/"
                element={
                  <>
                    {/* Hero Section */}
                    <section className="hero-section">
                      <div className="hero-overlay"></div>
                      <div className="hero-content">
                        <h1>Welcome to Penang!</h1>
                        <p>Explore the beautiful attractions and culture of Penang.</p>
                        <button className="cta-button" onClick={handleScroll}>
                          Start Exploring
                        </button>
                      </div>
                    </section>

                    {/* Embedded YouTube Video */}
                    <section className="video-section">
                      <iframe
                          width="100%"
                          height="500"
                          src="https://www.youtube.com/embed/KeDSg4Y_njg"
                          title="Visit Penang - Explore the Vibrant Culture"
                          /*frameBorder="0"*/
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                      ></iframe>
                    </section>

                    {/* Icons Section */}
                    <section ref={iconsSectionRef} className="icons-section">
                      <Link to="/food" className="icon" id="food">
                        <h3>Food</h3>
                        <p>Delicious local dishes await you!</p>
                      </Link>
                      <Link to="/tourist" className="icon" id="tourist">
                        <h3>Tourist</h3>
                        <p>Explore scenic views and landmarks.</p>
                      </Link>
                      <Link to="/hotels" className="icon" id="hotel">
                        <h3>Hotel</h3>
                        <p>Stay in luxury hotels in Penang.</p>
                      </Link>
                    </section>
                  </>
                }
            />
            <Route path="/hotels" element={<HotelPage />} />
            <Route path="/food" element={<FoodPage />} />
            <Route path="/tourist" element={<TouristPage />} />
          </Routes>

          {/* Footer */}
          <footer className="footer">
            <div className="about-us">
              <h3>About Us</h3>
              <p>
                Welcome to Visit Penang, your ultimate guide to exploring the vibrant and diverse island of Penang, Malaysia.
                Our mission is to showcase the best that this beautiful destination has to offer, from its rich cultural heritage
                to its stunning landscapes, mouthwatering cuisine, and luxurious accommodations.
              </p>
            </div>
            <div className="contact-us">
              <h3>Contact Us</h3>
              <p>Email: visitpenang@gmail.com</p>
              <p>Phone: +60 123-456-789</p>
              <p>Instagram: @visitpenang</p>
              <p>Facebook: Visit Penang</p>
            </div>
          </footer>
        </div>
      </Router>
  );
}

export default App;
