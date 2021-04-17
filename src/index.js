import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
// import HomePage from './pages/HomePage'

// ReactDOM.render(
//   <BrowserRouter>
//     <App children={ <HomePage /> }/>
//   </BrowserRouter>,
//   document.getElementById('root'),
// );


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);