"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(0);
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-zinc-200 bg-white py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-primary">CompanyProfile</h3>
            <p className="mt-2 text-sm text-black">
              Building amazing digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-black">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-black">
              <li><a href="#" className="hover:text-primary">Features</a></li>
              <li><a href="#" className="hover:text-primary">Pricing</a></li>
              <li><a href="#" className="hover:text-primary">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-black">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-black">
              <li><a href="/about" className="hover:text-primary">About</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-black">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-black">
              <li><a href="#" className="hover:text-primary">Privacy</a></li>
              <li><a href="#" className="hover:text-primary">Terms</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        
          <div className="mt-12 border-t border-zinc-200 pt-8">
            <p className="text-center text-sm text-black">
            © {currentYear > 0 ? currentYear : 2026} CompanyProfile. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
