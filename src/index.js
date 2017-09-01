import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap-grid.css';
import './styles/bootstrap.css';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();