"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-4xl font-light">
          VC Labs
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center gap-1">
              Courses <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <Link href="#" className="hover:text-gray-300 transition-colors">
            NextLeap Reviews
          </Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">
            Blog
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-[100%] z-40 bg-white text-black shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">VC Labs</h3>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-8 h-8" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-4 space-y-4">
          <h4 className="text-gray-500">Courses</h4>
          <Link href="#" className="flex justify-between items-center">
            Product Manager Fellowship <span>→</span>
          </Link>
          <Link href="#" className="flex justify-between items-center">
            Product Designer Fellowship <span>→</span>
          </Link>
          <Link href="#" className="flex justify-between items-center">
            Data Analyst Fellowship <span>→</span>
          </Link>

          <Link href="#" className="font-semibold">NextLeap Reviews</Link>
          <Link href="#" className="font-semibold">Blog</Link>
        </nav>
      </div>
    </header>
  );
}

