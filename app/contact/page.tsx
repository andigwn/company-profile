"use client";

import { motion } from "framer-motion";
import ContactForm from "../components/ui/contact-form";
import ContactInfo from "../components/ui/contact-info";

export default function ContactPage() {
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
              Get In Touch
            </h1>
            <p className="mt-4 text-lg text-black">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <ContactForm />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold text-black">
                  Contact Information
                </h2>
                <p className="mt-4 text-black">
                  Have questions? Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <ContactInfo icon="📧" title="Email" value="info@companyprofile.com" />
                <ContactInfo icon="📞" title="Phone" value="+1 (555) 123-4567" />
                <ContactInfo icon="📍" title="Address" value="123 Business St, Suite 100, City, State 12345" />
                <ContactInfo icon="🕐" title="Business Hours" value="Monday - Friday: 9:00 AM - 6:00 PM" />
              </div>

              <div className="rounded-2xl bg-gray-100 p-8">
                <h3 className="text-lg font-semibold text-black">
                  Follow Us
                </h3>
                <div className="mt-4 flex gap-4">
                  <SocialLink href="#" label="LinkedIn" />
                  <SocialLink href="#" label="Twitter" />
                  <SocialLink href="#" label="GitHub" />
                  <SocialLink href="#" label="Facebook" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
    >
      {label}
    </a>
  );
}
