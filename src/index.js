import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <div id="WelcomeDiv">
      <h1 style={{ color: 'aqua' }}>Welcome to the Mixer App</h1>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
