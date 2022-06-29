import { FlexRowCenter } from 'components/flex-box';
import Login from '../src/components/sessions/Login';
import React from 'react';

const LoginPage = () => {
  return (
    <FlexRowCenter flexDirection='column' minHeight='100vh'>
      <Login />
    </FlexRowCenter>
  );
};

export default LoginPage;
