'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import ThemeButton from './ThemeButton';

const Navbar = () => {
	const session = useSession();

	console.log(session);

	return (
		<header className='uppercase sticky top-0 z-40 w-full flex-none bg-zinc-950'>
			<div className='max-w-screen-2xl mx-auto'>
				<div className='py-4 lg:px-8 mx-4 lg:mx-0'>
					<div className='relative flex items-center'>
						<Link
							href={'/'}
							className='flex-none w-2 overflow-hidden md:w-auto'
						>
							<span className='sr-only'>
								BarMaster logo and link to home page
							</span>
							<img
								src='/barmasterlogo.png'
								alt='BarMaster logo'
								className='w-16'
							/>
						</Link>
						<div className='relative hidden lg:flex items-center ml-auto'>
							<nav className='font-sofi text-xl tracking-wider leading-6 font-semibold text-btnclr '>
								<ul className='flex space-x-8'>
									<li className='transition-all ease-out delay-100 hover:scale-110'>
										<span className='sr-only'>Home Page</span>

										<Link href={'/'} className='hover:text-second'>
											Главная
										</Link>
									</li>
									<li className='transition-all ease-out delay-100 hover:scale-110'>
										<span className='sr-only'>Cocktails</span>

										<Link href='/cocktails' className='hover:text-second'>
											Коктейли
										</Link>
									</li>
									<li className='transition-all ease-out delay-100 hover:scale-110'>
										<span className='sr-only'>Ingredients</span>

										<Link href={'/'} className='hover:text-second'>
											Ингредиенты
										</Link>
									</li>
									<li className='transition-all ease-out delay-100 hover:scale-110'>
										<span className='sr-only'>Constructor</span>

										<Link href={'/'} className='hover:text-second'>
											Конструктор
										</Link>
									</li>
									<li className='transition-all ease-out delay-100 hover:scale-110'>
										<span className='sr-only'>Articles</span>

										<Link href={'/'} className='hover:text-second '>
											Статьи
										</Link>
									</li>
								</ul>
							</nav>
							<div className='flex items-center border-l border-btnclr ml-6 pl-6'>
								<Link href={'/'} className='pr-2'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-6 h-6 fill-btnclr hover:fill-second transition-all ease-out delay-100 hover:scale-110'
										viewBox='0 0 24 24'
									>
										<path d='m21.4 18.6-4.5-4.5c.7-1.2 1.1-2.6 1.1-4.1 0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.5 0 2.9-.4 4.1-1.1l4.5 4.5c.8.8 2 .8 2.8 0s.8-2 0-2.8zm-11.4-3.6c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z' />
									</svg>
								</Link>
								<ThemeButton />
								{session?.data && (
									<>
										<Link href={'/profile'} className='pr-2'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='w-6 h-6 fill-btnclr hover:fill-second transition-all ease-out delay-100 hover:scale-110'
												viewBox='0 0 512 512'
											>
												<path d='m463.09375 406.492188c31.71875-43.519532 48.90625-95.886719 48.90625-150.503907 0-141.480469-114.496094-255.988281-256-255.988281-141.488281 0-256 114.492188-256 255.988281 0 54.601563 17.179688 106.953125 48.878906 150.464844 102.132813-140.484375 311.9375-140.609375 414.214844.039063zm-297.09375-255.5c0-49.621094 40.375-89.996094 90-89.996094s90 40.375 90 89.996094v30c0 49.625-40.375 89.996093-90 89.996093s-90-40.371093-90-89.996093zm0 0' />
												<path d='m256 240.988281c33.085938 0 60-26.914062 60-59.996093v-30c0-33.082032-26.914062-59.996094-60-59.996094s-60 26.914062-60 59.996094v30c0 33.082031 26.914062 59.996093 60 59.996093zm0 0' />
												<path d='m68.757812 430.527344c101.289063 108.601562 273.167969 108.683594 374.550782-.074219-89.375-132.792969-284.695313-132.1875-374.550782.074219zm0 0' />
											</svg>
										</Link>
										<Link href={'/'} className='pr-2'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='w-6 h-6 fill-btnclr hover:fill-second transition-all ease-out delay-100 hover:scale-110'
												viewBox='0 0 24 24'
											>
												<path d='m12 21.35-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54z' />
											</svg>
										</Link>
									</>
								)}
								{session?.data ? (
									<Link
										href={'#'}
										onClick={() =>
											signOut({
												callbackUrl: '/',
											})
										}
									>
										Sign Out
									</Link>
								) : (
									<Link href={'/api/auth/signin'}>Sign In</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
