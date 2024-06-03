'use server';

import { connectDB } from '@/database';
import User from '@/models';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function userSignUpAction(signUpData) {
  await connectDB();

  try {
    const { userName, email, password } = signUpData;

    const checkUser = await User.findOne({ email });

    if (checkUser) {
      return {
        success: false,
        message: 'User already exists, please try with another user!',
      };
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const addedUser = await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    if (!addedUser) {
      return {
        success: false,
        message: 'Something went wrong!',
      };
    }

    return {
      success: true,
      data: JSON.parse(JSON.stringify(addedUser)),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: 'Something went wrong!',
    };
  }
}

export async function userSignInAction(signInData) {
  await connectDB();
  try {
    const { email, password } = signInData;

    const checkUser = await User.findOne({ email });

    if (!checkUser) {
      return {
        success: false,
        message: 'No such user',
      };
    }

    const checkPassword = await bcryptjs.compare(password, checkUser.password);

    if (!checkPassword) {
      return {
        success: false,
        message: 'Wrong password! Please try again.',
      };
    }

    const tokenData = {
      id: checkUser._id,
      email: checkUser.email,
    };

    const token = jwt.sign(tokenData, process.env.NEXT_PUBLIC_JWT_SECRET_KEY, {
      expiresIn: '1d',
    });

    const cookiesManager = cookies();
    cookiesManager.set('token', token);

    return {
      success: true,
      message: 'Login successful!',
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: 'Something went wrong!',
    };
  }
}

export async function getUserAuthAction() {
  await connectDB();

  try {
    const cookiesManager = cookies();
    const token = cookiesManager.get('token')?.value || '';

    if (token === '') {
      return {
        success: false,
        message: 'Token is invalid!',
      };
    }

    const decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY);

    if (!decodedToken) {
      return {
        success: false,
        message: 'Token is invalid!',
      };
    }

    const getUserInfo = await User.findOne({ _id: decodedToken.id }).select('-password');

    if (getUserInfo) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(getUserInfo)),
      };
    } else {
      return {
        success: false,
        message: 'Something went wrong!',
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: 'Something went wrong!',
    };
  }
}

export async function logoutAction() {
  const cookiesManager = cookies();

  cookiesManager.set('token', '');
}
