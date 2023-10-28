export const metadata = {
	title: 'Коктейли',
	description: 'Разновидности коктейлей',
};

export default function Cocktails() {
	return (
		<>
			<h1 className='m-10 text-5xl '>Список разных коктейлей</h1>
			<button className='m-10 w-72 h-36 font-sofi tracking-wider bg-btnclr text-first'>
				НАЖМИ МЕНЯ
			</button>
		</>
	);
}
