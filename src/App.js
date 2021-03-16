import './App.css';
import HomePage from './Components/HomePage';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <HomePage />
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
