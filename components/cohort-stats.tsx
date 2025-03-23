export default function CohortStats() {
  return (
    <section className="px-4 md:px-6 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How Your Avg Cohort Looks Like</h2>

        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-[#24634C] rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold mb-2">15%</h3>
            <p className="text-gray-300">Change of Career</p>
          </div>

          <div className="bg-[#24634C] rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold mb-2">85%</h3>
            <p className="text-gray-300">Working Professionals</p>
          </div>

          <div className="bg-[#24634C] rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold mb-2">3 years</h3>
            <p className="text-gray-300">Average Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}

