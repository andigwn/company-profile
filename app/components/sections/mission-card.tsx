"use client";

import { motion } from "framer-motion";

export default function MissionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-gray-100 p-8"
    >
      <h2 className="text-2xl font-semibold text-black">Our Mission</h2>
      <p className="mt-4 text-black">
        To empower businesses through innovative digital solutions that drive growth,
        enhance efficiency, and create lasting impact in the digital landscape.
      </p>
      
      <h3 className="mt-8 text-xl font-semibold text-black">Our Values</h3>
      <ul className="mt-4 space-y-3 text-black">
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          <span>Integrity in everything we do</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          <span>Excellence in delivery</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          <span>Customer-first approach</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          <span>Continuous innovation</span>
        </li>
      </ul>
    </motion.div>
  );
}
