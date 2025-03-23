"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const categories = [
  "Analyst",
  "Developer",
  "Non-tech",
  "Fresher",
  "Existing PMs",
];

const successStories = [
  {
    name: "Sri Vamsi Relangi",
    previousRole: "Analytics Consultant",
    previousCompany: "EXL",
    newRole: "Associate Product Manager",
    newCompany: "FRND",
    profileImg: require("@/assets/user.jpeg"),
    previousCompanyLogo: require("@/assets/cname.webp"),
    newCompanyLogo: require("@/assets/cname.webp"),
    testimonial:
      "I am grateful for the opportunity to learn directly from industry experts like Arindam Mukherjee, Anirban Das, and others, who have provided me with valuable insights.",
    linkedIn: "#",
  },
  {
    name: "Vaibhav",
    previousRole: "Product Analyst",
    previousCompany: "HighRadius",
    newRole: "Associate Product Manager",
    newCompany: "DeHaat",
    profileImg: require("@/assets/user.jpeg"),
    previousCompanyLogo: require("@/assets/cname.webp"),
    newCompanyLogo: require("@/assets/cname.webp"),
    testimonial:
      "One thing I know is even if I fail to make it to the Top Fellows, I’d still be happy because I got to experience & enjoy these 8 weeks.",
    linkedIn: "#",
  },
  {
    name: "Himani Sharma",
    previousRole: "Business Analyst",
    previousCompany: "Collegeduniya",
    newRole: "Senior Product Analyst",
    newCompany: "Phenom",
    profileImg: require("@/assets/user.jpeg"),
    previousCompanyLogo: require("@/assets/cname.webp"),
    newCompanyLogo: require("@/assets/cname.webp"),
    testimonial:
      "NextLeap has perfectly initiated my Product Management journey, and I am excited to dive deeper into it. Thrilled to announce that I have completed the Product Management Fellowship.",
    linkedIn: "#",
  },
];

export default function SuccessStoriesSection() {
  const [startIndex, setStartIndex] = useState(0);
  const storiesPerPage = 3;

  const nextPage = () => {
    if (startIndex + storiesPerPage < successStories.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevPage = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="px-4 md:px-6 lg:px-20 py-12  text-white relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          750+ Success Stories
        </h2>
        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {categories.map((category, index) => (
            <button
              key={index}
              className="bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-200 transition"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Success Stories Grid with Framer Motion */}
        <div className="overflow-hidden relative">
          <motion.div
            key={startIndex}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {successStories
              .slice(startIndex, startIndex + storiesPerPage)
              .map((story, index) => (
                <div
                  key={index}
                  className="bg-white text-black rounded-xl p-6 shadow-lg"
                >
                  {/* Profile Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={story.profileImg}
                      alt={story.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold">{story.name}</h3>
                      <a
                        href={story.linkedIn}
                        className="text-blue-500 text-sm flex items-center"
                      >
                        <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                          alt="LinkedIn"
                          width={16}
                          height={16}
                        />
                      </a>
                    </div>
                  </div>

                  {/* Company Transition */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col items-center">
                      <Image
                        src={story.previousCompanyLogo}
                        alt="Previous Company"
                        width={50}
                        height={30}
                      />
                      <p className="text-xs">{story.previousCompany}</p>
                      <p className="text-xs font-semibold">
                        {story.previousRole}
                      </p>
                    </div>
                    <span className="text-xl">→</span>
                    <div className="flex flex-col items-center">
                      <Image
                        src={story.newCompanyLogo}
                        alt="New Company"
                        width={50}
                        height={30}
                      />
                      <p className="text-xs">{story.newCompany}</p>
                      <p className="text-xs font-semibold">{story.newRole}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <p className="text-sm mb-4">{story.testimonial}</p>

                  {/* Read More */}
                  <a
                    href={story.linkedIn}
                    className="text-blue-500 text-sm font-semibold"
                  >
                    Read on LinkedIn
                  </a>
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
            disabled={startIndex + storiesPerPage >= successStories.length}
          >
            <ArrowRight className="w-7 h-7 text-black hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
