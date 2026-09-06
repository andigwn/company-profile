"use client";

import { motion } from "framer-motion";

export default function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-lg bg-white p-6 text-center shadow-sm"
    >
      <p className="text-3xl font-bold text-primary">{number}</p>
      <p className="mt-2 text-sm text-black">{label}</p>
    </motion.div>
  );
}
