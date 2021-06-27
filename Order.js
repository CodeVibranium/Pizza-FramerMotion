import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Order = ({ pizza, showModal }) => {
  useEffect(() => {
    setTimeout(() => {
      showModal(true);
    }, 3000);
  }, [showModal]);
  // setTimeout(() => {
  //   showModal(true);
  // }, 5000);

  return (
    <motion.div
      className="container order"
      exit={{
        x: "-100vw",
        transition: { ease: "easeInOut" },
      }}
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </motion.div>
  );
};

export default Order;
