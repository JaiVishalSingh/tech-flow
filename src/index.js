import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import store from './store';  // Import your Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>   {/* Wrap App with Provider and pass the store */}
      <App />
    </Provider>
  </React.StrictMode>
);
