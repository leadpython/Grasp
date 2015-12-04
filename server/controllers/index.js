var models = require('../models/index.js'); //require models
//this is the controller it talks to the model
module.exports = {
  signin: {
    post: function (req, res) {
      params = "blah"; //this is temporary
      models.users.signin(params, function(results) {
        res.status(201).send(results);// sends status of 201 and results of get request to client
      });
    }
  }
}