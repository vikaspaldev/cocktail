/*
  Created by
  Student name: Gaurav Chaudhary
  Student ID: 8750279
*/
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === '/') {
        searchRef.current.focus();
      }
    });
  }, []);

  const handleSearchChange = e => {
    if (searchValue === '' && e.target.value === '/') {
      return;
    }

    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = e => {
    if (e.key === 'Enter' && searchValue !== '') {
      navigate(`/search/${searchValue}`);
      setSearchValue('');
    }
  };

  return (
    <header className="fixed left-0 right-0 flex items-center justify-between max-w-5xl mx-auto px-4 py-4 drop-shadow-xl bg-gray-800">
      <Link to="/">Cocktail</Link>

      <div>
        <input
          autoFocus={false}
          value={searchValue}
          onChange={handleSearchChange}
          ref={searchRef}
          type="search"
          placeholder="Search cocktail and press enter (Press '/' to focus)"
          className="text-sm rounded-md w-[400px] text-gray-800"
          onKeyUp={handleSearchSubmit}
        />
      </div>
    </header>
  );
};
