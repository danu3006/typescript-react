import { put } from 'redux-saga/effects';

import { BaseAction } from '../../common/AsyncActionSet';

import Test from '../../actions/Test';

const directoryActions = new Test();

export function* testActionWorker(action: BaseAction<string>) {
	const { failure } = directoryActions.actionStates.testAction.handlers;

	try {
		// pass
	} catch (e) {
		yield put(failure('_SAGA_' + e));
	}
}
