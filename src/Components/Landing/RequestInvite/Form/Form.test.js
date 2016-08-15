 /* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { combineReducers, createStore } from 'redux';
import { Provider, reducer as formReducer } from 'redux-form';

import ConnectedForm, { Form } from './Form';

jest.mock('react-dom');

describe('Form', () => {
  const store = createStore(combineReducers({ form: formReducer }));

  // not working / incomplete
  it('behaves when submit without entering anything', () => {
    debugger;
    const component = renderer.create(
      <Provider store={store}>
        <ConnectedForm />
      </Provider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
