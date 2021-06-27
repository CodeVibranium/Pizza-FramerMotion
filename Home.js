import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      exit={{
        x: "-100vw",
        transition: { ease: "easeInOut" },
      }}
      className="home container"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1.25, when: "beforeChildren" }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          initial={{ x: "-100vw", opacity: 0, scale: 1 }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
            type: "spring",
            stiffness: 120,
          }}
          // transition={{ duration: 0.5, delay: 0.9 }}
          whileHover={{
            scale: 1.1,
            textShadow: "0 0 8px rgb(255,255,255)",
            boxShadow: "0 0 8px rgb(255,255,255)",
            transition: {
              yoyo: Infinity,
            },
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
