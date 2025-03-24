import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPhone,  faEnvelope,  faMapMarkerAlt,  faComments,  faCheckCircle,  faUser,  faPaperPlane,} from "@fortawesome/free-solid-svg-icons";
import ObserverWrapper from "./ObserverWrapper.js";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const fadeInAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, tansition: { staggerChildren: 0.2 } },
  };

  const [formData, setFormData] = useState({
    name: "",  email: "",  subject: "",  description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData({
      ...formData,  [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_aizvl1l", "template_4guu0xc", {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.description
        },"ykibLx-2G4ZilUQBI")

      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          setFormData({
            name: "", email: "", subject: "", description: ""});
        },
        (error) => {
          console.log("Error sending message:", error);
        });
  };

  return (
    <ObserverWrapper animation={fadeInAnimation}>
      <div
        id="contact"
        style={{ backgroundColor: "#fff", color: "#004d66", minHeight: "100vh", padding: "70px 0", position: "relative", overflow: "hidden",}}>

        <div style={{ position: "absolute", top: 0, right: 0, opacity: 0.1, zIndex: 0,}}>
          <svg width="500" height="500" viewBox="0 0 200 200">
            <path fill="#004d66" d="M48.8,-76.8C62.9,-68.7,74.3,-55.5,79.9,-40.4C85.5,-25.4,85.2,-8.5,81.8,7.2C78.3,22.9,71.6,37.5,61.9,50.1C52.1,62.8,39.3,73.5,24.4,78.8C9.6,84.1,-7.2,83.9,-22.4,78.8C-37.5,73.7,-51,63.6,-62.3,51C-73.6,38.4,-82.8,23.3,-85.6,6.7C-88.5,-9.8,-85,-27.9,-75.9,-42C-66.9,-56.1,-52.2,-66.2,-37.5,-73.9C-22.7,-81.5,-7.9,-86.8,6.7,-87.1C21.3,-87.3,34.7,-84.9,48.8,-76.8Z" transform="translate(100 100)"/>
          </svg>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, opacity: 0.1, zIndex: 0,}}>
          <svg width="500" height="500" viewBox="0 0 200 200">
            <path fill="#004d66" d="M41.3,-68.1C53.9,-61.5,64.7,-50.9,71.6,-37.7C78.5,-24.4,81.4,-8.6,78.3,5.8C75.1,20.2,65.8,33.3,54.8,44C43.8,54.7,31,63.1,16.9,67.2C2.8,71.4,-12.5,71.3,-26,66.9C-39.5,62.5,-51.3,53.8,-58.9,42C-66.6,30.1,-70.1,15.1,-71.3,-0.7C-72.4,-16.5,-71.2,-33,-63.2,-44.6C-55.3,-56.2,-40.6,-62.7,-26.7,-68.6C-12.8,-74.5,0.2,-79.7,13.3,-77.5C26.5,-75.3,39.8,-65.7,41.3,-68.1Z" transform="translate(100 100)"/>
          </svg>
        </div>

        <Container style={{ position: "relative", zIndex: 1 }}>
          <motion.div variants={fadeInAnimation} style={{ textAlign: "center", marginBottom: "50px" }}>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#004d66" }}>
              Contact Me
            </h1>

            <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto", color: "#004d66",}}>
              Let's discuss how I can bring your design ideas to life
            </p>
          </motion.div>

          <Row className="justify-content-center">
            <Col lg={5} md={6} className="mb-4">
              <motion.div variants={containerAnimation} whileHover={{ transform: "translateY(-5px)" }} style={{backgroundColor: "#e6f7ff", borderRadius: "15px", padding: "40px", height: "100%", boxShadow: "0 10px 30px rgba(0, 77, 102, 0.1)", transition:"transform 0.3s ease",}}>
                <motion.div variants={fadeInAnimation}>
                  <h2 style={{ fontSize: "1.8rem", fontWeight: "600", color: "#004d66", marginBottom: "30px", }}>
                    Get In Touch
                  </h2>

                  <div style={{ marginBottom: "30px" }}>
                    {[
                      { icon: faPhone, title: "Phone", text: "+91 6383282862" },
                      { icon: faEnvelope, title: "Email", text: "bhuvaneswari.veeraragavan2000@gmail.com",},
                      { icon: faMapMarkerAlt, title: "Location", text: "Chennai, Tamil Nadu, India",},
                    ].map((item, index) => (
                      <motion.div key={index} whileHover={{ x: 5 }} style={{ display: "flex", alignItems: "center", marginBottom: "20px", transition: "transform 0.3s ease",}}>
                        <div
                          style={{
                            backgroundColor: "#004d66",
                            color: "#e6f7ff",
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "15px",
                            fontSize: "1.2rem",
                            boxShadow: "0 5px 15px rgba(0, 77, 102, 0.2)",
                          }}
                        >
                          <FontAwesomeIcon icon={item.icon} />
                        </div>
                        <div>
                          <h4
                            style={{
                              fontSize: "1.1rem",
                              fontWeight: "600",
                              color: "#004d66",
                              margin: 0,
                            }}
                          >
                            {item.title}
                          </h4>
                          <p style={{ margin: "5px 0 0 0", color: "#004d66" }}>
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeInAnimation}
                  whileHover={{ transform: "translateY(-5px)" }}
                  style={{
                    marginTop: "0px",
                    background:
                      "linear-gradient(135deg, #004d66 0%, #006b8f 100%)",
                    borderRadius: "10px",
                    padding: "20px",
                    color: "#e6f7ff",
                    textAlign: "center",
                    boxShadow: "0 10px 20px rgba(0, 77, 102, 0.15)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(230, 247, 255, 0.2)",
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px",
                      fontSize: "1.5rem",
                    }}
                  >
                    <FontAwesomeIcon icon={faComments} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      marginBottom: "10px",
                    }}
                  >
                    Quick Response
                  </h3>
                  <p style={{ fontSize: "0.95rem", padding:'43px' }}>
                    I aim to respond to all inquiries within 24 hours. Let's
                    start a conversation today!
                  </p>
                </motion.div>
              </motion.div>
            </Col>

            <Col lg={7} md={6}>
              <motion.div
                variants={containerAnimation}
                whileHover={{ transform: "translateY(-5px)" }}
                style={{
                  backgroundColor: "#e6f7ff",
                  borderRadius: "15px",
                  padding: "40px",
                  boxShadow: "0 10px 30px rgba(0, 77, 102, 0.1)",
                  transition: "transform 0.3s ease",
                }}
              >
                <motion.div variants={fadeInAnimation}>
                  <h2
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "600",
                      color: "#004d66",
                      marginBottom: "30px",
                    }}
                  >
                    Send Me a Message
                  </h2>

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label
                            style={{ color: "#004d66", fontWeight: "500" }}
                          >
                            Your Name
                          </Form.Label>
                          <div style={{ position: "relative" }}>
                            <Form.Control
                              type="text"
                              placeholder="Enter your name"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              style={{
                                padding: "12px 15px 12px 45px",
                                border: "1px solid #cce5ff",
                                borderRadius: "8px",
                                backgroundColor: "#ffffff",
                                boxShadow: "0 2px 10px rgba(0, 77, 102, 0.05)",
                              }}
                            />
                            <FontAwesomeIcon
                              icon={faUser}
                              style={{
                                position: "absolute",
                                left: "15px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "#004d66",
                              }}
                            />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label
                            style={{ color: "#004d66", fontWeight: "500" }}
                          >
                            Your Email
                          </Form.Label>
                          <div style={{ position: "relative" }}>
                            <Form.Control
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email"
                              style={{
                                padding: "12px 15px 12px 45px",
                                border: "1px solid #cce5ff",
                                borderRadius: "8px",
                                backgroundColor: "#ffffff",
                                boxShadow: "0 2px 10px rgba(0, 77, 102, 0.05)",
                              }}
                            />
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              style={{
                                position: "absolute",
                                left: "15px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "#004d66",
                              }}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label
                        style={{ color: "#004d66", fontWeight: "500" }}
                      >
                        Subject
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        style={{
                          padding: "12px 15px",
                          border: "1px solid #cce5ff",
                          borderRadius: "8px",
                          backgroundColor: "#ffffff",
                          boxShadow: "0 2px 10px rgba(0, 77, 102, 0.05)",
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label
                        style={{ color: "#004d66", fontWeight: "500" }}
                      >
                        Your Message
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell me about your project or inquiry"
                        style={{
                          padding: "15px",
                          border: "1px solid #cce5ff",
                          borderRadius: "8px",
                          backgroundColor: "#ffffff",
                          boxShadow: "0 2px 10px rgba(0, 77, 102, 0.05)",
                        }}
                      />
                    </Form.Group>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        style={{
                          background:
                            "linear-gradient(135deg, #004d66 0%, #006b8f 100%)",
                          border: "none",
                          padding: "12px 30px",
                          borderRadius: "50px",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                          boxShadow: "0 10px 20px rgba(0, 77, 102, 0.2)",
                        }}
                      >
                        <span>Send Message</span>
                        <FontAwesomeIcon icon={faPaperPlane} />
                      </Button>
                    </motion.div>
                  </Form>
                </motion.div>

                <motion.div
                  variants={fadeInAnimation}
                  style={{
                    marginTop: "30px",
                    padding: "15px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(0, 77, 102, 0.05)",
                    border: "1px dashed rgba(0, 77, 102, 0.2)",
                    textAlign: "center",
                    color: "#004d66",
                  }}
                >
                  <p style={{ margin: 0, fontSize: "0.9rem" }}>
                    <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                    By submitting this form, you agree to be contacted about
                    your inquiry.
                  </p>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </ObserverWrapper>
  );
};

export default Contact;
