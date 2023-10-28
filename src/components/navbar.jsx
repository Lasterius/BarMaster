import Image from 'next/image';
import Link from 'next/link';
import ThemeButton from './ThemeButton';

const Navbar = () => {
	const navigation = [
		'Главная',
		'Коктейли',
		'Ингредиенты',
		'Конструктор',
		'Статьи',
	];

	return (
		<header className='uppercase sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'>
			<div className='max-w-screen-2xl mx-auto'>
				<div className='py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0'>
					<div className='relative flex items-center'>
						<ThemeButton />
						<Link
							href={'/'}
							className='mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto'
						>
							<span className='sr-only'>BarMaster home page</span>
							<Image
								src='/barmen_logo.png'
								alt='web_logo'
								width={40}
								height={40}
								priority
							/>
						</Link>
						<div className='relative hidden lg:flex items-center ml-auto'>
							<nav className='font-sofi text-xl tracking-wider leading-6 font-semibold text-slate-700 dark:text-slate-200'>
								<ul className='flex space-x-8'>
									<li>
										<Link
											href={'/'}
											className='hover:text-sky-500 dark:hover:text-sky-400'
										>
											Главная
										</Link>
									</li>
									<li>
										<Link
											href='/cocktails'
											className='hover:text-sky-500 dark:hover:text-sky-400'
										>
											Коктейли
										</Link>
									</li>
									<li>
										<Link
											href={'/'}
											className='hover:text-sky-500 dark:hover:text-sky-400'
										>
											Ингредиенты
										</Link>
									</li>
									<li>
										<Link
											href={'/'}
											className='hover:text-sky-500 dark:hover:text-sky-400'
										>
											Конструктор
										</Link>
									</li>
									<li>
										<Link
											href={'/'}
											className='hover:text-sky-500 dark:hover:text-sky-400'
										>
											Статьи
										</Link>
									</li>
								</ul>
							</nav>
							<div className='flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800'>
								<Link
									href={'/'}
									className='ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300'
								>
									<Image
										src='/search.svg'
										alt='lk'
										width={22}
										height={22}
										priority
									/>
									,
								</Link>
								<Link
									href={'/'}
									className='ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300'
								>
									<Image
										src='/lk.svg'
										alt='lk'
										width={22}
										height={22}
										priority
									/>
									,
								</Link>
								<Link
									href={'/'}
									className='ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300'
								>
									<Image
										src='/favourite.svg'
										alt='lk'
										width={22}
										height={22}
										priority
									/>
									,
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
