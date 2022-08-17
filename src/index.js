import React from 'react';
import './index.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './component/App';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';

const store = configureStore({reducer},  middleware);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
      <App/>
  </Provider>
);