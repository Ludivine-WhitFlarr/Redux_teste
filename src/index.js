import React from 'react';
import ReactDOM from 'react-dom';
import './Matteo/Matteo.min.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Matteo from './Matteo/Matteo.jsx'
ReactDOM.render(<Matteo />, document.getElementById('root'));
registerServiceWorker();
