/*
  Created by
  Student name: Aakash Pal
  Student ID: 8755228
*/
export const getIngredientAndMeasureData = cocktail => {
  const data = [];

  let i = 1;
  while (
    `strIngredient${i}` in cocktail &&
    cocktail[`strIngredient${i}`] !== null
  ) {
    data.push({
      ingredient: cocktail[`strIngredient${i}`],
      measure: cocktail[`strMeasure${i}`],
    });
    i++;
  }

  return data;
};
