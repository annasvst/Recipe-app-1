import { fetchData } from '../../utils';

export const BD_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

export async function fetchRecipesByIngredient(query) {
  const data = await fetchData(`${BD_BASE_URL}/filter.php?i=`, query);
  return data.meals;
}

//www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

export async function searchRecipesByname(query) {
  const data = await fetchData(`${BD_BASE_URL}/filter.php?i=`, query);
  return data.meals;
}

