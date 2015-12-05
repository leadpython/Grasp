// MODULES =====================================
// Server
import path from 'path';
import express from 'express';
// Client rendering
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
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
  response.render('app', {
    app: ReactDOMServer.renderToString(<App />)
  });
});
// Database middleware 
// app.use("/api/user", router);

// INITIALIZE SERVER ==========================
app.listen(port, () => console.log('Server running'));
