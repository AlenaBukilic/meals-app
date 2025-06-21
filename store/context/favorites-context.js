import { createContext, useState } from "react";

export const FavritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  remveFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavritesContext.Provider value={value}>
      {children}
    </FavritesContext.Provider>
  );
}

export default FavoritesContextProvider;
