"use client";

import { motion } from "framer-motion";
import MissionCard from "../components/sections/mission-card";
import StatCard from "../components/ui/stat-card";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl font-bold text-black sm:text-5xl">
                About Our Company
              </h1>
              <p className="mt-6 text-lg text-black">
                We are a team of passionate professionals dedicated to delivering excellence in every project.
                Since our inception, we've been committed to innovation and customer satisfaction.
              </p>
              
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <StatCard number="50+" label="Projects Completed" />
                <StatCard number="25+" label="Happy Clients" />
                <StatCard number="10+" label="Years Experience" />
                <StatCard number="15" label="Team Members" />
              </div>
            </motion.div>
            
            <MissionCard />
          </div>
        </div>
      </section>

      <TeamSection />
    </div>
  );
}

function TeamSection() {
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
