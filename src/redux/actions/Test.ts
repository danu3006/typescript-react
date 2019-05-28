import AsyncActionSet, { AsyncActionState } from '../common/AsyncActionSet';

export type TestActionPayLoad = string;

interface AsyncActionStateSchema {
	testAction: AsyncActionState<TestActionPayLoad, string, string>;
}

export default class Test extends AsyncActionSet<AsyncActionStateSchema> {
	constructor() {
		super(Test.name);

		this.actions = ['TestAction'];
	}
}
