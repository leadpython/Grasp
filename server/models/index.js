var db = require('./connection.js'); //set up database connection
//this is responsible for communicating with the database

module.exports = {
  users: {
     signin: function (request, callback) {
      db('users').
      where( 'username', request.body.username ).
      andWhere({
        hashedpw: db.raw( "crypt('"+ request.body.password + "', hashedpw)")
      })
      .select()
      .then(function (res) {
        console.log("in here...",res);
        callback(null, res)
      })
      .catch(function (error){
      callback(error, null)
    });
    
      },
      signup: function (request, callback) {
          db('users').insert( {username: request.body.username,
          firstname: request.body.firstname,
          secondname: request.body.secondname,
          email: request.body.email,
          hashedpw: db.raw( "crypt('"+ request.body.username + "', gen_salt('md5'))" )}).then(function(ret){
        })
          .then(function (res) {
            callback(null, res);
          })
          .catch(function(error) {
            callback(error, null);
          });

        }
      }

    }
        