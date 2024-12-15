import "../styles/style.css";
import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import Navbar from "../components/Navbar.js"; // Import Navbar
import ProductGrid from "../components/ProductGrid.js"; // Import ProductGrid (which uses ProductCard)
import Footer from "../components/Footer.js"; // Import Footer

// Importing CSS for slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 800, // Transition speed
    slidesToShow: 6, // Number of images to show at a time
    slidesToScroll: 2, // Number of images to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval in milliseconds
    arrows: true, // Show the previous/next arrows
    nextArrow: (
      <div className="slick-arrow slick-next">
        <span className="arrow">→</span>
      </div>
    ), // Custom next arrow with styling
    prevArrow: (
      <div className="slick-arrow slick-prev">
        <span className="arrow">←</span>
      </div>
    ), // Custom previous arrow with styling
  };

  const images = [
    "https://i.pinimg.com/736x/32/ee/fc/32eefc04bd87bcd6c539fa55fbd3aa6b.jpg",
    "https://i.pinimg.com/736x/56/d9/98/56d998a1601d8dbc3cd92ba5ab1d9a7c.jpg",
    "https://i.pinimg.com/736x/56/d9/98/56d998a1601d8dbc3cd92ba5ab1d9a7c.jpg",
    "https://i.pinimg.com/474x/53/da/c2/53dac22d7220617742897e16a8ea1faf.jpg",
    "https://i.pinimg.com/736x/9a/54/35/9a54359f3e62139dd47a2072435d76e7.jpg",
    "https://i.pinimg.com/736x/56/d9/98/56d998a1601d8dbc3cd92ba5ab1d9a7c.jpg",
    "https://i.pinimg.com/474x/53/da/c2/53dac22d7220617742897e16a8ea1faf.jpg",
    "https://i.pinimg.com/736x/32/ee/fc/32eefc04bd87bcd6c539fa55fbd3aa6b.jpg",
    "https://i.pinimg.com/736x/56/d9/98/56d998a1601d8dbc3cd92ba5ab1d9a7c.jpg",

    
    
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main content (Product Grid) */}
      <main>
        <div className="container1" style={{ minHeight: "100vh", paddingBottom: "50px" }}>
          <h1>Welcome to OceanCart!</h1>
          <h2>Shop the Latest Products</h2>

          {/* Slider */}
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </Slider>

          {/* Product Grid */}
          {/* <ProductGrid /> */}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
