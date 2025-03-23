"use client";

import {  useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhyChooseSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="px-4 md:px-6 lg:px-20 py-12 text-white">
      <div className="max-w-7xl mx-auto bg-white/10 p-8 rounded-xl">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          NextLeap Product Management Fellowship: Unlock Your Potential with Our Product Management Course
        </h2>

        {/* Description */}
        <p className="text-white/80 text-center mb-6">
          Are you ready to master the skills needed to build and manage successful products? The NextLeap Product Management Fellowship is the perfect launchpad for aspiring product managers looking to break into the industry. Our structured product management course offers a hands-on learning experience, equipping you with the tools and insights required to become a successful product manager in today’s competitive landscape.
        </p>

        {/* Subheading */}
        <h3 className="text-xl font-semibold mb-4">Why Choose NextLeap’s Product Management Course?</h3>

        {/* Expandable Content with Framer Motion */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p className="text-white/80 mb-4">
                <strong>1. Comprehensive, Industry-Aligned Curriculum</strong>
              </p>
              <p className="text-white/60">
                Our product management course offers an in-depth understanding of the product lifecycle, including:
              </p>
              <ul className="list-disc list-inside text-white/60 mt-2">
                <li>
                  <strong className="text-white">Product Strategy:</strong> Learn to define the vision, mission, and roadmap for your products.
                </li>
                <li>
                  <strong className="text-white">User Research:</strong> Understand customer pain points and how to validate product ideas.
                </li>
                <li>
                  <strong className="text-white">Agile Execution:</strong> Implement agile methodologies to build and scale products.
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Read More Button */}
        <div className="flex justify-center mt-4">
          <button
            className="text-white font-semibold hover:underline flex items-center"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read Less ▲" : "Read More ▼"}
          </button>
        </div>
      </div>
    </section>
  );
}