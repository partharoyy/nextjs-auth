export const signupFormController = [
  {
    name: 'userName',
    placeholder: 'Enter username',
    componentType: 'input',
    type: 'text',
  },
  {
    name: 'email',
    placeholder: 'Enter email',
    componentType: 'input',
    type: 'email',
  },
  {
    name: 'password',
    placeholder: 'Enter password',
    componentType: 'input',
    type: 'password',
  },
];

export const initialSignupData = {
  userName: '',
  email: '',
  password: '',
};

export const signinFormController = [
  {
    name: 'email',
    placeholder: 'Enter email',
    componentType: 'input',
    type: 'email',
  },
  {
    name: 'password',
    placeholder: 'Enter password',
    componentType: 'input',
    type: 'password',
  },
];

export const initialSigninData = {
  email: '',
  password: '',
};
