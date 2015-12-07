// MODULES =====================================
// Server
import path from 'path';
import express from 'express';
// Client rendering
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
// State management using Redux 
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './generated/app';
// Database 
// import db from './models/connection.js';
// import dbsetup from './models/dbsetup.js';
// import router from './routes.js';

// SERVER SETUP ================================
const app = express();
const port = process.env.PORT || 3000; 

// Set view templates
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Set static assets
app.use(express.static(path.resolve(__dirname, '../dist')));

// ROUTES =====================================
// Static HTML on page load 
app.get('/', (request, response) => {
  // Initialize state on page load
  const initialState = {
    currentMessage: '',
    messages: []
  };
  // Instantiate Redux store that returns initial state
  const store = createStore((state=initialState) => state);
  const appContent = ReactDOMServer.renderToString(
    // Provider wraps App and provides access to store
    <Provider store={store}>
      <App />
    </Provider>
  ); 

  // JSON string representation of initialState is created and passed
  // as a parameter to the app template so that the state can be shared
  // with the client. 
  response.render('app', {
    app: appContent, 
    initialState: JSON.stringify(initialState)
  });
});
// Database middleware 
// app.use("/api/user", router);

// INITIALIZE SERVER ==========================
app.listen(port, () => console.log('Server running'));
