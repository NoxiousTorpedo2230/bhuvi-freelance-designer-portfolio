import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ObserverWrapper = ({ children, animation, threshold = 0.1 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animation}
    >
      {children}
    </motion.div>
  );
};

export default ObserverWrapper;