import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import HotelPage from "./HotelPage";
import FoodPage from "./FoodPage";
import TouristPage from "./TouristPage";
import Slider from "react-slick"; // Import slider library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const iconsSectionRef = useRef(null);

  const handleScroll = () => {
    iconsSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable left and right arrows
    nextArrow: <div className="slick-arrow slick-next">→</div>, // Custom arrow
    prevArrow: <div className="slick-arrow slick-prev">←</div>, // Custom arrow
  };

  return (
      <Router>
        <div className="App">
          {/* Search Bar */}
          <header className="header">
            <div className="search-container">
              {/* Logo */}
              <img
                  src="logoo.jpg" // Replace with your Google Drive logo ID
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

                    {/* Carousel with images */}
                    <Carousel>
                      {/* Luxury Hotel Facade */}
                      <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media-cdn.tripadvisor.com/media/photo-s/29/bc/0d/26/hotel-facade.jpg"
                            alt="Luxury Hotel Facade"
                            style={{
                              borderRadius: '15px',
                              height: '400px',
                              objectFit: 'cover'
                            }} // Set fixed height and cover the image
                        />
                        <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '15px'}}>
                          <h3 style={{
                            fontFamily: 'Georgia, serif',
                            fontSize: '2em',
                            fontWeight: 'bold',
                            color: '#fff'
                          }}>Luxury Hotel Facade</h3>
                          <p style={{fontFamily: 'Arial, sans-serif', color: '#fff', fontSize: '1.1em'}}>Stay in luxury
                            hotels in Penang.</p>
                        </Carousel.Caption>
                      </Carousel.Item>

                      {/* Penang Street Art */}
                      <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://thenextsomewhere.com/wp-content/uploads/2017/07/PenangStreetArt-2.jpg"
                            alt="Penang Street Art"
                            style={{
                              borderRadius: '15px',
                              height: '400px',
                              objectFit: 'cover'
                            }} // Consistent height and object fit
                        />
                        <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '15px'}}>
                          <h3 style={{
                            fontFamily: 'Georgia, serif',
                            fontSize: '2em',
                            fontWeight: 'bold',
                            color: '#fff'
                          }}>Penang Street Art</h3>
                          <p style={{fontFamily: 'Arial, sans-serif', color: '#fff', fontSize: '1.1em'}}>A scenic
                            journey.</p>
                        </Carousel.Caption>
                      </Carousel.Item>

                      {/* Food */}
                      <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://middleclass.sg/wp-content/uploads/2019/09/penang14-1024x768.jpg"
                            alt="Delicious Penang Food"
                            style={{
                              borderRadius: '15px',
                              height: '400px',
                              objectFit: 'cover'
                            }} // Same size for consistency
                        />
                        <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '15px'}}>
                          <h3 style={{
                            fontFamily: 'Georgia, serif',
                            fontSize: '2em',
                            fontWeight: 'bold',
                            color: '#fff'
                          }}>Food</h3>
                          <p style={{fontFamily: 'Arial, sans-serif', color: '#fff', fontSize: '1.1em'}}>Delicious local
                            dishes await you!</p>
                        </Carousel.Caption>
                      </Carousel.Item>

                      {/* George Town */}
                      <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://findingbeyond.com/app/uploads/2017/03/george-town-georgetown-old-town-penang-island-malaysia-52.jpg"
                            alt="George Town"
                            style={{
                              borderRadius: '15px',
                              height: '400px',
                              objectFit: 'cover'
                            }} // Ensuring all images match in height
                        />
                        <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '15px'}}>
                          <h3 style={{
                            fontFamily: 'Georgia, serif',
                            fontSize: '2em',
                            fontWeight: 'bold',
                            color: '#fff'
                          }}>George Town</h3>
                          <p style={{fontFamily: 'Arial, sans-serif', color: '#fff', fontSize: '1.1em'}}>Explore the
                            rich culture and history of this UNESCO World Heritage Site.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>

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

                    <section ref={iconsSectionRef} className="icons-section">
                      <div className="container">
                        <div className="row">
                          {/* Food (Food Page) */}
                          <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon-card">
                              <img
                                  src="https://example.com/food-icon.png" // Replace with your actual image or icon for Food
                                  alt="Food"
                                  className="icon-img"
                              />
                              <h3>Food</h3>
                              <p>Delicious local dishes await you!</p>
                              <Link to="/food" className="cta-link">Explore Food</Link>
                            </div>
                          </div>

                          {/* Hotels (Hotel Page) */}
                          <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon-card">
                              <img
                                  src="https://example.com/hotel-icon.png" // Replace with your actual image or icon for Hotels
                                  alt="Hotels"
                                  className="icon-img"
                              />
                              <h3>Hotels</h3>
                              <p>Stay in luxury hotels in Penang.</p>
                              <Link to="/hotels" className="cta-link">Find Hotels</Link>
                            </div>
                          </div>

                          {/* Tourist (Tourist Page) */}
                          <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon-card">
                              <img
                                  src="https://example.com/tourist-icon.png" // Replace with your actual image or icon for Tourist
                                  alt="Tourist"
                                  className="icon-img"
                              />
                              <h3>Tourist</h3>
                              <p>Explore scenic views and landmarks.</p>
                              <Link to="/tourist" className="cta-link">Visit Tourist Spots</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                  </>
                }
            />
            <Route path="/hotels" element={<HotelPage/>}/>
            <Route path="/food" element={<FoodPage/>}/>
            <Route path="/tourist" element={<TouristPage/>}/>
          </Routes>

          {/* Footer */}
          <footer className="footer">
            <div className="about-us">
              <h3>About Penang Canvas</h3>
              <p>
                Penang Canvas is your digital gateway to the vibrant tapestry of Penang. Known as the Pearl of the
                Orient, Penang is a captivating blend of rich heritage, modern attractions, and culinary delights. From
                the historic streets of George Town, a UNESCO World Heritage Site, to the tranquil shores of Batu
                Ferringhi, every corner of Penang tells a story. Our platform serves as a canvas, painting the diverse
                experiences Penang offers—be it its iconic landmarks, flavorful cuisine, or hidden gems waiting to be
                discovered.
              </p>
            </div>

            <div className="about-team-pearl">
              <h3>About Team Pearl</h3>
              <p>
                Team Pearl is a passionate group of individuals dedicated to showcasing the beauty and culture of
                Penang. We strive to create a seamless experience for explorers, food lovers, and adventurers,
                connecting them with the heart of the island. Our mission is to ensure that every visitor leaves with
                unforgettable memories of Penang.
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
