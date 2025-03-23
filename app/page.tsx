"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronDown,
  ChevronUp,
  Download,
  Phone,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FAQSection from "@/components/faq-section";
import SuccessStories from "@/components/success-stories";
import CohortStats from "@/components/cohort-stats";
import InstructorsSection from "@/components/instructors-section";
import MentorsSection from "@/components/mentors-section";
import ProgramTimeline from "@/components/program-timeline";
import ToolsSection from "@/components/tools-section";
import CallbackButton from "@/components/callback-button";
import "@/styles/components/page.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import WhyChooseSection from "@/components/why-choose";
import SkillsSection from "@/components/build-skill";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const people = [
    {
      name: "Kanika Gour",
      profileImg: require("../assets/user.jpeg"),
      companyLogo: require("../assets/cname.webp"),
    },
    {
      name: "Aekansh Dixit",
      profileImg: require("../assets/user.jpeg"),
      companyLogo: require("../assets/cname.webp"),
    },
    {
      name: "Vishesh Prabhu",
      profileImg: require("../assets/user.jpeg"),
      companyLogo: require("../assets/cname.webp"),
    },
    {
      name: "Trisha Agarwal",
      profileImg: require("../assets/user.jpeg"),
      companyLogo: require("../assets/cname.webp"),
    },
    {
      name: "Sahil Nizam",
      profileImg: require("../assets/user.jpeg"),
      companyLogo: require("../assets/cname.webp"),
    },
    {
      name: "Ashar Khan",
      profileImg: require("../assets/user.jpeg"),
      companyLogo: require("../assets/cname.webp"),
    },
  ];
  const [isExpanded, setIsExpanded] = useState(false);
  const curriculum = [
    {
      week: "Week 1",
      title: "Mapping Business Outcomes to Product Outcomes",
      topics: [
        "Systems thinking",
        "Understanding Business Models",
        "KPI trees",
        "Impact Mapping",
      ],
      caseStudies: ["BeReal", "YouTube"],
    },
    {
      week: "Week 2",
      title: "Product Discovery & User Research",
      topics: [
        "User Research Methodologies",
        "Journey Mapping & User Personas",
        "Hypotheses building",
        "Problem Framing",
      ],
      caseStudies: ["Amazon"],
    },
    {
      week: "Week 3",
      title: "Ideation & Validation",
      topics: [
        "Mindmapping solutions",
        "Understanding product risks",
        "Crafting User Stories",
        "Human Motivations",
      ],
      caseStudies: ["Flipkart", "Tripadvisor"],
    },
    {
      week: "Week 4",
      title: "Prototyping & Wireframing",
      topics: [
        "Sketching ideas",
        "Wireframing tools",
        "Prototyping best practices",
      ],
      caseStudies: ["Netflix"],
    },
    {
      week: "Week 5",
      title: "Go-to-Market Strategy",
      topics: ["Launch planning", "Growth hacking", "Metrics for success"],
      caseStudies: ["Uber"],
    },
    {
      week: "Week 6",
      title: "Monetization & Pricing Models",
      topics: ["Freemium vs Subscription", "Value-based pricing"],
      caseStudies: ["Airbnb"],
    },
    {
      week: "Week 7",
      title: "Data-Driven Decision Making",
      topics: ["A/B Testing", "Cohort Analysis", "Product Metrics"],
      caseStudies: ["Tesla"],
    },
    {
      week: "Week 8",
      title: "Managing Stakeholders",
      topics: ["Internal & External Stakeholders", "Influence & Persuasion"],
      caseStudies: ["Meta"],
    },
    {
      week: "Week 9",
      title: "Scaling Products",
      topics: ["Technical Scalability", "Operational Challenges"],
      caseStudies: ["Amazon"],
    },
    {
      week: "Week 10",
      title: "Agile & Scrum Frameworks",
      topics: ["Sprint Planning", "Scrum vs Kanban"],
      caseStudies: ["Netflix"],
    },
    {
      week: "Week 11",
      title: "Building Product Roadmaps",
      topics: ["Prioritization Techniques", "Feature Development Planning"],
      caseStudies: ["Uber"],
    },
    {
      week: "Week 12",
      title: "Final Capstone Project",
      topics: ["Real-world Product Challenges", "Presentation & Review"],
      caseStudies: ["Airbnb"],
    },
  ];

  const [showEnrollBar, setShowEnrollBar] = useState(false);

  // Scroll event listener to show "Enroll Now" bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowEnrollBar(true);
      } else {
        setShowEnrollBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <div className="fixed hidden md:bottom-[15%] lg:bottom-[10%] right-4 lg:flex md:flex md:flex-row gap-4 z-50">
        <button className="flex items-center justify-center gap-2 shadow-2xl bg-yellow-100 text-black rounded-xl px-4 py-3 text-sm md:text-base hover:bg-black/20 hover:text-white transition">
          <Phone className="w-5 h-5" />
          <h3>Request a callback</h3>
        </button>
        <button className="flex items-center justify-center gap-2 shadow-2xl bg-green-600 text-white rounded-xl px-4 py-3 text-sm md:text-base hover:bg-black/20 transition">
          <h3>Message us on Whatsapp</h3>
        </button>
      </div>

      {/* Sticky Bottom "Enroll Now" Bar */}
      <AnimatePresence>
        {showEnrollBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-0 left-0 w-full z-40 bg-white shadow-md py-4 flex items-center justify-between px-6 md:px-12"
          >
            {/* Desktop View: Full Details */}
            <div className="hidden md:flex items-center gap-12 mr-4">
              <span className="text-gray-600 flex flex-col text-sm md:text-base">
                <span className="text-lg md:text-xl font-semibold">
                  Cohort 36 starts on:
                </span>
                <span className="text-green-600 text-lg md:text-xl">Apr 5</span>
              </span>
              <span className="text-gray-600 flex flex-col text-sm md:text-base">
                <span className="text-lg md:text-xl font-semibold">
                  Time Commitment:
                </span>
                12-14 hours/week
              </span>
            </div>

            {/* Always Visible: Cost & Enroll Now Button */}
            <div className="flex items-center justify-between w-full md:w-auto">
              <span className="text-gray-600 flex flex-col text-sm md:text-base">
                <span className="text-lg md:text-xl font-semibold">Cost:</span>
                <div className="flex justify-center md:justify-start items-center gap-2">
                  <span className="text-green-600 text-lg md:text-xl">
                    ₹28,999
                  </span>
                  <span className="line-through text-gray-500 text-sm md:text-base">
                    ₹39,999
                  </span>
                </div>
              </span>

              {/* Enroll Button */}
              <button className="bg-black text-white px-6 py-3 rounded-xl text-sm md:text-base hover:bg-gray-900 transition ml-4">
                Enroll Now →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Header />

      {/* Hero Section */}
      <section className="px-4 md:px-6 lg:px-20 py-12 md:py-16 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Left Section: Title & Features */}
          <div className="max-w-3xl">
            {/* Title & Description */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Product Manager Fellowship
            </h1>
            <p className="text-lg md:text-xl mb-8">
              12-week online Product Management Course with Certification and
              Placement Support
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 mb-12 rounded-xl overflow-hidden">
              {[
                { title: "Live", desc: "Sessions on Zoom" },
                { title: "3 months", desc: "Fellowship timeline" },
                { title: "Mentorship", desc: "With experienced PMs" },
                { title: "Placement", desc: "Support for 1 year" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10  border-white/20 px-6 py-2 flex flex-col items-center justify-center text-center"
                >
                  <span className="font-bold text-lg">{item.title}</span>
                  <span className="text-sm text-gray-300">{item.desc}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-200 text-black font-semibold px-5 py-3 rounded-xl hover:bg-yellow-600">
                Request a Callback
              </button>
              <button className="flex items-center justify-center gap-2 border text-black rounded-xl bg-white px-5 py-3 hover:bg-white/10 hover:text-white transition-colors">
                <Download className="w-5 h-5" />
                Download Curriculum
              </button>
            </div>
          </div>

          {/* Right Section: Cohort Details Card */}
          <div className="bg-white text-black w-full lg:w-96 rounded-xl p-6 shadow-lg">
            {/* Discount Badge */}
            <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full w-max">
              27% OFF
            </div>

            {/* Cohort Info */}
            <p className="text-sm text-gray-700 mt-4">Cohort 36 starts on</p>
            <p className="text-2xl font-bold">Apr 5</p>

            {/* Price Section */}
            <div className="flex items-center gap-2 mt-2">
              <p className="text-3xl font-bold">₹28,999</p>
              <p className="text-gray-500 line-through">₹39,999</p>
            </div>
            <p className="text-sm text-gray-600">
              EMI from ₹1,421/month available at checkout
            </p>

            {/* Price Increase Warning */}
            <p className="text-xs text-red-500 mt-2">
              ⚠ Price increase from 23 Mar 11:59 PM
            </p>

            {/* Enroll Button */}
            <button className="w-full bg-black text-white font-semibold py-3 rounded-xl mt-4 hover:bg-gray-900">
              Enroll Now →
            </button>

            {/* Coupon Message */}
            <p className="text-xs text-gray-600 text-center mt-2">
              Discount coupon of 27% available on checkout
            </p>
          </div>
        </div>
      </section>

      {/* Transitions Section */}
      <section className="px-4 md:px-6 lg:px-20 py-8 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            750+ successful transitions
          </h2>

          {/* Marquee Effect using Framer Motion */}
          <div className="overflow-hidden w-full relative">
            <motion.div
              className="flex whitespace-nowrap gap-6"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
                repeatType: "reverse",
              }}
            >
              {/* Duplicate elements for seamless effect */}
              {[...people, ...people].map((person, i) => (
                <div
                  key={i}
                  className="bg-gray-100 shadow-lg rounded p-6 flex flex-col items-center min-w-[150px]"
                >
                  {/* Profile Image */}
                  <Image
                    src={person.profileImg}
                    alt={person.name}
                    width={50}
                    height={50}
                    className="rounded-full mb-2"
                    unoptimized
                  />
                  {/* Name */}
                  <p className="text-sm font-semibold text-black">
                    {person.name}
                  </p>
                  {/* Company Logo */}
                  <Image
                    src={person.companyLogo}
                    alt="Company logo"
                    width={80}
                    height={30}
                    className="mt-2"
                    unoptimized
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Will You Learn Section */}
      <section className="px-4 md:px-6 lg:px-20 py-12 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            What Will You Learn
          </h2>

          {/* Course Content Cards */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : "fit-content" }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {curriculum.slice(0, isExpanded ? 12 : 3).map((item, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-xl p-6 shadow-lg"
              >
                {/* Week Info */}
                <div className="text-gray-500 mb-2 font-semibold">
                  {item.week}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>

                {/* Topics List */}
                <ul className="text-sm text-gray-700 mb-4 space-y-1">
                  {item.topics.map((topic, i) => (
                    <li key={i}>• {topic}</li>
                  ))}
                </ul>

                {/* Case Studies (Now with Images) */}
                <p className="text-xs text-gray-500 mb-2">Case Studies on:</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {item.caseStudies.map((cs, i) => (
                    <Image
                      key={i}
                      src={require("@/assets/cname.webp")}
                      alt={cs}
                      width={100}
                      height={33}
                      className="h-auto"
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* "See Full Curriculum" Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-white border-b border-white pb-1"
            >
              {isExpanded ? "Hide Curriculum" : "See Full Curriculum"}
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
          </div>

          {/* "Download Detailed Curriculum" Button */}
          <div className="flex justify-center mt-8">
            <button className="flex items-center justify-center gap-2 bg-white rounded-xl px-4 py-3 text-black hover:bg-yellow-200 transition-colors">
              <Download className="w-5 h-5" />
              Download detailed curriculum
            </button>
          </div>
        </div>
      </section>

      {/* Live Class Schedule */}
      <section className="px-4 md:px-6 lg:px-20 py-12 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Live Class Schedule
          </h2>

          {/* Schedule Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                day: "Every Saturday",
                title: "2 Live Classes",
                times: ["10:30 AM - 12:30 PM IST", "2:00 PM - 4:00 PM IST"],
              },
              {
                day: "Every Sunday",
                title: "Mentor Session & Case Hours",
                times: [
                  "Mentor Session (10:30 AM - 12:30 PM IST)",
                  "Case Hours (2:00 PM - 4:00 PM IST)",
                ],
              },
              {
                day: "Every Wednesday",
                title: "Product Challenge",
                times: ["08:00 PM - 10:00 PM IST"],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#205D3A] rounded-xl shadow-lg overflow-hidden"
              >
                {/* Day & Icon */}
                <div className="flex items-start flex-col gap-2 justify-start bg-[#3a6a44] p-6">
                  <Calendar className="w-10 h-10 text-black bg-white p-2 rounded" />
                  <h3 className="font text-white  text-xl">{item.day}</h3>
                </div>

                {/* Divider */}
                <div className=" p-4">
                  <h4 className="font-semibold text-xl text-white mb-2">
                    {item.title}
                  </h4>

                  {/* Class Timings */}
                  {item.times.map((time, i) => (
                    <p key={i} className="text-md text-gray-300">
                      {time}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <InstructorsSection />

      {/* Mentors Section */}
      <MentorsSection />

      {/* Callback CTA */}
      <section className="px-4 md:px-6 lg:px-20 py-8">
        <div className="max-w-6xl mx-auto bg-[#24634C] rounded-xl p-6 m-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="bg-primary rounded-full p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">
                Have more questions or need more information?
              </h3>
              <p className="text-sm text-gray-300">
                Request a callback to get personalized guidance
              </p>
            </div>
          </div>
          <CallbackButton />
        </div>
      </section>

      {/* 1 Year Placement Support */}
      <section className="px-4 md:px-6 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            1 Year Placement Support
          </h2>
          <p className="text-center text-gray-300 mb-12">
            Clear the cut-offs to be a graduate and benefit by getting placed in
            top tier partner companies
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-500 rounded-full p-4 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"
                    stroke="#0A3B2C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Mock Interviews</h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-500 rounded-full p-4 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#0A3B2C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Resume Reviews</h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-500 rounded-full p-4 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"
                    stroke="#0A3B2C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Interview with Hiring Partners</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Your Future Job Title */}
      <section className="px-4 md:px-6 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-lg mb-2">Your Future Job Title</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Growth Product
            <br />
            Manager
          </h2>

          <div className="h-1 w-96 max-w-full bg-muted mx-auto mb-8"></div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-[#24634C] rounded-xl p-8">
              <h3 className="text-xl text-gray-300 mb-4">Average Pay Scale</h3>
              <p className="text-4xl font-bold">14-18 Lakhs</p>
            </div>

            <div className="bg-[#24634C] rounded-xl p-8">
              <h3 className="text-xl text-gray-300 mb-4">
                Highest Salary at NextLeap
              </h3>
              <p className="text-4xl font-bold">31 Lakhs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <SuccessStories />

      {/* Cohort Stats */}
      <CohortStats />

      {/* Scholarship Section */}
      <section className="px-4 md:px-6 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-black text-2xl md:text-3xl font-bold mb-4">
                  Win a 15% Scholarship with our #LearningPublic Challenge
                </h2>
                <p className="text-black mb-4">
                  Post 20 product learnings on LinkedIn during the fellowship to
                  win back 15% of the fellowship fees.
                </p>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="LinkedIn post example"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Session Preview */}
      <section className="px-4 md:px-6 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Take a Peek At a Live Session
          </h2>

          <div className="aspect-video max-w-3xl mx-auto bg-black rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1000"
              alt="Live session preview"
              width={1000}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Build Skills Section */}
      <SkillsSection />

      {/* Tools Section */}
      <ToolsSection />

      {/* Certificate Section */}
      <section className="px-4 md:px-6 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Certificate of Completion"
                width={300}
                height={400}
                className="mx-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Verifiable Certificate of Accomplishment
              </h2>
              <p className="text-gray-300 mb-4">
                Upon completing the Product Manager Fellowship course, you'll
                receive a verifiable Certificate of Accomplishment that you can
                link to from your Resume and LinkedIn profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <ProgramTimeline />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="px-4 md:px-6 lg:px-20 py-12 bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Still have questions or need more information?
          </h2>
          <p className="text-gray-300 mb-8">
            Request a callback to get personalized guidance
          </p>

          <div className="flex justify-center">
            <CallbackButton />
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="px-4 md:px-6 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Experience the award-winning learning experience
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#4A2A82] rounded-xl p-8 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="GSV Cup Award"
                width={200}
                height={200}
              />
            </div>
            <div className="bg-[#1E3A8A] rounded-xl p-8 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="South Asia EdTech 100"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>
      <WhyChooseSection />
      <Footer />
    </main>
  );
}
