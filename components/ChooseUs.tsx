import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import why_choose_us from "../../public/assets/why_choose_us.jpg";

const WhyChooseUs = () => {
  return (
    <section className="bg-white h-screen py-16 px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-center">
  {/* Left Side - Image */}
  <div className="lg:w-1/2 w-full flex justify-center mb-8 lg:mb-0">
    <Image
      src="/O-HJh5X-Q_qcPxopqU7ecA.webp" // Replace with your actual image path
      alt="Why Choose Agentia"
      width={600}
      height={500}
      className="rounded-2xl shadow-xl shadow-gray-800/50 object-cover"
    />
  </div>

  {/* Right Side - Content */}
  <div className="lg:w-1/2 w-full flex flex-col justify-center items-center text-center lg:items-start lg:text-left mt-8 lg:mt-0 pl-12">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Agentia?</h2>
    <div className="max-w-lg space-y-6">
      <div className="flex items-center gap-6 bg-gray-100 p-5 rounded-xl shadow-lg shadow-gray-900/30">
        <CheckCircle className="text-green-500" size={24} />
        <p className="text-gray-700 font-medium">Modular and scalable AI solutions</p>
      </div>
      <div className="flex items-center gap-6 bg-gray-100 p-5 rounded-xl shadow-lg shadow-gray-900/30">
        <CheckCircle className="text-green-500" size={24} />
        <p className="text-gray-600">Seamless natural language interactions</p>
      </div>
      <div className="flex items-center gap-6 bg-gray-100 p-5 rounded-xl shadow-lg shadow-gray-900/30">
        <CheckCircle className="text-green-500" size={24} />
        <p className="text-gray-600">Trusted by developers and enterprises</p>
      </div>
      <div className="flex items-center gap-6 bg-gray-100 p-5 rounded-xl shadow-lg shadow-gray-900/30">
        <CheckCircle className="text-green-500" size={24} />
        <p className="text-gray-600">Tailor AI behavior to fit your use case</p>
      </div>
      <div className="flex items-center gap-6 bg-gray-100 p-5 rounded-xl shadow-lg shadow-gray-900/30">
        <CheckCircle className="text-green-500" size={24} />
        <p className="text-gray-600">Understand decisions made by AI models</p>
      </div>
    </div>
  </div>
</section>
  );
};

export default WhyChooseUs;
