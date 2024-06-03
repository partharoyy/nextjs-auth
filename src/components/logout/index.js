'use client';

import { logoutAction } from '@/actions';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

function Logout() {
  const router = useRouter();
  const handleLogout = async () => {
    await logoutAction();
    router.push('/sign-in');
  };
  return (
    <Button className='absolute right-2 top-2' onClick={handleLogout}>
      Logout
    </Button>
  );
}

export default Logout;
