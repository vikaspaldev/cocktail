/*
  Created by
  Student name: Vikas Pal
  Student ID: 8754947
*/
import { httpService } from '../utils/httpService';

export const getRandomCocktail = async () => {
  const response = await httpService({
    url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    method: 'GET',
  });
  return response.drinks[0];
};

export const getCocktailById = async id => {
  const response = await httpService({
    url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    method: 'GET',
  });
  return response.drinks[0];
};

export const searchCocktailByName = async name => {
  const response = await httpService({
    url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
    method: 'GET',
  });
  return response.drinks;
};
