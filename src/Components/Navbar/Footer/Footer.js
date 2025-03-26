import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1A2841",
        color: "#E6F2FF",
        fontFamily: "'Poppins', sans-serif",
        padding: "25px 0",
        borderTop: "1px solid rgba(128, 204, 255, 0.3)",
      }}
    >
      <Container>
        {/* Social Links Row */}
        <Row className="justify-content-center mb-3">
          <Col xs={12} className="text-center">
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "0 40px",
                padding: "0 10px",
              }}
            >
              {[
                { name: "Kwork", url: "https://kwork.com/user/BHUVANESWARI" },
                {
                  name: "YouTube",
                  url: "https://youtube.com/@shandesignspace?si=12AAjNNBYBWZDjch",
                },
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/_._bhuvi_freelance_designer_._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/bhuvaneswari-v-342894214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                },
                {
                  name: "Threads",
                  url: "https://www.threads.net/@_._bhuvi_freelance_designer_._",
                },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#E6F2FF",
                    fontSize: "1rem",
                    fontWeight: "500",
                    textDecoration: "none",
                    padding: "8px 0",
                    position: "relative",
                    transition: "color 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#00A2E8"; // Subtle hover color
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#E6F2FF"; // Original color
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        {/* Divider Line */}
        <Row className="justify-content-center mb-3">
          <Col xs={12} md={8} lg={6} className="text-center">
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(to right, rgba(0, 77, 102, 0), rgba(0, 77, 102, 0.3), rgba(0, 77, 102, 0))",
                margin: "0 auto",
              }}
            ></div>
          </Col>
        </Row>

        {/* Copyright Line */}
        <Row>
          <Col className="text-center">
            <p
              style={{
                fontSize: "0.85rem",
                margin: 0,
                color: "#E6F2FF",
                opacity: "0.8",
              }}
            >
              © {new Date().getFullYear()} Bhuvaneswari Veeraragavan. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
