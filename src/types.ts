export interface DrinkHead {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string | null;
}

export type Drink = DrinkHead & {
  strDrinkAlternate: string | null;
  strDrinkES: string | null;
  strDrinkDE: string | null;
  strDrinkFR: string | null;
  'strDrinkZH-HANS': string | null;
  'strDrinkZH-HANT': string | null;
  strTags: string;
  strVideo: string | null;
  strCategory: string | null;
  strIBA: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  'strInstructionsZH-HANS': string | null;
  'strInstructionsZH-HANT': string | null;
  strIngredient1: string;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strCreativeCommonsConfirmed: 'Yes' | 'No';
  dateModified: string;
}

export interface Ingredient {
  idIngredient: string,
  strIngredient: string,
  strDescription: string,
  strType: string,
  strAlcohol: 'Yes' | 'No',
  strABV: string,
}

export interface SearchDrinksResult {
  drinks: Drink[];
}


export interface SearchIngredientResult {
  ingredients: Ingredient[]
}

export interface ListIngredientResult {
  drinks: Array<{strIngredient1: 'string'}>;
}

export interface FilterDrinksByIngredientResult {
  drinks: DrinkHead[];
}
