import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import '@xyflow/react/dist/style.css';
// import App from './components/App';
import {RoutesComponent }  from './screens/routes.js'

ReactDOM.render(
  <React.StrictMode>
    <RoutesComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
