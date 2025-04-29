import React, { useState, useEffect } from "react";
import FailureView from "./FailureView.jsx";

// Loading states
const loadingStates = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

// Loading spinner component with progress
const Loader = ({ onComplete, onError }) => {
  const [progress, setProgress] = useState(0);
  const [currentState, setCurrentState] = useState(loadingStates.initial);
  const [errorMsg, setErrorMsg] = useState("");
  const [fetchedData, setFetchedData] = useState(null);

  const fetchData = async () => {
    try {
      // Start with initial state
      setCurrentState(loadingStates.initial);

      // Wait for 1 second in initial state
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Then move to inProgress
      setCurrentState(loadingStates.inProgress);

      // Make API call
      const response = await fetch("https://apis.ccbp.in/list-creation/lists");

      if (!response.ok) {
        throw new Error("Failed to load data");
      }

      const data = await response.json();
      setFetchedData(data);

      // Start progress after initialization
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setCurrentState(loadingStates.success);
            // Notify parent that loading is complete with the data
            onComplete(data);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 80);

      return () => clearInterval(interval);
    } catch (error) {
      setErrorMsg(error.message);
      setCurrentState(loadingStates.failure);
      onError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getStatusText = () => {
    switch (currentState) {
      case loadingStates.initial:
        return "Initializing...";
      case loadingStates.inProgress:
        return "Progress";
      case loadingStates.success:
        return "Success!";
      case loadingStates.failure:
        return "Failed";
      default:
        return "Progress";
    }
  };

  if (currentState === loadingStates.failure) {
    return <FailureView onRetry={fetchData} />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-6"></div>
      <div className="w-72 bg-gray-200 rounded-full h-3 mb-4">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-300 ease-in-out"
          style={{
            width: currentState === loadingStates.initial ? 0 : `${progress}%`,
          }}
        ></div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-gray-600 text-xl font-medium">{getStatusText()}</p>
        {currentState === loadingStates.inProgress && (
          <div className="flex gap-1">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
              .
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
              .
            </span>
          </div>
        )}
        {currentState === loadingStates.inProgress && (
          <p className="text-gray-600 text-xl font-medium">{progress}%</p>
        )}
      </div>
    </div>
  );
};

export default Loader;
