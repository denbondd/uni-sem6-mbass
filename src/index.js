import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Backendless from 'backendless';

Backendless.initApp(process.env.REACT_APP_CUSTOM_DOMAIN)

ReactDOM.render(<App />, document.getElementById('root'));
