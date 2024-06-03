'use client';

import CommonElement from '@/components/common-element/page';
import { useState } from 'react';
import { initialSignupData, signupFormController } from '../utils';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { userSignUpAction } from '@/actions';

function SignUp() {
  const [signUpData, setSignUpData] = useState(initialSignupData);
  const router = useRouter();

  const buttonActive = () => {
    return Object.keys(signUpData).every((item) => signUpData[item].trim() !== '');
  };

  const handleSignUp = async () => {
    const response = await userSignUpAction(signUpData);

    if (response?.data) router.push('/sign-in');
  };

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center  bg-gradient-to-tr from-orange-400 to-purple-500'>
      <h1 className='font-bold text-4xl mt-6 mb-4 '>Sign up</h1>
      <form className='flex flex-col' action={handleSignUp}>
        {signupFormController.map((item) => (
          <div key={item.name} className='w-full flex flex-col gap-4 items-start justify-center mt-4'>
            <label className='uppercase font-bold'>{item.name}</label>
            <CommonElement
              currentItem={item}
              value={signUpData[item.name]}
              onChange={(e) =>
                setSignUpData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
        ))}
        <Button disabled={!buttonActive()} className='mt-4 mx-auto' type='submit'>
          Sign up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
