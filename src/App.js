import './App.css';
import HomePage from './Components/HomePage';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
} from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <AmplifyAuthenticator usernameAlias="email">
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            {
              type: 'email',
              label: 'Email',
              placeholder: 'Email',
              required: true,
            },
            {
              type: 'password',
              label: 'Password',
              placeholder: 'Password',
              required: true,
            },
          ]}
        />
        <AmplifySignIn slot="sign-in" usernameAlias="email" />

        <HomePage />
      </AmplifyAuthenticator>
    </div>
  );
}

export default App;
