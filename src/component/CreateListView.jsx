import React, { useState } from "react";
import ListContainer from "./ListContainer.jsx";

// Component for creating a new list by combining items from two selected lists
const CreateListView = ({ listsData, selectedLists, onCancel, onUpdate }) => {
  // State management for lists
  const [newList, setNewList] = useState([]);
  const [firstList, setFirstList] = useState(listsData[selectedLists[0]]);
  const [secondList, setSecondList] = useState(listsData[selectedLists[1]]);

  // Move item from source list to new list
  const moveItemToNewList = (itemId, sourceList) => {
    const source = sourceList === "first" ? firstList : secondList;
    const setSource = sourceList === "first" ? setFirstList : setSecondList;
    const item = source.find((i) => i.id === itemId);

    if (item) {
      setSource(source.filter((i) => i.id !== itemId));
      setNewList((prev) => [...prev, item]);
    }
  };

  // Move item back to source list
  const moveItemBack = (itemId, targetList) => {
    const item = newList.find((i) => i.id === itemId);
    if (item) {
      setNewList((prev) => prev.filter((i) => i.id !== itemId));
      const setTarget = targetList === "first" ? setFirstList : setSecondList;
      setTarget((prev) => [...prev, item]);
    }
  };

  // Update lists after creation
  const handleUpdate = () => {
    const updatedLists = [...listsData];
    updatedLists[selectedLists[0]] = firstList;
    updatedLists[selectedLists[1]] = secondList;
    onUpdate(updatedLists);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl text-gray-800 text-center mb-6 md:text-xl md:mb-5">
        Create New List
      </h2>

      {/* Lists container */}
      <div className="flex flex-wrap justify-center gap-6 w-full mb-8">
        <ListContainer
          listNumber={1}
          listItems={firstList}
          isCreateView={true}
          onMoveItemRight={(itemId) => moveItemToNewList(itemId, "first")}
        />
        <ListContainer
          listNumber={3}
          listItems={newList}
          isCreateView={true}
          onMoveItemLeft={(itemId) => moveItemBack(itemId, "first")}
          onMoveItemRight={(itemId) => moveItemBack(itemId, "second")}
        />
        <ListContainer
          listNumber={2}
          listItems={secondList}
          isCreateView={true}
          onMoveItemLeft={(itemId) => moveItemToNewList(itemId, "second")}
        />
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-5 mt-5 md:gap-2.5">
        <button
          className="px-6 py-2.5 rounded-md text-base font-medium cursor-pointer transition-all duration-300 bg-gray-100 text-gray-600 border border-gray-300 hover:bg-gray-200 md:px-4 md:py-2 md:text-sm"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="px-6 py-2.5 rounded-md text-base font-medium cursor-pointer transition-all duration-300 bg-green-600 text-white border-none hover:bg-green-700 md:px-4 md:py-2 md:text-sm"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default CreateListView;
