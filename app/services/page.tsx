"use client";

import { motion } from "framer-motion";
import ServiceCard from "../components/ui/service-card";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and best practices.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Performance",
        "Secure & Scalable",
      ],
      delay: 0.1,
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      features: [
        "iOS & Android",
        "React Native",
        "Flutter",
        "App Store Publishing",
      ],
      delay: 0.2,
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive designs that enhance user experience.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      delay: 0.3,
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment strategies.",
      features: ["AWS/Azure/GCP", "CI/CD Pipeline", "Monitoring", "DevOps"],
      delay: 0.4,
    },
    {
      title: "E-Commerce",
      description: "Complete online store solutions with payment integration.",
      features: ["Shopping Cart", "Payment Gateway", "Inventory", "Analytics"],
      delay: 0.5,
    },
    {
      title: "Consulting",
      description:
        "Expert guidance on technology strategy and digital transformation.",
      features: ["Tech Strategy", "Architecture", "Best Practices", "Training"],
      delay: 0.6,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-black sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-black">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-linear-to-br from-primary to-primary-dark p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Need a Custom Solution?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              We create tailored solutions to meet your unique business
              requirements
            </p>
            <button className="mt-8 rounded-full bg-white px-8 py-3 font-medium text-primary transition-transform hover:scale-105">
              Get a Quote
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
