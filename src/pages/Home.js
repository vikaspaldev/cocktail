/*
  Created by
  Student name: Gaurav Chaudhary
  Student ID: 8750279
*/
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRandomCocktail } from '../services/cocktail';
import { getIngredientAndMeasureData } from '../utils/helper';

export const Home = () => {
  const [cocktail, setCocktail] = useState();

  useEffect(() => {
    getRandomCocktail().then(setCocktail);
  }, []);

  if (!cocktail) {
    return <div>loading...</div>;
  }

  const tags = (cocktail.strTags || '').split(',').filter(Boolean);
  const ingredientAndMeasureData = getIngredientAndMeasureData(cocktail);

  return (
    <div className="w-5xl h-screen flex items-center justify-center flex-col">
      <Link to={`/details/${cocktail.idDrink}`}>
        <div className="flex">
          <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            className="rounded w-60 h-60 object-center object-cover"
          />

          <div className="ml-5 pr-5">
            <div>
              <h1 className="text-5xl font-bold">{cocktail.strDrink}</h1>
            </div>
            <span className="inline-block break-normal my-2 italic max-w-[500px] line-clamp-3">
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

            {tags.length === 0 && ingredientAndMeasureData.length > 0 && (
              <div className="my-2">
                <div>Ingredients:</div>
                <ul className="mt-1">
                  {ingredientAndMeasureData.slice(0, 3).map(data => (
                    <li key={data.ingredient}>
                      {data.ingredient} - {data.measure}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link
              to={`/details/${cocktail.idDrink}`}
              className="text-cyan-300 underline"
            >
              More details
            </Link>
          </div>
        </div>
      </Link>

      <div className="fixed bottom-10">
        Note: On every load, a new cocktail is fetched from the API. Hit refresh
        to see a new cocktail.
      </div>
    </div>
  );
};
