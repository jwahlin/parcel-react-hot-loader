import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

function renderApp() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp()
registerServiceWorker();

module.hot.accept(renderApp)