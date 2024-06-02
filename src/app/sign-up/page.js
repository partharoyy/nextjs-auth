'use client';

import CommonElement from '@/components/ui/common-element/page';
import { useState } from 'react';
import { initialSignupData, signupFormController } from '../utils';

function SignUp() {
  const [signUpData, setSignUpData] = useState(initialSignupData);
  return (
    <div>
      <h1>Sign up</h1>
      <form>
        {signupFormController.map((item) => (
          <div key={item.name}>
            <label>{item.name}</label>
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
      </form>
    </div>
  );
}

export default SignUp;
