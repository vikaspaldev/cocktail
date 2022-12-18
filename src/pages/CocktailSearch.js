/*
  Created by
  Student name: Vikas Pal
  Student ID: 8754947
*/
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { searchCocktailByName } from '../services/cocktail';

export const CocktailSearch = () => {
  const navigate = useNavigate();
  const { query: searchValue } = useParams();
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    if (!searchValue) {
      navigate('/');
      return;
    }
    searchCocktailByName(searchValue).then(setCocktails);
  }, [navigate, searchValue]);

  return (
    <div className="py-20 max-w-xl mx-auto">
      <p className="my-4 text-xl flex">
        Search value: <div className="ml-2 text-orange-600">{searchValue}</div>
      </p>
      <ul className="flex flex-col gap-y-4">
        {cocktails.map(cocktail => (
          <li key={cocktail.idDrink}>
            <Link to={`/details/${cocktail.idDrink}`} className="flex">
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                className="w-80 rounded-xl object-center object-cover"
              />
              <div className="ml-5">
                <h2 className="text-2xl">{cocktail.strDrink}</h2>
                <p className="text-sm italic">{cocktail.strInstructions}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
