import { all, takeLatest } from 'redux-saga/effects';

import { testActionWorker } from '../workers/Test';

import Test from '../../actions/Test';

const test = new Test();

function* testActionWatcher() {
	yield takeLatest(test.actionStates.testAction.init, testActionWorker);
}

export default function*() {
	yield all([testActionWatcher()]);
}
