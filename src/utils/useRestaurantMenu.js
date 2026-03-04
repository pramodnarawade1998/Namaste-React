import { useEffect, useState } from "react";
import { mockMenuData } from "../utils/mockData";
// import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const data = await fetch(MENU_API + resId);

    // const json = await data.json();

    // setResInfo(json.data);

    setResInfo(mockMenuData.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
