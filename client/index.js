// MODULES ================================
// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux 
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// App
import App from 'components/app';
import reducers from 'reducers';

// Grab the state from a global injected into server-generated HTML
const initialState = window.INITIAL_STATE; 
// Create Redux store with initial state
const store = createStore(reducers(initialState)); 

ReactDOM.render(
  // Provider makes store instance available to all Components
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('app'));

/* 
Store = createStore(reducers)
*/
