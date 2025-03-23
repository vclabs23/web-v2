export default function ProgramTimeline() {
  const weeks = [
    {
      week: "Week 1",
      saturday: [{ title: "Kick off call", date: "5 Apr", time: "5:00 PM - 6:30 PM", highlight: false }],
      sunday: [],
    },
    {
      week: "Week 2",
      saturday: [
        { title: "Systems Thinking + Mapping Business Outcomes", date: "12 Apr", time: "10:30 AM - 12:30 PM", highlight: false },
        { title: "Mapping Outcomes to Opportunities", date: "12 Apr", time: "2:00 PM - 4:00 PM", highlight: false },
      ],
      sunday: [{ title: "Meet your Mentors", date: "13 Apr", time: "10:30 AM - 11:30 AM", highlight: true }],
    },
    {
      week: "Week 3",
      saturday: [{ title: "User Research 101", date: "19 Apr", time: "10:30 AM - 12:30 PM", highlight: false }],
      sunday: [{ title: "Mentor Lab (Milestone 1 Guidance)", date: "20 Apr", time: "10:30 AM - 12:30 PM", highlight: true }],
    },
    {
      week: "Week 4",
      saturday: [{ title: "Ideation and Validation", date: "26 Apr", time: "10:30 AM - 12:30 PM", highlight: false }],
      sunday: [{ title: "Mentor Lab (Milestone 1 Feedback)", date: "27 Apr", time: "10:30 AM - 12:30 PM", highlight: true }],
    },
    {
      week: "Week 5",
      saturday: [{ title: "Characteristics of Human Psychology", date: "3 May", time: "2:00 PM - 4:00 PM", highlight: false }],
      sunday: [{ title: "Case Hours: GameOn", date: "4 May", time: "2:00 PM - 4:00 PM", highlight: true }],
    },
    {
      week: "Week 6",
      saturday: [{ title: "Product Growth Strategies", date: "10 May", time: "10:30 AM - 12:30 PM", highlight: false }],
      sunday: [{ title: "Mentor Lab (Milestone 2 Guidance)", date: "11 May", time: "10:30 AM - 12:30 PM", highlight: true }],
    },
    {
      week: "Week 7",
      saturday: [{ title: "Metrics & Analysis Part 1", date: "17 May", time: "10:30 AM - 12:30 PM", highlight: false }],
      sunday: [{ title: "Case Hours: SQL 1", date: "18 May", time: "3:00 PM - 5:00 PM", highlight: true }],
    },
    {
      week: "Week 8",
      saturday: [{ title: "Metrics & Analysis Part 2", date: "24 May", time: "10:30 AM - 12:30 PM", highlight: false }],
      sunday: [{ title: "Mentor Lab (Milestone 2 Feedback)", date: "25 May", time: "10:30 AM - 12:30 PM", highlight: true }],
    },
    {
      week: "Week 9",
      saturday: [{ title: "Wireframing & UX Design", date: "31 May", time: "10:30 AM - 12:30 PM", highlight: false }],
      sunday: [{ title: "Case Hours: SQL 2", date: "1 June", time: "3:00 PM - 5:00 PM", highlight: true }],
    },
    {
      week: "Week 10",
      saturday: [{ title: "Product Launch Strategies", date: "7 June", time: "10:30 AM - 12:30 PM", highlight: false }],
      sunday: [{ title: "Mentor Lab (Final Project Review)", date: "8 June", time: "10:30 AM - 12:30 PM", highlight: true }],
    },
    {
      week: "Week 11",
      saturday: [{ title: "A/B Testing & Experimentation", date: "14 June", time: "10:30 AM - 12:30 PM", highlight: false }],
      sunday: [{ title: "Interview Prep: Clarifying Questions & Guesstimates", date: "15 June", time: "12:00 PM - 2:00 PM", highlight: true }],
    },
    {
      week: "Week 12",
      saturday: [{ title: "Capstone Project Finalization", date: "21 June", time: "10:30 AM - 12:30 PM", highlight: false }],
      sunday: [{ title: "Mock Interviews & Feedback", date: "22 June", time: "12:00 PM - 2:00 PM", highlight: true }],
    },
  ];

  return (
    <section className="px-4 md:px-6 lg:px-20 py-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Program Timeline</h2>

        {/* Scrollable Table Container */}
        <div className="overflow-x-auto rounded-xl">
          <table className="w-full border-collapse border border-gray-300">
            {/* Table Headings */}
            <thead>
              <tr className="bg-white text-black">
                <th className="p-4 text-left border border-gray-300 bg-orange-200"></th>
                <th className="p-4 text-left border border-gray-300 font-semibold">Saturday</th>
                <th className="p-4 text-left border border-gray-300 font-semibold">Sunday</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {weeks.map((row, index) => (
                <tr key={index} className="border bg-white border-gray-300">
                  {/* Week Column */}
                  <td className="p-4 border border-gray-300 font-bold text-black">{row.week}</td>

                  {/* Saturday Schedule */}
                  <td className="p-4 border border-gray-300">
                    {row.saturday.length > 0 ? (
                      row.saturday.map((event, i) => (
                        <div
                          key={i}
                          className={`flex flex-col p-3 mb-2 rounded ${
                            event.highlight ? "bg-orange-200 text-black" : "bg-gray-200 text-black"
                          }`}
                        >
                          <div className="font-semibold">{event.title}</div>
                          <div className="text-sm">{event.date} | {event.time}</div>
                        </div>
                      ))
                    ) :null}
                  </td>

                  {/* Sunday Schedule */}
                  <td className="p-4 border border-gray-300">
                    {row.sunday.length > 0 ? (
                      row.sunday.map((event, i) => (
                        <div
                          key={i}
                          className={`flex flex-col p-3 mb-2 rounded ${
                            event.highlight ? "bg-orange-200 text-black" : "bg-gray-200 text-black"
                          }`}
                        >
                          <div className="font-semibold">{event.title}</div>
                          <div className="text-sm">{event.date} | {event.time}</div>
                        </div>
                      ))
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
