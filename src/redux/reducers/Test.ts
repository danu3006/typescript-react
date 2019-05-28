import { combineReducers } from 'redux';

import { IAsyncReducer } from '../common/reducers/AsyncReducer';

import Test, { TestActionPayLoad } from '../actions/Test';

export type TestActionReducer = IAsyncReducer<
	TestActionPayLoad,
	string,
	string
>;

export interface IDataDirectoryReducer {
	setDirectory: TestActionReducer;
}

const test = new Test();

const DataDirectoryReducer = combineReducers({
	setDirectory: test.actionStates.testAction.reducer
});

export default DataDirectoryReducer;
