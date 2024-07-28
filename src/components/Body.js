// Notice that we are destructuring useState from react as it is a named export.
import React, { useEffect, useState } from "react";

import restList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestarant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "/api/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await data.json();

      console.log(json);

      setListOfRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.log("Fetching error data failes, using mock data instead", error);
      setListOfRestaurant(restList);
      setFilteredRestaurant(restList);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection;
      </h1>
    );

  const handleFilter = () => {
    const filteredList = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurant(filteredList);
  };

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-2 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);

              const filteredRestarant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestarant);
            }}
          >
            Search
          </button>
        </div>
        {/* <div className="search m-4 p-4 flex items-center">
          <button
            className="px-2 py-2 bg-gray-100 rounded-lg"
            // onClick={() => {
            //   const filteredList = listOfRestaurant.filter(
            //     (res) => res.info.avgRating > 4
            //   );
            //   setListOfRestaurant(filteredList);
            // }}
            onClick={handleFilter}
          >
            Top Rated Restaurant
          </button>
        </div> */}
      </div>
      {/* <div className="search">Search</div> */}
      <div className="flex flex-wrap">
        {listOfRestaurant && listOfRestaurant.length > 0 ? (
          filteredRestarant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

// const sortedRestList = restList.sort(
//   (a, b) => b.info.avgRating - a.info.avgRating
// );

export default Body;
