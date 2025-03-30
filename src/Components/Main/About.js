import React, { useState } from "react";
import { Container, Row, Col, ProgressBar, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import ObserverWrapper from "./ObserverWrapper";
import projectImages from "../Assets/projectImages";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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

 // Modal state
 const [showModal, setShowModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0)


   // Handle modal open
   const handleOpenModal = (images, title) => {
    setSelectedImages(images);
    setSelectedProjectTitle(title);
    setCurrentImageIndex(0);
    setShowModal(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedImages([]);
    setSelectedProjectTitle("");
    setShowModal(false);
  };

  // Navigate to next image
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % selectedImages.length
    );
  };
 // Navigate to previous image
 const handlePrevImage = () => {
  setCurrentImageIndex((prevIndex) => 
    (prevIndex - 1 + selectedImages.length) % selectedImages.length
  );
};

  // Project details
  const projectDetails = [
    {
      title: "Package Design",
      description: "Crafting comprehensive visual identities that tell a unique story and create lasting brand recognition.",
      images: projectImages[0].images
    },
    {
      title: "Brand Design",
      description: "Creating impactful digital assets that drive engagement and communicate your brand's core message effectively.",
      images: projectImages[1].images
    },
    {
      title: "Instagram Posters",
      description: "Designing print materials that blend aesthetic appeal with clear, compelling communication across various mediums.",
      images: projectImages[2].images
    },
    {
      title: "Client Work Brochure",
      description: "Showcasing custom-tailored designs that encapsulate your brand's story. These brochures are crafted to inform, impress, and inspire action.",
      images: projectImages[3].images
    }
  ];

  return (
    <ObserverWrapper animation={fadeInAnimation}>
      <div id="about" style={{ backgroundColor: "#E6F2FF", color: "#1A2841",  minHeight: "100vh", padding: "80px 0",}}>
        <Container>
          <motion.div variants={fadeInAnimation} style={{ textAlign: "center", marginBottom: "50px" }}>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#1A2841" }}>
              About Me
            </h1>

            <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto", color: "#1A2841",}}>
              I'm a passionate graphic designer with 2+ years of experience
              creating stunning visuals that tell compelling stories.
            </p>
          </motion.div>

          <Row className="align-items-center mb-5">
            <Col lg={12} md={12}>
              <motion.div variants={fadeInAnimation}>
                <h2 style={{ color: "#1A2841", fontWeight: "600", marginBottom: "20px",}}>
                  Graphic Designer
                </h2>

                <p style={{ fontSize: "1rem", lineHeight: "1.8", marginBottom: "20px", color: "#1A2841",}}>
                  I specialize in crafting visually captivating designs that lend aesthetics with purpose.My goal is to create designs that not only inspire and engage but also effectively communicate messages to target audiences. By combining creativity with a strategic approach, I deliver solutions that align with branding goals and drive results for my clients, ensuring that every design resonates with its intended audience and achieves its objectives.
                </p>

                <p style={{ fontSize: "1rem", lineHeight: "1.8", marginBottom: "30px", color: "#1A2841", }}>
                  With a strong foundation in both print and digital design, I provide versatile and customized design solutions that cater to each client’s unique goals and vision. My process thrives on collaboration and open communication, ensuring that every project not only meets but surpasses expectations. Whether it’s creating striking visuals for print or crafting dynamic digital assets, I combine creativity with a strategic approach to deliver designs that make an impact.
                </p>

                <motion.div variants={fadeInAnimation}  style={{ marginTop: "30px" }}>
                  <h3 style={{color: "#1A2841", fontSize: "1.5rem", marginBottom: "20px", }}>
                    My Design Skills
                  </h3>

                  {designSkills.map((skill, index) => (
                    <div key={index} style={{ marginBottom: "15px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px",}}>
                        <span style={{ fontWeight: "500", color: "#1A2841" }}>
                          {skill.name}
                        </span>
                        <span style={{ fontWeight: "500", color: "#1A2841" }}>
                          {skill.percentage}%
                        </span>
                      </div>

                      <ProgressBar now={skill.percentage} style={{ height: "10px",backgroundColor: "#E6F2FF", }}>
                        <div style={{ height: "100%", width: `${skill.percentage}%`, backgroundColor: "#1A2841", }}></div>
                      </ProgressBar>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </Col>
          </Row>

          <motion.div variants={fadeInAnimation} style={{ marginTop: "80px" }}>
            <motion.div variants={fadeInAnimation} style={{ marginTop: "60px", textAlign: "center" }}>
              <h2 style={{color: "#004d66", fontWeight: "600", textAlign: "center", marginBottom: "30px",}}>
                My Project Highlights
              </h2>

              <Container style={{ marginTop: "50px" }}>
                <Row>
                  {projectDetails.map((project, index) => (
                    <Col lg={3} md={6} sm={12} key={index} className="mb-4">
                      <motion.div style={{
                          backgroundColor: "#1A2841",
                          color: "#E6F2FF",
                          borderRadius: "10px",
                          padding: "20px",
                          height: "300px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          cursor: "pointer",
                          transition: "transform 0.3s ease",
                        }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleOpenModal(project.images, project.title)}
                      >
                        <div>
                          <h3 style={{ marginBottom: "15px", fontSize: "1.5rem" }}>
                            {project.title}
                          </h3>
                          <p style={{ fontSize: "1rem", opacity: "0.8", lineHeight: "1.6" }}>
                            {project.description}
                          </p>
                        </div>
                        <div style={{ textAlign: "center", marginTop: "15px" }}>
                          <span style={{ opacity: "0.7" }}>Click to view project images</span>
                        </div>
                      </motion.div>
                    </Col>
                  ))}
                </Row>

                {/* Custom Modal */}
                {showModal && (
                  <div 
                    style={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 1000,
                      padding: '20px',
                    }}
                  >
                    <div 
                      style={{
                        backgroundColor: 'white',
                        borderRadius: '15px',
                        maxWidth: '900px',
                        width: '100%',
                        maxHeight: '80vh',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                      }}
                    >
                      {/* Modal Header */}
                      <div 
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '20px',
                          borderBottom: '1px solid #e0e0e0',
                        }}
                      >
                        <h2 
                          style={{ 
                            margin: 0, 
                            color: '#004d66', 
                            fontSize: '1.5rem',
                            fontWeight: '600'
                          }}
                        >
                          {selectedProjectTitle}
                        </h2>
                        <button 
                          onClick={handleCloseModal}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#1A2841',
                            cursor: 'pointer',
                          }}
                        >
                          <X size={24} />
                        </button>
                      </div>

                      {/* Image Display Area */}
                      <div 
                        style={{
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '20px',
                          flex: 1,
                          overflow: 'hidden',
                        }}
                      >
                        {/* Previous Image Button */}
                        <button
                          onClick={handlePrevImage}
                          style={{
                            position: 'absolute',
                            left: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(26, 40, 65, 0.7)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 10,
                          }}
                        >
                          <ChevronLeft size={24} />
                        </button>

                        {/* Current Image */}
                        <img 
                          src={selectedImages[currentImageIndex]} 
                          alt={`Project Image ${currentImageIndex + 1}`}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '500px',
                            objectFit: 'contain',
                            borderRadius: '10px',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                          }}
                        />

                        {/* Next Image Button */}
                        <button
                          onClick={handleNextImage}
                          style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(26, 40, 65, 0.7)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 10,
                          }}
                        >
                          <ChevronRight size={24} />
                        </button>
                      </div>

                      {/* Image Indicator */}
                      <div 
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          padding: '10px',
                          backgroundColor: '#f0f4f8',
                          borderBottomLeftRadius: '15px',
                          borderBottomRightRadius: '15px',
                        }}
                      >
                        {selectedImages.map((_, index) => (
                          <div 
                            key={index}
                            style={{
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                              backgroundColor: index === currentImageIndex ? '#1A2841' : '#c0c0c0',
                              margin: '0 5px',
                              cursor: 'pointer',
                            }}
                            onClick={() => setCurrentImageIndex(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Container>
            </motion.div>
          </motion.div>

        </Container>
      </div>
    </ObserverWrapper>
  );
};

export default About;
