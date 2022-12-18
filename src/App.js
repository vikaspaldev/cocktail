/*
  Created by
  Student name: Vikas Pal
  Student ID: 8754947
*/
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { CocktailDetails } from './pages/CocktailDetails';
import { CocktailSearch } from './pages/CocktailSearch';

function App() {
  return (
    <div className="bg-sky-900 text-white">
      <BrowserRouter>
        <Header />
        <main className="max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<CocktailDetails />} />
            <Route path="/search/:query" element={<CocktailSearch />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
