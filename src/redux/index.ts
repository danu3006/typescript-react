import getStores from './store/Store';

import Test from './actions/Test';

export interface ReduxWrapperConfig {
	host: 'localhost' | '127.0.0.1' | string;
	port: 8080 | 8000 | 80 | number;
	secure: boolean;
	debug: boolean;
}

interface Stores {
	store: any;
	persistor: any;
}

export default class ReduxWrapper {
	private readonly test: Test;

	private readonly defaultStores: any;

	constructor() {
		this.defaultStores = getStores();

		this.test = new Test();
	}

	public get actions() {
		return {
			test: this.test.actionStates
		};
	}

	public get stores(): Stores {
		return {
			store: this.defaultStores.store,
			persistor: this.defaultStores.persistor
		};
	}
}
