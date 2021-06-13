import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { routes } from './routes';
import { store } from './store';

import { wrap } from 'comlink';

import App from './App';
import api from './api';

Object.assign(window, { api });

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App routes={routes} />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

window.addEventListener('load', () => {
  const workerExample = new Worker('src/workers/worker.example.js', { type: 'module' });
  const obj: any = wrap(workerExample);
  obj.log();

  if (navigator.serviceWorker) {
    try {
      // navigator.serviceWorker.register('./workers/service.worker.js');
      console.log('Server worker register success');
    } catch (error) {
      console.log('Server worker register fail');
    }
  }

  console.log({ api });
});
