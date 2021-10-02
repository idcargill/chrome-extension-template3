import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './popup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');
console.log(root);
console.log(document.title);

ReactDOM.render(
  <>
    <App />
  </>,
  root,
);
