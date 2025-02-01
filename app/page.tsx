import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import FeaturedSection from "@/components/FeatureSection"
import WhyChooseUs from "@/components/ChooseUs"
import Testimonials from "@/components/Testimonial"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedSection />
      <WhyChooseUs />
      <Testimonials />
      <Footer />        
    </main>
  )
}

