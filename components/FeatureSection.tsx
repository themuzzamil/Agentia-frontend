import Image from "next/image";
import Link from "next/link";
import React from "react";
const FeaturedSection = () => {
    return (
      <div className="min-h-screen w-full flex flex-col items-center space-y-12 my-16 bg-white">
        <div className="flex flex-col justify-center items-center bg-white py-8 px-16 rounded-2xl shadow-xl shadow-gray-200">
          <h1 className="text-3xl font-semibold text-gray-800">
            Explore Cutting-Edge AI Agents
          </h1>
          <p className="text-gray-500 text-sm mt-4 text-center max-w-3xl">
            From automation to intelligence augmentation, find the right AI agent
            for your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="relative bg-gray-100 rounded-2xl shadow-lg shadow-gray-900/30 p-6 hover:scale-105 transition-transform ease-in-out duration-300"
            >
              <Image
                src="/DALL·E 2025-01-31 10.28.53 - An illustration of a futuristic AI-powered email agent. The scene features a sleek, modern computer interface with an AI assistant displayed on the sc.webp"
                alt="AI Agent"
                height={130}
                width={400}
                className="bg-gray-700 rounded-xl whitespace-normal"
              />
              <div className="p-4 flex flex-col gap-y-4">
                <h1 className="text-xl font-semibold text-black">
                  Agent {i + 1}
                </h1>
                <p className="text-sm text-gray-600 line-clamp-2 mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, odio nulla? Facilis exercitationem molestias maxime delectus corporis aliquid libero dolorum!
                </p>
                <Link
                  href={"#"}
                  className="self-end bg-gray-800 text-white text-xs py-2 px-4 rounded-xl hover:bg-white/30 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeaturedSection;
  