"use client"
import BuildYourDesign from "@/components/BuildYourDesign";
import BuildForDeveloper from "@/components/BuildForDeveloper";


export default function Home() {

  return (
    <div className="min-h-screen bg-black text-white border-b border-[#ccc]">
      {/* Main Content Section */}
      <div className="text-center lg:text-left lg:w-1/2 lg:ml-16 mt-32">
        <h1 className="text-5xl font-extrabold leading-tight tracking-wide sm:text-6xl mb-6">
          Chakra UI is a component system for building products with speed
        </h1>
        <p className="mt-4 text-xl text-gray-400 sm:text-2xl max-w-2xl mx-auto lg:mx-0 mb-8">
          Accessible React components for building high-quality web apps and design systems.
        </p>
        <a
          href="#"
          className="mt-6 inline-block px-8 py-4 bg-teal-500 text-white text-lg font-semibold rounded-lg hover:bg-teal-400 transition duration-300"
        >
          Start Building
        </a>
      </div>
      {/* <div className="border-b border-[#fcfc]"></div> */}
      <BuildYourDesign />
      <BuildForDeveloper />
    </div>
  );
}
