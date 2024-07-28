// import { useEffect, useState } from "react";
// import { MENU_API } from "../utils/constants";

// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, [resId]);

//   const fetchData = async () => {
//     const data = await fetch(MENU_API + resId);
//     const json = await data.json();
//     setResInfo(json);
//   };
//   console.log(resInfo);
//   return resInfo;
// };

// export default useRestaurantMenu;
import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null); // Add an error state

  useEffect(() => {
    if (resId) {
      fetchData();
    }
  }, [resId]); // Add resId to the dependency array

  const fetchData = async () => {
    try {
      //   const response = await fetch(`${MENU_API}${resId}`);
      const response = await fetch(MENU_API + resId);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      // console.log(json); // Print the response structure
      setResInfo(json.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { resInfo, loading, error };
};

export default useRestaurantMenu;
