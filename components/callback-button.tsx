import { Phone } from "lucide-react"

export default function CallbackButton() {
  return (
    <button className="flex items-center justify-center gap-2 bg-yellow-200 text-black rounded-xl px-4 py-3 font-medium hover:bg-gray-100 transition-colors">
      <Phone className="w-5 h-5" />
      Request a callback
    </button>
  )
}

