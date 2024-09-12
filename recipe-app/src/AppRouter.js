import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchBar } from './modules/recipes/search-bar';
import { RecipeList } from './modules/recipes/recipeList';



export const AppRouter = () => {
  return (

    <Router>
      <Routes>
        <Route path="/user" element={<h1>User page</h1>} />
        <Route path="/settings" element={<h1>Settings page</h1>} />
        <Route path="/" element={
          <>
            <SearchBar />
            <RecipeList />
          </>
        } />
      </Routes>
    </Router>

  );
};




