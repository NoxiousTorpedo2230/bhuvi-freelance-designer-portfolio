import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";

const Header = ({ handleScroll }) => {
  const navLinkAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#e6f7ff" }} sticky="top">
      <Container className="px-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar.Brand
            href="#home" 
            onClick={(e) => handleScroll(e, "#home")}
            style={{ color: "#004d66", fontSize: "1.5rem", fontWeight: "bold" }}
          >
            BHUVANESWARI
            </Navbar.Brand>
        </motion.div>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          style={{ 
            borderColor: "#004d66",
            position: "relative",
            right: "0",
            marginLeft: "auto"
          }}
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-lg-auto">
            {["#home", "#about", "#services", "#contact"].map(
              (id, index) => (
                <motion.div
                  key={index}
                  {...navLinkAnimation}
                  whileHover={{ scale: 1.1 }}
                  style={{ margin: "0 15px" }}
                >
                  <Nav.Link
                    href={id}
                    onClick={(e) => handleScroll(e, id)}
                    style={{ color: "#004d66", margin: "0 10px", fontWeight: 'bold' }}
                  >
                    {id.slice(1).charAt(0).toUpperCase() + id.slice(2)}
                  </Nav.Link>
                </motion.div>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
