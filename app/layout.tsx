import type React from "react"
import type { Metadata } from "next"
import { Lexend } from "next/font/google"
import "./globals.css"

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" })

export const metadata: Metadata = {
  title: "VC Labs - Venture Capital Cohort",
  description: "12 week online PE - Venture Capital Cohort with Certification and Placement Support",
    generator: 'Abhinav Jha'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} font-lexend`}>{children}</body>
    </html>
  )
}



import './globals.css'