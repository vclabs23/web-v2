"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is the NextLeap Product Manager Fellowship?",
    answer:
      "Our Product Manager Fellowship is a 12-week online course that helps learners transition into a career in product management. The entire fellowship is taught online via live sessions on Zoom. Our instructors and mentors are product management executives of top technology companies and they will not only teach you the fundamentals of product management, but also help you with real-world skills.",
  },
  {
    question: "Who is eligible to apply for the NextLeap Product Manager Fellowship?",
    answer:
      "Professionals with at least 1 year of work experience are eligible to apply. We welcome applicants from various backgrounds including engineering, design, business, and more.",
  },
  {
    question: "Are there any costs associated with the NextLeap Product Manager Fellowship?",
    answer:
      "Yes, the fellowship has a fee of ₹28,999 (inclusive of taxes). This covers all live sessions, mentorship, projects, and placement support for 1 year.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "All live sessions are recorded and made available to fellows. You can watch the recordings at your convenience, but we highly recommend attending live sessions for the best learning experience.",
  },
  {
    question: "What are the benefits of being a Fellow in the NextLeap Product Manager Fellowship program?",
    answer:
      "Benefits include live interactive sessions with industry experts, hands-on projects, personalized mentorship, peer learning, placement support, and a verifiable certificate upon completion.",
  },
  {
    question: "I'm a final year student. Am I eligible to apply?",
    answer:
      "Final year students can apply, but preference is given to professionals with work experience. We recommend gaining some work experience before transitioning to product management.",
  },
  {
    question: "What is the graduation project?",
    answer:
      "The graduation project is a comprehensive product management case study that you'll work on throughout the fellowship. It demonstrates your ability to apply the concepts learned and serves as a portfolio piece for job applications.",
  },
  {
    question: "Can I re-submit my graduation project?",
    answer:
      "Yes, you can resubmit your graduation project if you receive feedback for improvement. We want to ensure you have a high-quality project to showcase to potential employers.",
  },
  {
    question: "What's the minimum attendance that I'll be required to have for the graduation project?",
    answer:
      "We require a minimum of 75% attendance for live sessions to be eligible for graduation and placement support.",
  },
  {
    question: "What are the key responsibilities of a Fellow during the program?",
    answer:
      "Fellows are expected to attend live sessions, complete weekly assignments, participate in discussions, work on projects, engage with mentors, and prepare for job interviews.",
  },
  {
    question: "What are the selection criteria for the NextLeap Product Manager Fellowship?",
    answer:
      "Selection is based on your application, background, problem-solving skills, and performance in the interview. We look for candidates with strong analytical thinking, communication skills, and a passion for product.",
  },
  {
    question: "Who all are eligible to get priority in career services?",
    answer:
      "Fellows who complete all assignments, maintain good attendance, and successfully graduate from the program receive priority in career services and placement support.",
  },
  {
    question: "What's included in the career services?",
    answer:
      "Career services include resume reviews, LinkedIn profile optimization, mock interviews, job referrals, and direct introductions to hiring partners.",
  },
  {
    question: "I'll start from next batch. Will I still get a completion certificate?",
    answer:
      "Yes, as long as you complete the program requirements, you will receive a completion certificate regardless of which batch you join.",
  },
  {
    question: "What kind of support and resources will I receive during the program?",
    answer:
      "You'll receive comprehensive learning materials, access to recorded sessions, mentorship, peer support, project feedback, and career guidance throughout the program.",
  },
  {
    question: "How many fellowships are offered each year?",
    answer:
      "We run multiple batches throughout the year, with limited seats in each batch to ensure personalized attention and quality learning experience.",
  },
  {
    question: "Will the interviews be for international or Indian companies?",
    answer:
      "We primarily partner with companies in India, but occasionally have opportunities with international companies that have offices in India or are open to remote work.",
  },
  {
    question: "Is work experience also a criterion to get recruited for interviews?",
    answer:
      "Yes, most product management roles require some work experience. The fellowship helps you transition your existing experience into product management skills.",
  },
  {
    question: "Which companies are hiring?",
    answer:
      "We partner with a range of companies from startups to established tech firms. Our hiring partners include companies like Google, Amazon, Flipkart, Swiggy, and many more.",
  },
  {
    question: "If I am unable to attend the program or need to pull out for any reason, will I get a refund?",
    answer:
      "Refund policies are outlined in our terms of service. Generally, refunds are available within the first week of the program start date.",
  },
  {
    question: "Can I get fee reimbursed from my company?",
    answer:
      "Many companies offer learning and development budgets. We can provide the necessary documentation for you to seek reimbursement from your employer.",
  },
  {
    question: "How long is the NextLeap Product Manager Fellowship program?",
    answer: "The core program is 12 weeks long, with placement support continuing for 1 year after graduation.",
  },
  {
    question: "What is the application process for the NextLeap Product Manager Fellowship?",
    answer:
      "The application process includes submitting your profile, a screening call, and a final interview to assess your fit for the program.",
  },
  {
    question: "Is NextLeap Product Management Fellowship worth it?",
    answer:
      "The fellowship has helped 750+ professionals successfully transition into product management roles with significant salary increases. The ROI is excellent for those committed to making the career change.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="px-4 md:px-6 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="lg:w-[70%] md:w-[80%] sm:w-[100%] pb-4">
              <button
                className="flex items-center justify-between gap-6 w-full text-left py-2"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-start items-center gap-4">
                  <div className="w-2 h-2  bg-white"></div>
                  <h3 className="font-bold">{faq.question}</h3>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              <div className={`accordion-content ${openIndex === index ? "open" : ""}`}>
                <p className="py-2 text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

