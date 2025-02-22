import React, { useState } from 'react';

const BuildYourDesign = () => {
    const [activeTab, setActiveTab] = useState('tokens');

    return (
        <div className="min-h-screen bg-black text-white flex flex-col md:flex-row mt-5">
            {/* Main Content Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:ml-16 mt-32">
                <h1 className="text-5xl font-extrabold leading-tight tracking-wide sm:text-6xl mb-6">
                    Build your design system on top of Chakra UI
                </h1>
                <p className="mt-4 text-xl text-gray-400 sm:text-2xl max-w-2xl mx-auto lg:mx-0 mb-8">
                    Spend less time writing UI code and more time building a great experience for your customers.
                </p>
            </div>

            {/* Tabs Section */}
            <div className="mt-16 px-6">
                <div className="flex justify-center space-x-8">
                    <button
                        className={`text-xl font-medium py-2 px-4 rounded-lg ${activeTab === 'tokens'
                                ? 'bg-[#CB6D51] text-white border-2 border-[#CB6D51]'
                                : 'text-gray-400 hover:text-[#CB6D51]'
                            }`}
                        onClick={() => setActiveTab('tokens')}
                    >
                        Tokens
                    </button>
                    <button
                        className={`text-xl font-medium py-2 px-4 rounded-lg ${activeTab === 'typography'
                                ? 'bg-[#CB6D51] text-white border-2 border-[#CB6D51]'
                                : 'text-gray-400 hover:text-[#CB6D51]'
                            }`}
                        onClick={() => setActiveTab('typography')}
                    >
                        Typography
                    </button>
                    <button
                        className={`text-xl font-medium py-2 px-4 rounded-lg ${activeTab === 'recipes'
                                ? 'bg-[#CB6D51] text-white border-2 border-[#CB6D51]'
                                : 'text-gray-400 hover:text-[#CB6D51]'
                            }`}
                        onClick={() => setActiveTab('recipes')}
                    >
                        Recipes
                    </button>
                </div>

                {/* Tab Content */}
                <div className="mt-12">
                    {activeTab === 'tokens' && (
                        <div className="bg-gray-800 p-6 rounded-md shadow-xl">
                            <pre className="text-white font-mono text-lg whitespace-pre-wrap">
                                {`import { defineTokens } from "@chakra-ui/react";

export const tokens = defineTokens({
  colors: {
    primary: { value: "#0FEE0F" },
    secondary: { value: "#EE0F0F" },
  },
  fonts: {
    body: { value: "system-ui, sans-serif" },
  },
  animations: {
    "slide-in-right": { value: "slide-in-right 0.5s ease-in-out" },
  },
});`}
                            </pre>
                        </div>
                    )}

                    {activeTab === 'typography' && (
                        <div className="bg-gray-800 p-6 rounded-md shadow-xl">
                            <pre className="text-white font-mono text-lg whitespace-pre-wrap">
                                {`import { defineTokens } from "@chakra-ui/react";

export const typography = defineTokens({
  fonts: {
    body: { value: "Roboto, sans-serif" },
    heading: { value: "Arial, sans-serif" },
  },
});`}
                            </pre>
                        </div>
                    )}

                    {activeTab === 'recipes' && (
                        <div className="bg-gray-800 p-6 rounded-md shadow-xl">
                            <pre className="text-white font-mono text-lg whitespace-pre-wrap">
                                {`import { createRecipe } from "@chakra-ui/react";

export const buttonRecipe = createRecipe({
  baseStyle: {
    padding: "8px 16px",
    backgroundColor: "#00b5ad",
    borderRadius: "8px",
  },
  variants: {
    solid: {
      backgroundColor: "#00b5ad",
    },
  },
});`}
                            </pre>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BuildYourDesign;
