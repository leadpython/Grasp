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

import SignupForm from '../client/components/signup';
import LoginForm from '../client/components/login';

// Database 
// import db from './models/connection.js';
// import dbsetup from './models/dbsetup.js';
// import router from './routes.js';

//parsing

import bodyParser from 'body-parser';
// SERVER SETUP ================================
const app = express();

// Set view templates
app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  layoutsDir: path.resolve(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'views'));

// Set static assets
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use("/css", express.static(__dirname + '/css'));

//parsing
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

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
      <App>
        <a href="/login"><button style={{fontSize: '50px'}}>ENTER SITE</button></a>
      </App>
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

app.get('/signup', (request, response) => {
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
      <App>
        <SignupForm />
      </App>
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

<<<<<<< HEAD
app.get('/login', (request, response) => {
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
      <App>
        <LoginForm />
      </App>
    </Provider>
  ); 

  // JSON string representation of initialState is created and passed
  // as a parameter to the app template so that the state can be shared
  // with the client. 
  response.render('app', {
    app: appContent, 
    initialState: JSON.stringify(initialState)
  });
=======
app.post('/', (request, response) => {
  console.log("A post request!", request.body);
  db('users').insert( {username: request.body.username,
          firstname: request.body.firstname,
          secondname: request.body.secondname,
          email: request.body.email,
          hashedpw: db.raw( "crypt('"+ request.body.username + "', gen_salt('md5'))" )}).then(function(ret){
          console.log("success")
          // callback(ret);
        });
  // response.send("Hello")
>>>>>>> Added server changes
});

// Database middleware 
// app.use("/api/user", router);
export default app; 
