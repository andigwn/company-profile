"use client";

import { motion } from "framer-motion";

export default function ContactInfo({ icon, title, value }: { icon: string; title: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-2xl">{icon}</span>
      <div>
        <h3 className="font-medium text-black">{title}</h3>
        <p className="mt-1 text-black">{value}</p>
      </div>
    </div>
  );
}
