import React, { useState } from "react";
import { Container, Row, Col, ProgressBar, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import ObserverWrapper from "./ObserverWrapper";
import projectImages from "../Assets/projectImages";

const About = () => {
  const fadeInAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const designSkills = [
    { name: "Canva", percentage: 100 },
    { name: "Adobe Express", percentage: 87 },
    { name: "Corel Draw", percentage: 84 },
    { name: "Figma", percentage: 75 },
    { name: "Adobe Photoshop", percentage: 66 },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <ObserverWrapper animation={fadeInAnimation}>
      <div
        id="about"
        style={{
          backgroundColor: "#fff",
          color: "#004d66",
          minHeight: "100vh",
          padding: "80px 0",
        }}
      >
        <Container>
          <motion.div
            variants={fadeInAnimation}
            style={{ textAlign: "center", marginBottom: "50px" }}
          >
            <h1
              style={{ fontSize: "3rem", fontWeight: "bold", color: "#004d66" }}
            >
              About Me
            </h1>

            <p
              style={{
                fontSize: "1.2rem",
                maxWidth: "800px",
                margin: "0 auto",
                color: "#004d66",
              }}
            >
              I'm a passionate graphic designer with 2+ years of experience
              creating stunning visuals that tell compelling stories.
            </p>
          </motion.div>

          <Row className="align-items-center mb-5">
            <Col lg={12} md={12}>
              <motion.div variants={fadeInAnimation}>
                <h2
                  style={{
                    color: "#004d66",
                    fontWeight: "600",
                    marginBottom: "20px",
                  }}
                >
                  Graphic Designer
                </h2>

                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.8",
                    marginBottom: "20px",
                    color: "#004d66",
                  }}
                >
                  I specialize in crafting visually captivating designs that
                  blend aesthetics with purpose. My goal is to create designs
                  that not only inspire and engage but also effectively
                  communicate messages to target audiences. By combining
                  creativity with a strategic approach, I deliver solutions that
                  align with branding goals and drive results for my clients,
                  ensuring that every design resonates with its intended
                  audience and achieves its objectives.
                </p>

                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.8",
                    marginBottom: "30px",
                    color: "#004d66",
                  }}
                >
                  With a strong foundation in both print and digital design, I
                  provide versatile and customized design solutions that cater
                  to each client’s unique goals and vision. My process thrives
                  on collaboration and open communication, ensuring that every
                  project not only meets but surpasses expectations. Whether
                  it’s creating striking visuals for print or crafting dynamic
                  digital assets, I combine creativity with a strategic approach
                  to deliver designs that make an impact.
                </p>

                <motion.div
                  variants={fadeInAnimation}
                  style={{ marginTop: "30px" }}
                >
                  <h3
                    style={{
                      color: "#004d66",
                      fontSize: "1.5rem",
                      marginBottom: "20px",
                    }}
                  >
                    My Design Skills
                  </h3>

                  {designSkills.map((skill, index) => (
                    <div key={index} style={{ marginBottom: "15px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "5px",
                        }}
                      >
                        <span style={{ fontWeight: "500", color: "#004d66" }}>
                          {skill.name}
                        </span>
                        <span style={{ fontWeight: "500", color: "#004d66" }}>
                          {skill.percentage}%
                        </span>
                      </div>
                      <ProgressBar
                        now={skill.percentage}
                        style={{ height: "10px", backgroundColor: "#e6f7ff" }}
                        variant="info"
                      />
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </Col>
          </Row>

          <motion.div variants={fadeInAnimation} style={{ marginTop: "80px" }}>


            <motion.div
              variants={fadeInAnimation}
              style={{ marginTop: "60px" }}
            >
              <h2
                style={{
                  color: "#004d66",
                  fontWeight: "600",
                  textAlign: "center",
                  marginBottom: "30px",
                }}
              >
                My Project Highlights
              </h2>

              {/* Compact Card Layout */}
              <Container style={{ marginTop: "50px" }}>
                {/* Gallery Grid */}
                <Row>
                  {projectImages.map((project, index) => (
                    <Col
                      lg={3}
                      md={4}
                      sm={6}
                      xs={12}
                      className="mb-4"
                      key={index}
                    >
                      <div
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          borderRadius: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleOpenModal(project.image)}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{
                            width: "100%",
                            height: "150px",
                            objectFit: "cover",
                            borderRadius: "10px",
                            transition: "transform 0.3s ease",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.transform = "scale(1.1)")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.transform = "scale(1)")
                          }
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: "10px",
                            left: "10px",
                            backgroundColor: "rgba(0, 77, 102, 0.8)",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "5px",
                          }}
                        >
                          {project.title}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>

                {/* Modal */}
                <Modal show={showModal} onHide={handleCloseModal} centered>
                  <Modal.Body
                    style={{
                      backgroundColor: "#e6f7ff",
                      textAlign: "center",
                    }}
                  >
                    {selectedImage && (
                      <img
                        src={selectedImage}
                        alt="Selected Project"
                        style={{
                          width: "100%",
                          maxHeight: "500px",
                          objectFit: "contain",
                          borderRadius: "10px",
                        }}
                      />
                    )}
                  </Modal.Body>
                </Modal>
              </Container>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </ObserverWrapper>
  );
};

export default About;
