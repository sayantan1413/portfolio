import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyled from './styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


