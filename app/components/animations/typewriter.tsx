"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function TypeWriterAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Your Company",
        3000,
        "Innovation",
        3000,
        "Excellence",
        3000,
        "Success",
        3000,
      ]}
      wrapper="span"
      speed={20}
      className="text-primary"
      repeat={Infinity}
    />
  );
}
