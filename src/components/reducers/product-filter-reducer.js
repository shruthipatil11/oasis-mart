import { useReducer } from "react";

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "rating":
      return { ...state, rating: action.payload };
    case "category":
      return {
        ...state,
        category: state.category.includes(action.payload)
          ? state.category.filter((category) => category !== action.payload)
          : [...state.category, action.payload],
      };
    case "sort":
      return { ...state, sort: action.payload };
    case "priceRange":
      return { ...state, priceRange: action.payload };
    case "clearAll":
      return {
        category: ["Show Pieces", "Wall Decor", "Clocks", "Plant & Planters"],
        rating: 1,
        sort: "Low to High",
        priceRange: 1000,
      };
    default:
      return state;
  }
};

const useProductFilters = (location) => {
  const [filterParamters, dispatchFilter] = useReducer(reducerFunc, {
    category: [location.state.categoryName],
    rating: 1,
    sort: "Low to High",
    priceRange: 1000,
  });
  return [filterParamters, dispatchFilter];
};

export { reducerFunc, useProductFilters };
