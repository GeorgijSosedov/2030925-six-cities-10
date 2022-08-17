import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
 ERRORS_COUNT: 3,
};

root.render(
  <React.StrictMode>
    <App
    errorsCount= {Setting.ERRORS_COUNT} 
    offers = {offers}
    />
  </React.StrictMode>,
);
