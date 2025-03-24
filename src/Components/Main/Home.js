import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {  FaLinkedinIn, FaInstagram, FaFileAlt, FaBookOpen, FaShareAlt, FaBullhorn, FaImages, FaBox, FaPalette, FaYoutube ,FaPaintBrush  } from "react-icons/fa";
import ObserverWrapper from "./ObserverWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThreads } from "@fortawesome/free-brands-svg-icons";

const Home = ({ handleScroll }) => {
  const animationSettings = { 
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  
  return (
    <ObserverWrapper animation={animationSettings}>
    <div id="home" style={{ background: "#e6f7ff", minHeight: "100vh", display: "flex",  alignItems: "center", justifyContent: "center", position: "relative",overflow: "hidden", paddingBottom:'70px'}}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.4, zIndex: 0}}>        
        {[...Array(10)].map((_, i) => (
          <motion.div key={i} initial={{ x: Math.random() * 100 - 50, y: Math.random() * 100 - 50, opacity: Math.random() * 0.5 + 0.3}} animate={{ x: Math.random() * 100 - 50, y: Math.random() * 100 - 50, opacity: Math.random() * 0.5 + 0.3}} transition={{ repeat: Infinity, repeatType: "reverse",duration: Math.random() * 15 + 10}} style={{ position: "absolute", left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: `${Math.random() * 150 + 50}px`, height: `${Math.random() * 150 + 50}px`, borderRadius: "50%", background: `rgba(0, 77, 102, ${Math.random() * 0.1})`,filter: "blur(40px)" }}/>
        ))}
      </div>

      <Container style={{ position: "relative", zIndex: 1 }}>
        <Row className="justify-content-center text-center">
          <Col lg={9} md={12}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "5px"}}>
              
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ padding: "15px 30px", background: "rgba(0, 77, 102, 0.1)", borderRadius: "50px", marginBottom: "20px", marginTop:'40px'}}>
                <span style={{ color: "#004d66", fontWeight: "500" }}>Graphic Designer</span>
              </motion.div>

              <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ color: "#004d66", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: "bold", marginBottom: "20px", lineHeight: 1.2 }}>
                Creating Stunning Visuals <br/> for Impactful Brands
              </motion.h1>

              <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ color: "#004d66", fontSize: "1.1rem", maxWidth: "750px", marginBottom: "30px", opacity: 0.9 }}>
                Hello! I'm Bhuvaneswari, a passionate designer dedicated to crafting visually stunning and functional designs that help businesses stand out in today's competitive digital landscape.
              </motion.p>

              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} style={{ display: "flex",  gap: "15px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px" }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button href="#contact" onClick={(e) => handleScroll(e, "#contact")} style={{ backgroundColor: "#004d66", borderColor: "#004d66", color: "#e6f7ff", fontWeight: "500", padding: "12px 28px", borderRadius: "50px", transition: "all 0.3s ease", boxShadow: "0 4px 15px rgba(0, 77, 102, 0.2)" }}>
                    Hire Me
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button href="#portfolio" onClick={(e) => handleScroll(e, "#about")} style={{ backgroundColor: "transparent", borderColor: "#004d66", color: "#004d66", fontWeight: "500", padding: "12px 28px", borderRadius: "50px", transition: "all 0.3s ease"}}>
                    View My Work
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} style={{ display: "flex",flexDirection: "column", alignItems: "center", gap: "0px"}}>
              {/* Service highlights */}
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", marginBottom: "40px"}}>
                {[
                  { icon: <FaPalette />, text: "Brand Design" },
                  { icon: <FaFileAlt />, text: "Flyers" },
                  { icon: <FaBookOpen />, text: "Brochures" },
                  { icon: <FaShareAlt />, text: "Social Media Posters" },
                  { icon: <FaBullhorn />, text: "Social Media Ads" },
                  { icon: <FaImages />, text: "Thumbnails" },
                  { icon: <FaBox />, text: "Product Packaging Design" },
                  { icon: <FaPaintBrush />, text: "Logo Design" }
              
                ].map((item, idx) => (
                  <motion.div key={idx} whileHover={{ y: -5 }} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 20px",backgroundColor: "rgba(255, 255, 255, 0.7)", borderRadius: "50px",boxShadow: "0 4px 10px rgba(0, 77, 102, 0.1)"}}>
                    <span style={{ color: "#004d66", fontSize: "1.2rem" }}>
                      {item.icon}
                    </span>
                    <span style={{ color: "#004d66", fontWeight: "500" }}>
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Social media links */}
              <div style={{marginTop:''}}>
                <p style={{ color: "#004d66", fontWeight: "500", marginBottom: "15px" }}>
                  Follow Me
                </p>

                <div style={{ display: "flex", justifyContent: "center", gap: "25px" }}>
                  {[
                    { icon: <FontAwesomeIcon icon={faThreads} />, link: "https://www.threads.net/@_._bhuvi_freelance_designer_._" },
                    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/bhuvaneswari-v-342894214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                    { icon: <FaInstagram />, link: "https://www.instagram.com/_._bhuvi_freelance_designer_._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                    { icon: <FaYoutube />, link: "https://youtube.com/@shandesignspace?si=12AAjNNBYBWZDjch "}
                  ].map((social, index) => (
                    <motion.a key={index} href={social.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 10 }} style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#004d66", color: "#e6f7ff", borderRadius: "50%", boxShadow: "0 4px 10px rgba(0, 77, 102, 0.2)", transition: "transform 0.3s ease"}}>
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
    </ObserverWrapper>
  );
};

export default Home;
