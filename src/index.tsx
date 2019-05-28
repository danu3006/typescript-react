import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import redux from './redux.config';

import App from './app/App';

import 'semantic-ui-css/semantic.min.css';

import './app/styles/index.css';

ReactDOM.render(
	<Provider store={redux.stores.store}>
		<PersistGate loading={null} persistor={redux.stores.persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
