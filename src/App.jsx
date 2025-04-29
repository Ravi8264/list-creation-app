import React, { useState } from "react";
import "./App.css";
import Loader from "./component/Loader.jsx";
import AllListsView from "./component/AllListsView.jsx";
import CreateListView from "./component/CreateListView.jsx";

const App = () => {
  const [listsData, setListsData] = useState([]);
  const [selectedLists, setSelectedLists] = useState([]);
  const [isCreateListViewActive, setIsCreateListViewActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = (data) => {
    const list1 = data.lists.filter((item) => item.list_number === 1);
    const list2 = data.lists.filter((item) => item.list_number === 2);
    setListsData([list1, list2]);
    setIsLoading(false);
  };

  const handleLoadingError = (error) => {
    setErrorMsg(error);
    setIsLoading(false);
  };

  const onSelectList = (index) => {
    setErrorMsg("");
    setSelectedLists((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const onCreateNewList = () => {
    if (selectedLists.length !== 2) {
      setErrorMsg("You should select exactly 2 lists to create a new list");
      return;
    }
    setSelectedLists([...selectedLists].sort((a, b) => a - b));
    setIsCreateListViewActive(true);
    setErrorMsg("");
  };

  const onCancelCreate = () => {
    setIsCreateListViewActive(false);
    setSelectedLists([]);
  };

  const onUpdateLists = (updatedLists) => {
    setListsData(updatedLists);
    setIsCreateListViewActive(false);
    setSelectedLists([]);
  };

  return (
    <div className="app-container relative">
      <h1 className="app-heading text-white">List Creation</h1>
      {isLoading ? (
        <Loader
          onComplete={handleLoadingComplete}
          onError={handleLoadingError}
        />
      ) : errorMsg ? (
        <div className="text-red-500 text-center">{errorMsg}</div>
      ) : isCreateListViewActive ? (
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
      )}
    </div>
  );
};

export default App;
