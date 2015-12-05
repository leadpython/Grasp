var db = require('./connection.js'); //set up database connection
//this is responsible for communicating with the database

module.exports = {
  users: {
     signin: function (params, callback) {
      console.log("in here")
      // db('users').insert([
      //   {username: 'wow'}, 
      //   {firstname: "Liam"}, {secondname: "Gallagher"}, 
      //   {hashedpw: db.raw( "crypt('blue', gen_salt('md5'))" )}
      //   ]).then(function(ret){
      //     console.log("success")
      //   });
      // db('users').where('username', 'wo')
      // .then(function (res) {
      //   console.log('result', res)
      // })
      db('users').
      where( db.raw("Upper('username')"), 'like', '%' + params[0] + '%').
      where({
        hashedpw: db.raw( "crypt('"+ params[1] + "', hashedpw)")
      }).select()
      .then(function (res) {
        console.log(res);
        callback(res)
      })
      .catch(function (error){
      callback(error)
    });
    
      },
      signup: function (params, callback) {
        db('users').insert( {username: params[0],
          firstname: params[1],
          secondname: params[2],
          hashedpw: db.raw( "crypt('"+ params[3] + "', gen_salt('md5'))" )}).then(function(ret){
          console.log("success")
          callback(ret);
        });
      }
    }

  };
