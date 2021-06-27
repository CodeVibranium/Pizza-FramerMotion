import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// import { showHelp } from "yargs";

const ModalVarinat = {
  Inital: { opacity: 0 },
  Final: { opacity: 1 },
};
const RealModalVariant = {
  Initial: {
    opacity: 0,
    y: "-100vh",
  },
  Final: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 },
  },
};

function Modal({ modal, showModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {modal && (
        <motion.div
          className="backDrop"
          variants={ModalVarinat}
          initial="Initial"
          animate="Final"
          exit="Initial"
        >
          <motion.div variants={RealModalVariant} className="modal">
            <h4>Want to order another pizza ?</h4>
            <div>
              <Link to="/">
                <button
                  className="OrderNow"
                  onClick={() => {
                    showModal(false);
                  }}
                >
                  Order Now
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default Modal;
