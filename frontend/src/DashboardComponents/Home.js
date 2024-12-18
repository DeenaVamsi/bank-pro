import React from "react";

const Home = () => {
  const containerStyle = {
    width: "100%",
    height: "100vh", // Full viewport height
    margin: "0",
    padding: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "#ffffff", // Clean white background
  };

  // Style for the image
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Image fills the container
    margin: "0",
    padding: "0",
  };

  return (
    <div style={containerStyle}>
      <img
        src={
          "https://static.vecteezy.com/system/resources/previews/017/599/813/non_2x/columns-of-coins-forming-the-silhouette-of-a-bank-building-banking-services-concept-represented-with-icons-on-dark-blue-background-photo.jpg"
        } // Use uploaded image
        alt="Homepage Display"
        style={imageStyle}
      />
    </div>
  );
};

export default Home;
