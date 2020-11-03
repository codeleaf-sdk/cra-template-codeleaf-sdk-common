import React from 'react';
import ReactDOM from 'react-dom';
import { HelloModule } from '@pages/Hello';

ReactDOM.render(
  <React.StrictMode>
    <HelloModule.Component />
  </React.StrictMode>,
  document.getElementById('root')
);
