import React, { useState, useEffect } from "react";
import "./App.css";
import AllListsView from "./component/AllListsView.jsx";
import CreateListView from "./component/CreateListView.jsx";
import Loader from "./component/Loader.jsx";
import FailureView from "./component/FailureView.jsx";

// API status constants for managing different states of data fetching
const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const App = () => {
  // State management
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [listsData, setListsData] = useState([]);
  const [selectedLists, setSelectedLists] = useState([]);
  const [isCreateListViewActive, setIsCreateListViewActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Fetch lists data from API
  const fetchListsData = async () => {
    setApiStatus(apiStatusConstants.inProgress);
    const response = await fetch("https://apis.ccbp.in/list-creation/lists");

    if (response.ok) {
      const fetchedData = await response.json();
      const list1 = fetchedData.lists.filter((item) => item.list_number === 1);
      const list2 = fetchedData.lists.filter((item) => item.list_number === 2);
      setListsData([list1, list2]);
      setApiStatus(apiStatusConstants.success);
    } else {
      setErrorMsg("Failed to load data");
      setApiStatus(apiStatusConstants.failure);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchListsData();
  }, []);

  // Handle list selection
  const onSelectList = (index) => {
    setErrorMsg("");
    setSelectedLists((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  // Create new list from selected lists
  const onCreateNewList = () => {
    if (selectedLists.length !== 2) {
      setErrorMsg("You should select exactly 2 lists to create a new list");
      return;
    }
    setSelectedLists([...selectedLists].sort((a, b) => a - b));
    setIsCreateListViewActive(true);
    setErrorMsg("");
  };

  // Cancel list creation
  const onCancelCreate = () => {
    setIsCreateListViewActive(false);
    setSelectedLists([]);
  };

  // Update lists after creation
  const onUpdateLists = (updatedLists) => {
    setListsData(updatedLists);
    setIsCreateListViewActive(false);
    setSelectedLists([]);
  };

  // Render appropriate view based on API status
  const renderView = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <Loader />;
      case apiStatusConstants.success:
        return isCreateListViewActive ? (
          <CreateListView
            listsData={listsData}
            selectedLists={selectedLists}
            onCancel={onCancelCreate}
            onUpdate={onUpdateLists}
          />
        ) : (
          <AllListsView
            listsData={listsData}
            selectedLists={selectedLists}
            onSelectList={onSelectList}
            onCreateNewList={onCreateNewList}
            errorMsg={errorMsg}
          />
        );
      case apiStatusConstants.failure:
        return <FailureView onRetry={fetchListsData} />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container relative">
      <h1 className="app-heading text-white">List Creation</h1>
      {renderView()}
    </div>
  );
};

export default App;
