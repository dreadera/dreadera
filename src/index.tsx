import React from 'react';
import ReactDOM from 'react-dom';

import App from '@client/app';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

/**
 * if hot-loading is available. enable it.
 */

if (import.meta.hot) {
  import.meta.hot.accept();
}
