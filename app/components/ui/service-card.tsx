"use client";

import { motion } from "framer-motion";

export default function ServiceCard({ 
  title, 
  description, 
  features, 
  delay 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:border-primary hover:shadow-lg"
    >
      <div className="mb-4 inline-block rounded-full bg-primary/10 p-3">
        <div className="h-6 w-6 rounded-full bg-primary" />
      </div>
      <h3 className="text-xl font-semibold text-black">{title}</h3>
      <p className="mt-3 text-black">{description}</p>
      <ul className="mt-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-black">
            <span className="text-primary">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
