import { createContext, useReducer, useContext, act } from "react";

export const RECİPE_ACTİON = {
  update: "update",
  deleteAll: "delete_all",
};

export const RecipesContext = createContext();
export const RecipesDispatchContext = createContext();

export const RecipesProvider = ({ children, initialState }) => {
  const [recipes, dispatch] = useReducer(userReducer, initialState ?? []);

  return (
    <RecipesContext.Provider value={recipes}>
      <RecipesDispatchContext.Provider value={dispatch}>
        {children}
      </RecipesDispatchContext.Provider>
    </RecipesContext.Provider>
  );
};

function userReducer(state, action) {
  switch (action.type) {
    case RECİPE_ACTİON.update: {
      const newRecipes = action.payload.filter(
        (payloadItem) =>
          !state.some((recipe) => recipe.idMeaal === payloadItem.idMeaal),
      );
      return [...newRecipes, ...state];
    }
    case RECİPE_ACTİON.deleteAll: {
      return [];
    }
    default:
      throw Error(`Action type ${action.type} is not supported`);
  }
}

export const useRecipes = () => useContext(RecipesContext);
export const useRecipesDispatch = () => useContext(RecipesDispatchContext);
