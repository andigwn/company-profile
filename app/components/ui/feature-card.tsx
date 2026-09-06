"use client";

import { motion } from "framer-motion";

export default function FeatureCard({ 
  title, 
  description, 
  delay 
}: { 
  title: string; 
  description: string; 
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
    >
      <h3 className="text-xl font-semibold text-black">
        {title}
      </h3>
      <p className="mt-4 text-black">{description}</p>
    </motion.div>
  );
}
