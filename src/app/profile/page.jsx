import { authConfig } from '@/configs/auth';
import { getServerSession } from 'next-auth';

export const metadata = {
	title: 'Профиль',
	description: 'Профиль пользователя',
};

export default async function Profile() {
	const session = await getServerSession(authConfig);

	return (
		<div>
			<h1>Ваш профиль: {session?.user?.name}</h1>
			{session?.user?.image && <img src={session.user.image} alt='' />}
		</div>
	);
}
