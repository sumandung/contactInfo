import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './contact/store/store';

ReactDOM.render(<Provider store = {configureStore()}> 
		<Router /> 
	</Provider>, document.getElementById('root'));
registerServiceWorker();
