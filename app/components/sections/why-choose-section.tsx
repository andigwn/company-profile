"use client";

import { motion } from "framer-motion";

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-black">
            We deliver excellence in everything we do
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <FeatureItem title="Innovation" description="Cutting-edge solutions powered by the latest technologies" delay={0.1} />
          <FeatureItem title="Quality" description="Exceptional standards in every project we deliver" delay={0.2} />
          <FeatureItem title="Support" description="24/7 dedicated support for all our clients" delay={0.3} />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, description, delay }: { title: string; description: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
    >
      <h3 className="text-xl font-semibold text-black">{title}</h3>
      <p className="mt-4 text-black">{description}</p>
    </motion.div>
  );
}
