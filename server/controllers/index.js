var models = require('../models/index.js'); //require models
//this is the controller it talks to the model
module.exports = {
  signin: {
    post: function (req, res) {
      console.log("req.body....",req)
      console.log("req.body222....",res)
      params = [req.body.username, req.body.password]; //this is temporary
      console.log("params....", params)
      models.users.signin(params, function(results) {
        res.status(201).send(results);// sends status of 201 and results of get request to client
      });
    }
  },
  signup: {
    post: function (req, res) {
      console.log("username....", req.body);
      params = [req.body.username, req.body.firstname, req.body.secondname, req.body.password]; //this is temporary
      models.users.signup(params, function(err, results) {
        console.log(results);
        if(err) { res.sendStatus(401)}
        res.status(201).send(results);// sends status of 201 and results of get request to client
      });
    }
  }
}