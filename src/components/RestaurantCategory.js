import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-3 bg-gray-50 shadow-lg p-4">
        {/* {Header} */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span>
            {data?.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {/* {Accordian Body} */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
