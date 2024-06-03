import { getUserAuthAction } from '@/actions';
import Logout from '@/components/logout';

export default async function Home() {
  const currentUser = await getUserAuthAction();

  console.log(currentUser);

  return (
    <div className='w-full h-screen bg-red-200 flex justify-center items-center'>
      <h1 className='text-2xl'>Welcome! {currentUser?.data?.userName}</h1>
      <Logout />
    </div>
  );
}
