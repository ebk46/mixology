import { Drink, ListIngredientResult, SearchDrinksResult, SearchIngredientResult } from "./types";


const apiKey = process.env.REACT_APP_COCKTAILDB_API_KEY;
const baseUrl = `https://www.thecocktaildb.com/api/json/v2/${apiKey}/`;
const searchUrl = `${baseUrl}search.php?`;
const lookupUrl = `${baseUrl}lookup.php?`;
const filterUrl = `${baseUrl}filter.php?`;
const popularUrl = `${baseUrl}popular.php?`;
const listUrl = `${baseUrl}list.php?`;

// Get a list of drinks based on a search term
export const searchByDrinkName = async (drinkName: string): Promise<SearchDrinksResult> => {
  const query = `s=${drinkName}`;
  const res = await fetch(`${searchUrl}${query}`);

  if (res.status === 200) {
    return res.json().then(data => data as SearchDrinksResult);
  } else {
    throw new Error(`Failed searchByName: Status ${res.status}`);
  }
};

// Get a list of ingredients based on search term
export const searchByIngredientName = async (ingredientNames: string[]): Promise<SearchIngredientResult> => {
  const query = `i=${ingredientNames.join(',')}`;
  const res = await fetch(`${filterUrl}${query}`);

  if (res.status === 200) {
    return res.json().then(data => data as SearchIngredientResult);
  } else {
    throw new Error(`Failed searchByIngredientName: Status ${res.status}`);
  }
};

// Get details about a drink based on its ID
export const lookupByDrinkId = async (drinkId: string): Promise<Drink> => {
  const query = `i=${drinkId}`;
  const res = await fetch(`${lookupUrl}${query}`);

  if (res.status === 200) {
    return res.json().then(data => data as Drink);
  } else {
    throw new Error(`Failed lookupByDrinkId: Status ${res.status}`);
  }
};

// Get a list of the most popular drinks
export const getPopularDrinks = async (): Promise<SearchDrinksResult> => {
  const res = await fetch(`${popularUrl}`);

  if (res.status === 200) {
    return res.json().then(data => data as SearchDrinksResult);
  } else {
    throw new Error(`Failed getPopularDrinks: Status ${res.status}`);
  }
};

// Get the full list of ingredients
export const getIngredients = async (): Promise<ListIngredientResult> => {
  const res = await fetch(`${listUrl}i=list`);

  if (res.status === 200) {
    return res.json().then(data => data as ListIngredientResult);
  } else {
    throw new Error(`Failed getIngredients: Status ${res.status}`);
  }
}