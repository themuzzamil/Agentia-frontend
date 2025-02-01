import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  rating: number
  content: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    content:
      "The service exceeded my expectations. The team was professional, responsive, and delivered outstanding results.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/r9QQ5M77SCazqNoBxsXMvw.jpg-rV55cMTwkrBMdTdwOPWjB0XPGU5QYA.jpeg",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 4,
    content: "Great experience working with this team. They understood our needs and delivered quality work on time.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/r9QQ5M77SCazqNoBxsXMvw.jpg-rV55cMTwkrBMdTdwOPWjB0XPGU5QYA.jpeg",
  },
  {
    id: 3,
    name: "Emily Parker",
    rating: 5,
    content: "Absolutely fantastic service! The attention to detail and customer support were exceptional.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/r9QQ5M77SCazqNoBxsXMvw.jpg-rV55cMTwkrBMdTdwOPWjB0XPGU5QYA.jpeg",
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 4,
    content: "Very impressed with the professionalism and quality of work. Would definitely recommend to others.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/r9QQ5M77SCazqNoBxsXMvw.jpg-rV55cMTwkrBMdTdwOPWjB0XPGU5QYA.jpeg",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Customer Testimonials</h2>
          <div className="p-5 mx-auto grid gap-6 sm:grid-cols-2 md:gap-8 lg:gap-12 xl:grid-cols-2 max-w-5xl">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="relative overflow-hidden bg-gray-100 rounded-2xl shadow-lg shadow-gray-900/30 transition-shadow hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      alt={`${testimonial.name}'s profile picture`}
                      className="rounded-full h-12 w-12 object-cover"
                      src={testimonial.image || "/placeholder.svg"}
                    />
                    <div className="space-y-1">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}