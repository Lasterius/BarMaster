import Navbar from '@/components/navbar';
import Providers from '@/components/providers.jsx';
import { Jura, Sofia_Sans_Extra_Condensed } from 'next/font/google';
import './globals.css';

const sofi = Sofia_Sans_Extra_Condensed({
	weight: ['800'],
	subsets: ['cyrillic', 'latin'],
	display: 'fallback',
	variable: '--sofi-font',
});

const jura = Jura({
	weight: ['400', '500', '700'],
	subsets: ['cyrillic', 'latin'],
	variable: '--jura-font',
});

export const metadata = {
	title: 'BarMaster',
	description: 'Твой лучший друг в мире коктейлей',
};

export default function RootLayout({ children }) {
	return (
		<html
			lang='ru'
			className='light scroll-smooth'
			style={{ colorScheme: 'light' }}
		>
			<body
				className={`${jura.className} ${sofi.variable} bg-gradient-to-br from-first via-second
         to-third dark:from-dfirst dark:via-dsecond dark:to-dthird dark:text-first text-dsecond`}
			>
				<Providers>
					<Navbar />
					<main>{children}</main>
					<footer></footer>
				</Providers>
			</body>
		</html>
	);
}
