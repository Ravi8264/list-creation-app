import React from "react";
import ListItem from "./ListItem.jsx";

// Component to display a single list with its items and selection controls
const ListContainer = ({
  listNumber,
  listItems,
  isSelected,
  onSelectCheckbox,
  isCreateView = false,
  onMoveItemLeft = null,
  onMoveItemRight = null,
}) => (
  <div
    className={`bg-white rounded-xl shadow-lg p-6 w-full mx-2.5 min-h-[400px] transition-all duration-300 hover:shadow-xl border-2 ${
      isSelected ? "border-green-500 shadow-xl" : "border-transparent"
    } ${isCreateView ? "lg:w-[30%] md:w-[45%] sm:w-[90%]" : ""}`}
  >
    {/* List header with title and selection checkbox */}
    <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
      <h2 className="text-2xl text-gray-800 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-indigo-600 transition-all duration-300">
        List {listNumber}
      </h2>

      {!isCreateView && (
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={`list-checkbox-${listNumber}`}
            checked={isSelected}
            onChange={onSelectCheckbox}
            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 cursor-pointer hover:ring-2 hover:ring-green-300 transition-all duration-200"
          />
          <label
            htmlFor={`list-checkbox-${listNumber}`}
            className="text-sm font-medium text-gray-600 cursor-pointer hover:text-green-600 transition-colors duration-200"
          >
            Select
          </label>
        </div>
      )}
    </div>

    {/* List items container */}
    <ul className="list-none p-0 m-0 overflow-y-auto max-h-[320px] md:max-h-[250px] sm:max-h-[200px] scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-gray-100 hover:scrollbar-thumb-indigo-300 transition-colors duration-200">
      {listItems.length === 0 ? (
        <li className="text-center text-gray-400 py-6 italic bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          No items
        </li>
      ) : (
        listItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            showLeftArrow={
              isCreateView && (listNumber === 3 || listNumber === 2)
            }
            showRightArrow={
              isCreateView && (listNumber === 1 || listNumber === 3)
            }
            onMoveLeft={() => onMoveItemLeft?.(item.id)}
            onMoveRight={() => onMoveItemRight?.(item.id)}
          />
        ))
      )}
    </ul>
  </div>
);

export default ListContainer;
