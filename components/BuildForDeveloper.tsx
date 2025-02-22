import React from 'react';

const BuildForDeveloper = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center py-12">
      {/* Main Content Section */}
      <div className="text-center">
        {/* Main Heading */}
        <h1 className="text-5xl font-extrabold leading-tight tracking-wide sm:text-6xl mb-6">
          Built for{' '}
          <span className="text-[#CB6D51]">developers</span>
          <br />
          <span className="text-[#CB6D51]">By developers</span>
        </h1>
        
        {/* Subheading */}
        <p className="mt-4 text-xl text-gray-400 sm:text-2xl max-w-2xl mx-auto mb-8">
          Built for modern product teams.
        </p>
        <p className="text-xl text-gray-400 sm:text-2xl max-w-2xl mx-auto">
          From next-gen startups to established enterprises.
        </p>
      </div>
    </div>
  );
};

export default BuildForDeveloper;
