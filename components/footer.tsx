import Link from "next/link"
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 md:px-6 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-xl font-bold">
            nextLeap
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Product Manager Fellowship
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Product Designer Fellowship
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Data Science Fellowship
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Data Structures and Algorithms Fellowship
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Front-end Web Development Fellowship
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-gray-300 flex items-center gap-2">
                  <Twitter className="w-4 h-4" /> Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300 flex items-center gap-2">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300 flex items-center gap-2">
                  <Youtube className="w-4 h-4" /> YouTube
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300 flex items-center gap-2">
                  <Instagram className="w-4 h-4" /> Instagram
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Reviews</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  NextLeap Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">Product Management Interview Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Product Management Interview Questions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Product Management Resume Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Product Management Books & Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Product Management Product Teardowns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Product Management Job Board
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Product Management Resume Builder
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Product Management - All Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">UI UX Design Interview Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  UI UX Design Interview Questions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  UI UX Design Resume Guide & Portfolios
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  UI Design Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  UI Design Source Builder
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  UI Design - All Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Other Interview Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  SQL Interview Questions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Data Science Interview Questions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Excel Interview Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  All Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Project Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  NextLeap Capstone
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  UI UX Project
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Data Project
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  All Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">Job Board</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Product Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  UI UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Engineering
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Online Compilers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Python Compiler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Java Compiler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  C Compiler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  C++ Compiler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  JS Compiler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  React Compiler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  SQL Compiler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Pandas Compiler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  HTML Compiler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  PHP Compiler
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">More Online Compilers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Django Notebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Go Compiler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  R Compiler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Kotlin Compiler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Jupyter Compiler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Scala Compiler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Ruby Compiler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-300">
                  Swift Compiler
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-xs text-gray-500">
          <p>© 2023 NextLeap Learning Technologies Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  )
}

