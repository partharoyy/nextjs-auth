import { getUserAuthAction } from '@/actions';

export default async function Home() {
  const currentUser = await getUserAuthAction();

  return <div className='w-full h-screen bg-red-400'>{currentUser?.data.userName}</div>;
}
