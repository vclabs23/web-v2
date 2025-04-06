"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Monitor,
  FileText,
  CheckCircle,
  GraduationCap,} from "lucide-react";

// Sample student portfolio data
const students = [
  { name: "Suruthiprakalya Rameshnathan", image: require("@/assets/user.jpeg") },
  { name: "ARYAN PASRICHA", image: require("@/assets/user.jpeg") },
  { name: "Ryan Chowdhury", image: require("@/assets/user.jpeg") },
  { name: "Sanjeev Sahu", image: require("@/assets/user.jpeg") },
  { name: "Aarav Mehta", image: require("@/assets/user.jpeg") },
  { name: "Ishaan Roy", image: require("@/assets/user.jpeg") },
  { name: "Riya Kapoor", image: require("@/assets/user.jpeg") },
  { name: "Neha Sharma", image: require("@/assets/user.jpeg") },
];

export default function SkillsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const studentsPerPage = 4;

  const nextPage = () => {
    if (startIndex + studentsPerPage < students.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevPage = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="px-4 md:px-6 lg:px-20 py-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Build Skills The VC Lab Way
        </h2>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            { title: "Expert led live sessions", icon: Monitor },
            { title: "Weekly Projects", icon: FileText },
            { title: "Mentor Feedback", icon: CheckCircle },
            { title: "Access to VenturePrepAI", icon: GraduationCap },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="rounded-lg p-4 text-5xl">
                {<item.icon/>}
              </div>
              <h3 className="font-bold">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Student Portfolio Cards */}
        {/* <div className="overflow-hidden relative">
          <motion.div
            key={startIndex}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {students
              .slice(startIndex, startIndex + studentsPerPage)
              .map((student, index) => (
                <div key={index} className="bg-white text-black rounded-xl p-6 shadow-lg">
                  <div className="flex flex-col items-center">
                    <Image
                      src={student.image}
                      alt={student.name}
                      width={100}
                      height={100}
                      className="rounded-full mb-4 object-cover"
                    />
                    <h3 className="text-center font-bold">{student.name}</h3>
                    <a
                      href="#"
                      className="flex items-center bg-gray-200 px-4 py-3 rounded-xl text-primary text-sm font-medium mt-4"
                    >
                      View Portfolio <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
          </motion.div>
        </div> */}

        {/* Pagination Controls (Bottom Right) */}
        {/* <div className="w-full flex items-center justify-end mt-6 gap-4">
          <button
            className="w-10 h-10 rounded-xl bg-white flex items-center justify-center hover:bg-white/10 transition"
            onClick={prevPage}
            disabled={startIndex === 0}
          >
            <ArrowLeft className="w-5 h-5 text-black hover:text-white" />
          </button>
          <button
            className="w-10 h-10 rounded-xl bg-white flex items-center justify-center hover:bg-white/10 transition"
            onClick={nextPage}
            disabled={startIndex + studentsPerPage >= students.length}
          >
            <ArrowRight className="w-5 h-5 text-black hover:text-white" />
          </button>
        </div> */}
      </div>
    </section>
  );
}