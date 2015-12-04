var express = require('express');

var db = require('./models/connection.js');
var router = require('./routes.js');
var dbsetup = require('./models/dbsetup.js')

var app = express();
module.exports.app = app;

var port = 3000;
app.set("port", port);

//set up routes
app.use("/api/user", router);

// Set what we are listening on.
app.listen(app.get("port"));

