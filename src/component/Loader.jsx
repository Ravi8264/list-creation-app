import React from "react";

// Loading spinner component
const Loader = () => (
  <div className="flex flex-col items-center justify-center h-screen w-full">
    <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
    <p className="text-gray-600 text-lg">Loading...</p>
  </div>
);

export default Loader;
