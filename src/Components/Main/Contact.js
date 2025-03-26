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
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
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
        style={{ 
          backgroundColor: "#E6F2FF", 
          color: "#1A2841", 
          minHeight: "100vh", 
          padding: "70px 15px", 
          position: "relative", 
          overflow: "hidden",
        }}>

        <Container fluid="md">
          <motion.div variants={fadeInAnimation} style={{ textAlign: "center", marginBottom: "50px" }}>
            <h1 style={{ 
              fontSize: "3rem", // Keep original large screen font size
              fontWeight: "bold", 
              color: "#1A2841",
            }}>
              Contact Me
            </h1>

            <p style={{ 
              fontSize: "1.2rem", // Keep original large screen font size
              maxWidth: "800px", 
              margin: "0 auto", 
              color: "#1A2841",
              padding: "0 15px"
            }}>
              Let's discuss how I can bring your design ideas to life
            </p>
          </motion.div>

          <Row className="g-4">
            <Col xs={12} md={5}>
              <motion.div 
                variants={containerAnimation} 
                style={{
                  backgroundColor: "#1A2841", 
                  borderRadius: "15px", 
                  padding: "30px", 
                  height: "100%", 
                  boxShadow: "0 10px 30px rgba(0, 77, 102, 0.1)"
                }}
              >
                <motion.div variants={fadeInAnimation}>
                  <h2 style={{ 
                    fontSize: "1.8rem", // Keep original large screen font size
                    fontWeight: "600", 
                    color: "#E6F2FF", 
                    marginBottom: "20px", 
                    textAlign: "center" 
                  }}>
                    Get In Touch
                  </h2>

                  <div style={{ marginBottom: "20px" }}>
                    {[
                      { icon: faPhone, title: "Phone", text: "+91 6383282862" },
                      { icon: faEnvelope, title: "Email", text: "bhuvaneswari.veeraragavan2000@gmail.com" },
                      { icon: faMapMarkerAlt, title: "Location", text: "Chennai, Tamil Nadu, India" },
                    ].map((item, index) => (
                      <motion.div 
                        key={index} 
                        whileHover={{ x: 5 }} 
                        style={{ 
                          display: "flex", 
                          alignItems: "center", 
                          marginBottom: "15px", 
                          flexWrap: "wrap" 
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "#E6F2FF",
                            color: "#1A2841",
                            width: "45px", 
                            height: "45px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "10px",
                            marginBottom: "10px", 
                            fontSize: "1.2rem",
                            boxShadow: "0 5px 15px rgba(0, 77, 102, 0.2)",
                          }}
                        >
                          <FontAwesomeIcon icon={item.icon} />
                        </div>
                        <div style={{ flex: 1, minWidth: "200px" }}>
                          <h4
                            style={{
                              fontSize: "1.1rem", 
                              fontWeight: "600",
                              color: "#E6F2FF",
                              margin: 0,
                            }}
                          >
                            {item.title}
                          </h4>
                          <p 
                            style={{ 
                              margin: "5px 0 0 0", 
                              color: "#E6F2FF",
                              wordBreak: "break-word" 
                            }}
                          >
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInAnimation}
                  style={{
                    marginTop: "20px",
                    background: "#E6F2FF",
                    borderRadius: "10px",
                    padding: "20px",
                    color: "#1A2841",
                    textAlign: "center",
                    boxShadow: "0 10px 20px rgba(0, 77, 102, 0.15)",
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
                  <p style={{ 
                    padding: "10px",
                    lineHeight: "1.5" 
                  }}>
                    I aim to respond to all inquiries within 24 hours. Let's start a conversation today!
                  </p>
                </motion.div>
              </motion.div>
            </Col>

            <Col xs={12} md={7}>
              <motion.div
                variants={containerAnimation}
                style={{
                  backgroundColor: "#1A2841",
                  borderRadius: "15px",
                  padding: "30px", 
                  boxShadow: "0 10px 30px rgba(0, 77, 102, 0.1)",
                }}
              >
                <motion.div variants={fadeInAnimation}>
                  <h2
                    style={{
                      fontSize: "1.8rem", 
                      fontWeight: "600",
                      color: "#E6F2FF",
                      marginBottom: "20px",
                      textAlign: "center"
                    }}
                  >
                    Send Me a Message
                  </h2>

                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col xs={12} sm={6}>
                        <Form.Group>
                          <Form.Label
                            style={{ color: "#E6F2FF", fontWeight: "500" }}
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
                                color: "#1A2841",
                              }}
                            />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col xs={12} sm={6}>
                        <Form.Group>
                          <Form.Label
                            style={{ color: "#E6F2FF", fontWeight: "500" }}
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
                                color: "#1A2841",
                              }}
                            />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Label
                            style={{ color: "#E6F2FF", fontWeight: "500" }}
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

                        <Form.Group className="mb-3">
                          <Form.Label
                            style={{ color: "#E6F2FF", fontWeight: "500" }}
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

                        <div className="text-center">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ display: "inline-block" }}
                          >
                            <Button
                              type="submit"
                              style={{
                                background: "#E6F2FF",
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
                              <span style={{color:"#1A2841"}}>Send Message</span>
                              <FontAwesomeIcon style={{color:"#1A2841"}} icon={faPaperPlane} />
                            </Button>
                          </motion.div>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </motion.div>

                <motion.div
                  variants={fadeInAnimation}
                  style={{
                    marginTop: "20px",
                    padding: "15px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(0, 77, 102, 0.05)",
                    border: "1px dashed rgba(0, 77, 102, 0.2)",
                    textAlign: "center",
                    color: "#E6F2FF",
                  }}
                >
                  <p style={{ 
                    margin: 0, 
                    fontSize: "0.9rem"
                  }}>
                    <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                    By submitting this form, you agree to be contacted about your inquiry.
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
