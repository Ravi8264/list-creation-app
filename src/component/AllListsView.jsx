import React from "react";
import ListContainer from "./ListContainer.jsx";

// Component to display all lists and handle list selection
const AllListsView = ({
  listsData,
  selectedLists,
  onSelectList,
  onCreateNewList,
  errorMsg,
}) => (
  <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-4">
    {/* Create new list button and error message section */}
    <div className="flex flex-col items-center mb-8 w-full">
      <button
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none rounded-lg px-8 py-3.5 text-base font-semibold cursor-pointer hover:from-indigo-700 hover:to-purple-700 sm:px-6 sm:py-3 sm:text-sm mb-6"
        onClick={onCreateNewList}
      >
        Create a new list
      </button>
      {errorMsg && (
        <p className="text-red-600 text-center text-sm font-medium bg-red-50 px-4 py-2 rounded-lg mb-6">
          {errorMsg}
        </p>
      )}
    </div>

    {/* Lists grid container */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {listsData.map((listItems, index) => (
        <div key={`list-${index + 1}`} className="w-full">
          <ListContainer
            listNumber={index + 1}
            listItems={listItems}
            isSelected={selectedLists.includes(index)}
            onSelectCheckbox={() => onSelectList(index)}
          />
        </div>
      ))}
    </div>
  </div>
);

export default AllListsView;
