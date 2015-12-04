var db = require('./connection.js'); //set up database connection
//this is responsible for communicating with the database
module.exports = {
  users: {
     signin: function (params, callback) {
      console.log("in here")
      // db('users').insert({firstname: "Will"}).then(function(ret){
      //     console.log("success")
      //   });
      db.select().table('users').then(function (result) {
        console.log("in here....", result)
        callback(err, result);
      }).catch(function (error){
        console.log(error)
      });
    
      }
    }

  };