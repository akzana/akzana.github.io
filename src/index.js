import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SocialProvider } from './SocialContext';


console.log("testing for clo")
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SocialProvider>
      <App />
    </SocialProvider>
  </React.StrictMode>
);
