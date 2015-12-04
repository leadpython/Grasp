var controllers = require('./controllers/index.js');
var router = require('express').Router();

for (var route in controllers) {
  console.log("In routes")
  router.route("/" + route)
    .post(controllers[route].post);
}
//on initialisation sets up all the routes, saves time from writing them out

module.exports = router;