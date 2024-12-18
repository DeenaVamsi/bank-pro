import React from "react";

const NavBar = () => {
  const navbarStyles = {
    navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 2rem",
      backgroundColor: "#1a1a2e",
      color: "#ffffff",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      zIndex: "10",
      height: "90px",
    },
    brand: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#00d4ff",
      textDecoration: "none",
      cursor: "pointer",
      marginRight: "auto", // Pushes brand logo to left
    },
    navLinksContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center", // Center the links horizontally
      gap: "2rem", // Spacing between links
      flexGrow: "1", // Allows flexbox to center
    },
    navLink: {
      color: "#ffffff",
      fontSize: "1rem",
      textDecoration: "none",
      fontWeight: "500",
      padding: "0.5rem 1.5rem",
      borderRadius: "0.3rem",
      transition: "all 0.3s ease",
    },
    navLinkHover: {
      backgroundColor: "#00d4ff",
      color: "#1a1a2e",
    },
    dropdownContainer: {
      position: "relative",
      cursor: "pointer",
    },
    dropdownMenu: {
      position: "absolute",
      top: "100%",
      left: "0",
      backgroundColor: "#27293d",
      borderRadius: "0.5rem",
      boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
      padding: "0.5rem 0",
      marginTop: "0.5rem",
      zIndex: "100",
      display: "none",
    },
    dropdownMenuVisible: {
      display: "block",
    },
    dropdownItem: {
      padding: "0.8rem 1.5rem",
      fontSize: "0.9rem",
      fontWeight: "500",
      color: "#ffffff",
      textDecoration: "none",
      transition: "all 0.3s ease",
    },
    dropdownItemHover: {
      backgroundColor: "#00d4ff",
      color: "#1a1a2e",
    },
  };

  return (
    <nav style={navbarStyles.navbar}>
      {/* Brand */}
      <a href="/" style={navbarStyles.brand}>
        MyFinBank
      </a>

      {/* Links */}
      <div style={navbarStyles.navLinksContainer}>
        <a
          href="/"
          style={navbarStyles.navLink}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor =
              navbarStyles.navLinkHover.backgroundColor) &&
            (e.target.style.color = navbarStyles.navLinkHover.color)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "transparent") &&
            (e.target.style.color = navbarStyles.navLink.color)
          }
        >
          Home
        </a>
        <a
          href="/about"
          style={navbarStyles.navLink}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor =
              navbarStyles.navLinkHover.backgroundColor) &&
            (e.target.style.color = navbarStyles.navLinkHover.color)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "transparent") &&
            (e.target.style.color = navbarStyles.navLink.color)
          }
        >
          About Us
        </a>

        {/* Dropdown */}
        <div
          style={navbarStyles.dropdownContainer}
          onMouseOver={(e) => {
            const dropdownMenu =
              e.currentTarget.querySelector(".dropdown-menu");
            if (dropdownMenu) dropdownMenu.style.display = "block";
          }}
          onMouseOut={(e) => {
            const dropdownMenu =
              e.currentTarget.querySelector(".dropdown-menu");
            if (dropdownMenu) dropdownMenu.style.display = "none";
          }}
        >
          <a href="#" style={navbarStyles.navLink}>
            Banking
          </a>
          <div className="dropdown-menu" style={navbarStyles.dropdownMenu}>
            <a
              href="/login"
              style={navbarStyles.dropdownItem}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor =
                  navbarStyles.dropdownItemHover.backgroundColor) &&
                (e.target.style.color = navbarStyles.dropdownItemHover.color)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent") &&
                (e.target.style.color = navbarStyles.dropdownItem.color)
              }
            >
              Login
            </a>
            <a
              href="/register"
              style={navbarStyles.dropdownItem}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor =
                  navbarStyles.dropdownItemHover.backgroundColor) &&
                (e.target.style.color = navbarStyles.dropdownItemHover.color)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent") &&
                (e.target.style.color = navbarStyles.dropdownItem.color)
              }
            >
              Registration
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
