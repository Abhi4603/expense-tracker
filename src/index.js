import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the correct import for createRoot
import App from './App';
import './index.css';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
