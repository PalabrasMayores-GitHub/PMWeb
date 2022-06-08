import './index.css';
import 'tachyons';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const queryString = window.location.href;
const urlParams = new URLSearchParams(queryString);
const page_type = urlParams.get('page_type');
console.log(page_type);

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals