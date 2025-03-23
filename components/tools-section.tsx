import Image from "next/image"

const tools = [
  {
    name: "Whimsical",
    icon: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Figma",
    icon: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "SQL",
    icon: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Openai",
    icon: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Amplitude",
    icon: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "JIRA",
    icon: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Microsoft Clarity",
    icon: "/placeholder.svg?height=50&width=50",
  },
]

export default function ToolsSection() {
  return (
    <section className="px-4 md:px-6 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Tools You Will Learn</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-white rounded-lg p-4 mb-4">
                <Image src={tool.icon || "/placeholder.svg"} alt={tool.name} width={50} height={50} />
              </div>
              <h3 className="font-medium">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

