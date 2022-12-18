/*
  Created by
  Student name: Aakash Pal
  Student ID: 8755228
*/
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCocktailById } from '../services/cocktail';
import { getIngredientAndMeasureData } from '../utils/helper';

export const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState();

  useEffect(() => {
    getCocktailById(id).then(setCocktail);
  }, [id]);

  if (!cocktail) return null;

  const tags = (cocktail.strTags || '').split(',').filter(Boolean);
  const ingredientAndMeasureData = getIngredientAndMeasureData(cocktail);

  return (
    <div className="pt-20 h-screen">
      <div className="flex">
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          className="rounded w-[450px] object-center object-cover"
        />
        <div className="ml-5">
          <h1 className="text-6xl font-bold">{cocktail.strDrink}</h1>
          <span className="inline-block break-normal my-2 italic max-w-[500px]">
            {cocktail.strInstructions}
          </span>

          {tags.length > 0 && (
            <div className="my-2">
              <div>Tags:</div>
              <ul className="flex gap-2 mt-1">
                {tags.map(tag => (
                  <li className="bg-orange-700 drop-shadow-xl py-2 px-4 rounded-lg">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {ingredientAndMeasureData.length > 0 && (
            <div className="my-2">
              <div>Ingredients:</div>
              <ul className="mt-1">
                {ingredientAndMeasureData.map(data => (
                  <li key={data.ingredient}>
                    {data.ingredient} - {data.measure}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
