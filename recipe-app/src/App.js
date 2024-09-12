
import { useState } from 'react';
import './App.css';
import { AppRouter } from './AppRouter';

export const App = () => {

	const [recipes, setRecipes] = useState([]);

	return (
		<div className='container'>
			<header className='header'>Recipe Search App</header>
			<AppRouter />
		</div>
	);
};
