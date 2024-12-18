import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#1c2331",
    color: "#ffffff",
    textAlign: "center",
    margin: "2px",
    padding: "5px",
    boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Roboto', sans-serif",
  };

  const footerContentStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const footStyle = {
    fontSize: "16px",
    margin: "0",
    fontWeight: "400",
    letterSpacing: "0.5px",
  };

  const brandNameStyle = {
    fontWeight: "700",
    color: "#00aaff",
  };

  const socialIconsStyle = {
    marginTop: "10px",
  };

  const socialIconStyle = {
    color: "#ffffff",
    margin: "0 10px",
    fontSize: "20px",
    textDecoration: "none",
    transition: "color 0.3s ease-in-out",
  };

  const socialIconHoverStyle = {
    color: "#00aaff",
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <h1 style={footStyle}>
          © All Rights Reserved by <span style={brandNameStyle}>MyFinBank</span>
        </h1>
        <div style={socialIconsStyle}>
          {["facebook", "twitter", "linkedin", "instagram"].map((platform) => (
            <a
              key={platform}
              href={`https://www.${platform}.com`}
              target="_blank"
              rel="noopener noreferrer"
              style={socialIconStyle}
              onMouseEnter={(e) =>
                (e.target.style.color = socialIconHoverStyle.color)
              }
              onMouseLeave={(e) =>
                (e.target.style.color = socialIconStyle.color)
              }
              aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
            >
              <i className={`fab fa-${platform}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
