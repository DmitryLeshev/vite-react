import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { routes } from './routes';
import { store } from './store';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App routes={routes} />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
