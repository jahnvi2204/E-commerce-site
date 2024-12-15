import React from "react";
import { Link } from "react-router-dom"; // Using React Router for navigation
import coverImage from "../images/FrontPage.jpg"; // Import cover image
import { FaLink } from "react-icons/fa"; // Import FontAwesome link icon

const ImageWithLinks = () => {
  return (
    <div style={{ position: "relative", display: "inline-block", marginBottom: "20px" }}>
      {/* Cover Image */}
      <img
        src={coverImage}
        alt="Cover"
        style={{
          width: "1220px",
          height: "650px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          background: "transparent",
        }}
      />

      {/* Link for Her */}
      <Link
        to="/her-clothing" // Replace with the actual route for women's clothing
        style={{
          position: "absolute",
          top: "20%", // Adjust position as needed
          left: "18%",
          color: "white",
          fontSize: "24px",
          fontFamily: "Sans-serif",
          textDecoration: "none",
          backgroundColor: "rgba(210, 208, 208, 0.5)",
          padding: "10px",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <FaLink /> Her
      </Link>

      {/* Link for His */}
      <Link
        to="/his-clothing" // Replace with the actual route for men's clothing
        style={{
          position: "absolute",
          top: "20%",
          left: "70%", // Adjust position as needed
          color: "white",
          fontSize: "24px",
          fontFamily: "Sans-serif",
          textDecoration: "none",
          backgroundColor: "rgba(210, 208, 208, 0.5)",
          padding: "10px",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <FaLink /> His
      </Link>
    </div>
  );
};

export default ImageWithLinks;
