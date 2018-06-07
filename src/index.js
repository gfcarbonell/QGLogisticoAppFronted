import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from './js/routers/routers';
import RootStore from './js/stores/stores';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css'


ReactDOM.render(
    <RootRouter store={RootStore}/>, 
    document.getElementById('root')
);
registerServiceWorker();