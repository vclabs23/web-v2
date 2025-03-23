"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const instructors = [
  {
    name: "Arindam Mukherjee",
    role: "Co-founder",
    company: "NextLeap",
    profileImg: require("@/assets/user.jpeg"),
    companyLogo: require("@/assets/cname.webp"),
  },
  {
    name: "Anirban Das",
    role: "Sr Director Product, Vehicle Experience",
    company: "OLA Electric",
    profileImg: require("@/assets/user.jpeg"),
    companyLogo: require("@/assets/cname.webp"),
  },
  {
    name: "Eshan Tiwari",
    role: "Data Science Lead",
    company: "Google",
    profileImg: require("@/assets/user.jpeg"),
    companyLogo: require("@/assets/cname.webp"),
  },
  {
    name: "Shrenik Surana",
    role: "Principal Product Manager at Swiggy",
    company: "Swiggy",
    profileImg: require("@/assets/user.jpeg"),
    companyLogo: require("@/assets/cname.webp"),
  },
  {
    name: "Shweta Sharma",
    role: "Product Manager",
    company: "Amazon",
    profileImg: require("@/assets/user.jpeg"),
    companyLogo: require("@/assets/cname.webp"),
  },
  {
    name: "Himanshu Aggarwal",
    role: "Product Manager (Tech)",
    company: "Swiggy",
    profileImg: require("@/assets/user.jpeg"),
    companyLogo: require("@/assets/cname.webp"),
  },
  {
    name: "Prashant Bhakar",
    role: "Product Manager",
    company: "BYJU'S",
    profileImg: require("@/assets/user.jpeg"),
    companyLogo: require("@/assets/cname.webp"),
  },
  {
    name: "Kartik Singh",
    role: "Sr. Manager",
    company: "TapResearch",
    profileImg: require("@/assets/user.jpeg"),
    companyLogo: require("@/assets/cname.webp"),
  },
];

export default function InstructorsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const instructorsPerPage = 4;

  const nextPage = () => {
    if (startIndex + instructorsPerPage < instructors.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevPage = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="px-4 md:px-6 lg:px-20 py-12 text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Learn Concepts From Our Instructors
        </h2>

        {/* Instructors Grid with Framer Motion */}
        <div className="overflow-hidden relative">
          <motion.div
            key={startIndex}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {instructors
              .slice(startIndex, startIndex + instructorsPerPage)
              .map((instructor, index) => (
                <div
                  key={index}
                  className="bg-white text-black rounded-xl p-6 shadow-lg relative"
                >
                  {/* LinkedIn Icon */}
                  <div className="absolute top-4 right-4">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                    />
                  </div>

                  {/* Profile Image */}
                  <div className="flex flex-col items-center">
                    <Image
                      src={instructor.profileImg}
                      alt={instructor.name}
                      width={100}
                      height={100}
                      className="rounded-full mb-4"
                    />
                    <h3 className="font-bold text-center">{instructor.name}</h3>
                    <p className="text-sm text-center">{instructor.role}</p>

                    {/* Company Logo */}
                    <div className="mt-4">
                      <Image
                        src={instructor.companyLogo}
                        alt={`${instructor.company} logo`}
                        width={80}
                        height={30}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </div>

        {/* Pagination Controls (Bottom Right) */}
        <div className="w-full flex items-center justify-end mt-4 gap-4">
          <button
            className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/10 bg-white transition"
            onClick={prevPage}
            disabled={startIndex === 0}
          >
            <ArrowLeft className="w-7 h-7 text-black hover:text-white" />
          </button>
          <button
            className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/10 bg-white transition"
            onClick={nextPage}
            disabled={startIndex + instructorsPerPage >= instructors.length}
          >
            <ArrowRight className="w-7 h-7 text-black hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
