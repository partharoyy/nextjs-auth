'use client';

import CommonElement from '@/components/ui/common-element/page';
import { useState } from 'react';
import { initialSigninData, signinFormController } from '../utils';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { userSignInAction } from '@/actions';

function SignIn() {
  const [signInData, setSignInData] = useState(initialSigninData);
  const router = useRouter();

  const buttonActive = () => {
    return Object.keys(signInData).every((item) => signInData[item].trim() !== '');
  };

  const handleSignIn = async () => {
    const response = await userSignInAction(signInData);

    if (response?.success) router.push('/');
  };

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center  bg-gradient-to-tr from-orange-400 to-purple-500'>
      <h1 className='font-bold text-4xl mt-6 mb-4 '>Sign In</h1>
      <form className='flex flex-col' action={handleSignIn}>
        {signinFormController.map((item) => (
          <div key={item.name} className='w-full flex flex-col gap-4 items-start justify-center mt-4'>
            <label className='uppercase font-bold'>{item.name}</label>
            <CommonElement
              currentItem={item}
              value={signInData[item.name]}
              onChange={(e) =>
                setSignInData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
        ))}
        <Button disabled={!buttonActive()} className='mt-4 mx-auto'>
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
