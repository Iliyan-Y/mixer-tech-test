import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import Crud from './Crud';

const HomePage = () => {
  return (
    <>
      <h1>I will be the home page</h1>
      <Crud />
      <AmplifySignOut />
    </>
  );
};

export default HomePage;
