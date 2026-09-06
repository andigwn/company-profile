"use client";

import { motion } from "framer-motion";

export default function TeamSection() {
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
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-black">
            The talented people behind our success
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <TeamMember name="John Doe" role="CEO & Founder" image="https://placehold.co/400x400/22c55e/ffffff?text=JD" delay={0.1} />
          <TeamMember name="Jane Smith" role="Creative Director" image="https://placehold.co/400x400/22c55e/ffffff?text=JS" delay={0.2} />
          <TeamMember name="Bob Johnson" role="Technical Lead" image="https://placehold.co/400x400/22c55e/ffffff?text=BJ" delay={0.3} />
        </div>
      </div>
    </section>
  );
}

function TeamMember({ name, role, image, delay }: { name: string; role: string; image: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <img src={image} alt={name} className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-black">{name}</h3>
        <p className="mt-1 text-primary">{role}</p>
      </div>
    </motion.div>
  );
}
