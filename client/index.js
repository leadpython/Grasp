// MODULES ================================
// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux 
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// App
import App from 'containers/app';
import reducers from 'reducers';

// Routing Related
import { Router, Route } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
// import reducers from './reducers'

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))
const history = createHistory()

// Grab the state from a global injected into server-generated HTML
const initialState = window.INITIAL_STATE; 
// Create Redux store with initial state
const store = createStore(reducers(initialState));

syncReduxAndRouter(history, store) 

ReactDOM.render(
  // Provider makes store instance available to all Components
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="signup" component={SignupForm} />
        <Route path="login" component={LoginForm} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'));

/* 
Store = createStore(reducers)
*/
