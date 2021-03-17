import './App.css';
import HomePage from './Components/HomePage';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default withAuthenticator(App);
