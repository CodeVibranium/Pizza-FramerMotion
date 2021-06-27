import React from "react";
import { motion } from "framer-motion";

const svgVariant = {
  Initial: { rotate: -180 },
  Final: { rotate: 0, transition: { duration: 1, ease: "easeInOut" } },
};
const pathVariant = {
  Initial: {
    opacity: 0,
    pathLength: 0,
  },
  Final: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};
const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg
          variants={svgVariant}
          initial="Initial"
          animate="Final"
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVariant}
            initial="Initial"
            animate="Final"
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariant}
            initial="Initial"
            animate="Final"
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div
        className="title"
        initial={{
          opacity: 0,
          scale: 0.5,
          y: -100,
        }}
        animate={{
          type: "spring",
          stiffness: 120,
          opacity: 1,
          y: 0,
          fontSize: 15,
          scale: 1,
        }}
        whileHover={{
          fontSize: 25,
        }}
        transition={{ duration: 0.5 }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
