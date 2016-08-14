// libs
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { Provider } from 'react-redux';

// theming
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// common
import Box from './_common/Box';

// children
import Landing from './Landing/Landing';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore(
  combineReducers({
    form: formReducer
  }),
  window.devToolsExtension && window.devToolsExtension()
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Landing/>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
