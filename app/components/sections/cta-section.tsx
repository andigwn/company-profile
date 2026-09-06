"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-black">
            Let's build something amazing together
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
