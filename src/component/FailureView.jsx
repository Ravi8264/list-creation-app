import React from "react";

// Error state component with retry option
const FailureView = ({ onRetry }) => (
  <div className="flex flex-col items-center justify-center h-screen w-full">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">
      Data Load hone Failed
    </h1>
    <p className="text-red-600 text-lg mb-8">
      Data load nahi ho paa raha hai. Dubara try kare.
    </p>
    <button
      onClick={onRetry}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
    >
      Retry
    </button>
  </div>
);

export default FailureView;
