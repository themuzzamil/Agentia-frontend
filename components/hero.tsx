"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
  }

  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Agentia World
          </h1>
          <p className="text-gray-600 text-lg max-w-lg">
          Transform your business with Agentia World—where AI agents are ready on demand to enhance industries worldwide. From healthcare to logistics, boost efficiency, speed, and intelligence at scale. Whether open-source AI or AI as a service, bring your vision to life with the most adaptive AI ecosystem.
          </p>
          <button>
            <a href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8 rounded-full w-full sm:w-auto">Open source Agent</a>
          </button>

          <button>
            <a href="#" className="m-4 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8 rounded-full w-full sm:w-auto">Premimum Agent</a>
          </button> 

         
            
          </div>
        

        <div className="relative">
  <Image
    src="/a-futuristic-and-sophisticated-illustrat_8G0KPk3FSRymeR4RbwphLA_8lPgKSoGQymXdToRKy5-mg.jpeg"
    alt="Credit Card Preview"
    width={500}
    height={200}
    className="rounded-2xl shadow-xl shadow-gray-800/50 object-cover"
    priority
  />
</div>

      </div>
    </div>
  )
}

