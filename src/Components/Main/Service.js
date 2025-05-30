import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaPalette, FaFileAlt, FaBookOpen, FaShareAlt, FaShapes, FaBox } from "react-icons/fa";
import ObserverWrapper from "./ObserverWrapper";

const Service = () => {
  // Animation settings
  const fadeInAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Services data
  const servicesData = [
    {
      icon: <FaPalette />,
      title: "Brand Design",
      description: "Crafting cohesive brand identities, including logos, typography, color schemes, and branding materials.",
    },
    {
      icon: <FaFileAlt />,
      title: "Flyers",
      description: "Designing attention-grabbing flyers tailored to your promotional needs and target audience.",
    },
    {
      icon: <FaBookOpen />,
      title: "Brochures",
      description: "Creating visually compelling brochures that convey your message and showcase your offerings.",
    },
    {
      icon: <FaShareAlt />,
      title: "Social Media Posts & Ads",
      description: "Designing engaging social media posts and ads that resonate with your audience and increase reach.",
    },
    {
      icon: <FaShapes />,
      title: "Logo Design & Thumbnails",
      description: "Innovative logo designs and custom thumbnails that establish your visual identity and attract attention.",
    },
    {
      icon: <FaBox />,
      title: "Product Packaging Design",
      description: "Designing attractive and functional product packaging that elevates your brand and stands out on shelves.",
    },
  ];

  return (
    <ObserverWrapper animation={fadeInAnimation}>
      <div
        id="services"
        style={{
          backgroundColor: "#1A2841",
          color: "#E6F2FF",
          minHeight: "100vh",
          padding: "80px 0",
        }}
      >
        <Container>
          <motion.div
            variants={fadeInAnimation}
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#E6F2FF",
              }}
            >
              My Services
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                maxWidth: "800px",
                margin: "0 auto",
                color: "#E6F2FF",
              }}
            >
              Comprehensive design solutions to meet your creative and business needs
            </p>
          </motion.div>

          <Row>
            {servicesData.map((service, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <motion.div
                  variants={fadeInAnimation}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 10px 20px rgba(230, 242, 255, 0.15)",
                  }}
                >
                  <Card
                    style={{
                      border: "none",
                      borderRadius: "15px",
                      overflow: "hidden",
                      height: "100%",
                      backgroundColor: "#E6F2FF",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Card.Body className="text-center p-4">
                      <div
                        style={{
                          fontSize: "2.5rem",
                          color: "#1A2841",
                          margin: "15px 0",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        {service.icon}
                      </div>
                      <Card.Title
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "600",
                          color: "#1A2841",
                          marginBottom: "15px",
                        }}
                      >
                        {service.title}
                      </Card.Title>
                      <Card.Text style={{ color: "#1A2841" }}>
                        {service.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          <Row className="mt-5 pt-4 justify-content-center">
            <Col md={10} lg={8}>
              <motion.div
                variants={fadeInAnimation}
                style={{
                  backgroundColor: "#E6F2FF",
                  padding: "40px",
                  borderRadius: "15px",
                  textAlign: "center",
                  color: "#1A2841",
                }}
              >
                <h3 style={{ fontWeight: "600", marginBottom: "20px" }}>
                  Need a custom design solution?
                </h3>
                <p style={{ fontSize: "1.1rem", marginBottom: "25px" }}>
                  I offer personalized design packages tailored to your specific requirements and budget.
                </p>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#1A2841",
                    color: "#E6F2FF",
                    padding: "12px 30px",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                  }}
                >
                  Get in Touch
                </motion.a>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </ObserverWrapper>
  );
};

export default Service;
