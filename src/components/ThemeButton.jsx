'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeButton = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		// <button onClick={() => (setTheme(theme) === 'dark' ? 'light' : 'dark')}>
		// 	{theme === 'dark' ? 'light' : 'dark'}
		// </button>
		<div>
			ThemeNow: {theme} <br />
			<button onClick={() => setTheme('light')}>LightMode</button> <br />
			<button onClick={() => setTheme('dark')}>DarkMode</button>
		</div>
	);
};

export default ThemeButton;
