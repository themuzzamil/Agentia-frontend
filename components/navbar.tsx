import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/an-innovative-and-cutting-edge-logo-desi_8X1cnEQRSfu_gHBkZOx_ww_zb6vPE03S0GpTkJosvTe5A.jpeg" // Replace with your actual logo file name
        alt="Agentic Hub Logo"
        width={40} // Adjust as needed
        height={40}
        className="rounded-full border border-gray-300 shadow-md"
      />
      </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-gray-600 hover:text-black transition-colors">
            Home
          </Link>
          <Link href="#" className="text-gray-600 hover:text-black transition-colors">
            Discover
          </Link>
          <Link href="#" className="text-gray-600 hover:text-black transition-colors">
            About
          </Link>
          <Link href="#" className="text-gray-600 hover:text-black transition-colors">
            Team
          </Link>
          <Link href="#" className="text-gray-600 hover:text-black transition-colors">
            Chatbot
          </Link>
          <Link href="#" className="text-gray-600 hover:text-black transition-colors">
            Contact Us
          </Link>
          
        </div>

        <div className="flex items-center space-x-4">
          <Link href="#" className="hidden md:inline-block text-gray-600 hover:text-black transition-colors">
            Sign in
          </Link>
          <Button className="bg-[#0b0b0b] text-white hover:bg-black/80 transition-colors">Sign up</Button>
        </div>
      </div>
    </nav>
  )
}

