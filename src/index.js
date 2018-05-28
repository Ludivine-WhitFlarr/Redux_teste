import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Esteban from './Esteban/Esteban.jsx'
ReactDOM.render(<Esteban />, document.getElementById('root'));
registerServiceWorker();
