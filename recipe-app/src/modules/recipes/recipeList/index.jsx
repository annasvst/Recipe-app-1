import { useEffect } from "react";
import {
  RECİPE_ACTİON,
  useRecipesDispatch,
  useRecipesState,
} from "../RecipesProvider";
import { fetchRecipesByIngredient } from "../recipeService";

export const RecipeList = () => {
  const recipes = useRecipesState();
  const dispatch = useRecipesDispatch();

  useEffect(() => {
    fetchRecipesByIngredient("chicken_breast").then((recipes) =>
      dispatch({ type: RECİPE_ACTİON.update, payload: recipes }),
    );
  }, [dispatch]);
  return (
    <>
      {recipes.length > 0 ? (
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <li key={recipe.idMeal} className="recipe-item">
              {recipe.strMeal}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-recipes">No recipes found</p>
      )}
    </>
  );
};
