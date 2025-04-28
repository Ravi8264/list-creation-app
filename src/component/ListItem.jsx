import React from "react";

// Component to display a single list item with move controls
const ListItem = ({
  item,
  showLeftArrow,
  showRightArrow,
  onMoveLeft,
  onMoveRight,
}) => (
  <li className="flex items-center p-4 border border-gray-200 rounded-lg mb-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 hover:shadow-sm group">
    {/* Left move button */}
    {showLeftArrow && (
      <button
        className="bg-gradient-to-r from-blue-600 to-blue-700 border border-blue-700 rounded-lg w-9 h-9 flex items-center justify-center cursor-pointer hover:from-blue-700 hover:to-blue-800 hover:border-blue-800 text-white font-bold mr-3 group-hover:shadow-sm"
        onClick={onMoveLeft}
        aria-label={`Move ${item.name} left`}
      >
        &#8592;
      </button>
    )}

    {/* Item content */}
    <div className="flex-1 overflow-hidden">
      <h3 className="text-base font-semibold text-gray-800 mb-1.5 truncate group-hover:text-blue-600">
        {item.name}
      </h3>
      <p className="text-sm text-gray-500 truncate m-0 group-hover:text-gray-600">
        {item.description}
      </p>
    </div>

    {/* Right move button */}
    {showRightArrow && (
      <button
        className="bg-gradient-to-r from-blue-600 to-blue-700 border border-blue-700 rounded-lg w-9 h-9 flex items-center justify-center cursor-pointer hover:from-blue-700 hover:to-blue-800 hover:border-blue-800 text-white font-bold ml-3 group-hover:shadow-sm"
        onClick={onMoveRight}
        aria-label={`Move ${item.name} right`}
      >
        &#8594;
      </button>
    )}
  </li>
);

export default ListItem;
