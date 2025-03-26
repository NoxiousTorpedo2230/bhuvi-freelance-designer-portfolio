import React, { useState } from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";

const Header = ({ handleScroll }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar expand="lg" style={{ 
      background: '#1A2841',
    }} sticky="top">
      <Container className="px-3">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar.Brand
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            style={{ color: "#E6F2FF", fontSize: "1.5rem", fontWeight: "bold" }}
          >
            BHUVANESWARI
          </Navbar.Brand>
        </motion.div>

        {/* Custom Toggler */}
        <div
          className={`custom-toggler ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <Navbar.Collapse className={isOpen ? "show" : ""} id="basic-navbar-nav">
          <Nav className="ms-lg-auto">
            {["#home", "#about", "#services", "#contact"].map((id, index) => (
              <motion.div
                key={index}
                {...navLinkAnimation}
                whileHover={{ scale: 1.1 }}
                style={{ margin: "0 15px" }}
              >
                <Nav.Link
                  href={id}
                  onClick={(e) => handleScroll(e, id)}
                  style={{
                    color: "#E6F2FF",
                    margin: "0 10px",
                    fontWeight: "bold",
                  }}
                >
                  {id.slice(1).charAt(0).toUpperCase() + id.slice(2)}
                </Nav.Link>
              </motion.div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Custom CSS */}
      <style jsx>{`
        .custom-toggler {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 25px;
          cursor: pointer;
          margin-left: auto;
        }

        .custom-toggler span {
          display: block;
          width: 100%;
          height: 3px;
          background-color: #2ECC71;
          border-radius: 2px;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .custom-toggler.open span:nth-child(1) {
          transform: rotate(45deg) translateY(8px);
        }

        .custom-toggler.open span:nth-child(2) {
          opacity: 0;
        }

        .custom-toggler.open span:nth-child(3) {
          transform: rotate(-45deg) translateY(-8px);
        }

        /* Media query to hide toggler on large screens */
        @media (min-width: 992px) {
          .custom-toggler {
            display: none;
          }
        }
      `}</style>
    </Navbar>
  );
};

export default Header;
