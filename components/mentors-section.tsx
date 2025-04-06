"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const mentors = [
  {
    name: "Akash Agarwal",
    role: "Product Manager",
    company: "Flipkart",
    profileImg: require("@/assets/user.jpeg"),
    companyLogo: require("@/assets/cname.webp"),
  },
  {
    name: "Sachin Pathak",
    role: "Product Manager @ Razorpay",
    company: "Razorpay",
    profileImg: require("@/assets/user.jpeg"),
    companyLogo: require("@/assets/cname.webp"),
  },
  {
    name: "Devendra Jain",
    role: "Product Manager",
    company: "Disney+ Hotstar",
    profileImg: require("@/assets/user.jpeg"),
    companyLogo: require("@/assets/cname.webp"),
  },
  {
    name: "Nidhi Agarwal",
    role: "Product Manager",
    company: "Swiggy",
    profileImg: require("@/assets/user.jpeg"),
    companyLogo: require("@/assets/cname.webp"),
  },
  {
    name: "Tarun Dixit",
    role: "Product Manager",
    company: "Amazon",
    profileImg: require("@/assets/user.jpeg"),
    companyLogo: require("@/assets/cname.webp"),
  },
  {
    name: "Ajay Saxena",
    role: "Product Lead @ MakeMyTrip",
    company: "MakeMyTrip",
    profileImg: require("@/assets/user.jpeg"),
    companyLogo: require("@/assets/cname.webp"),
  },
  {
    name: "Samarth Chauhan",
    role: "Product Manager",
    company: "Google",
    profileImg: require("@/assets/user.jpeg"),
    companyLogo: require("@/assets/cname.webp"),
  },
  {
    name: "Chinmay Agarwal",
    role: "Product Manager",
    company: "Microsoft",
    profileImg: require("@/assets/user.jpeg"),
    companyLogo: require("@/assets/cname.webp"),
  },
];

export default function MentorsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const mentorsPerPage = 4;

  const nextPage = () => {
    if (startIndex + mentorsPerPage < mentors.length) {
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Prepare Interview with VenturePrepAI
        </h2>
        <p className="text-sm text-gray-300 mb-8 text-center">
        Get interview-ready with VenturePrepAI, your smart assistant for cracking technical and behavioral rounds. Practice tailored questions, receive instant feedback, and boost your confidence before the big day.
        </p>

        {/* Mentors Grid with Framer Motion */}
        <div className="overflow-hidden relative">
          <motion.div
            key={startIndex}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {mentors
              .slice(startIndex, startIndex + mentorsPerPage)
              .map((mentor, index) => (
                <div key={index} className="bg-white text-black rounded-xl p-6 shadow-lg relative">
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
                      src={mentor.profileImg}
                      alt={mentor.name}
                      width={100}
                      height={100}
                      className="rounded-full mb-4"
                    />
                    <h3 className="font-bold text-center">{mentor.name}</h3>
                    <p className="text-sm text-center">{mentor.role}</p>

                    {/* Company Logo */}
                    <div className="mt-4">
                      <Image
                        src={mentor.companyLogo}
                        alt={`${mentor.company} logo`}
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
            disabled={startIndex + mentorsPerPage >= mentors.length}
          >
            <ArrowRight className="w-7 h-7 text-black hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

