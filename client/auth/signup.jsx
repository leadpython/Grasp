import React from "react";

function signup() {
  alert("HELLO!")
}

class SignupForm extends React.Component {
  createUser(e) {
    e.preventDefault();
    var self = this;
    var userData = {
      username: document.getElementById('signupUsername').value,
      password: document.getElementById('signupPassword').value,
      email: document.getElementById('signupEmail').value
    };

    // $.ajax({
    //   type: 'POST',
    //   url: 'localhost:3000/api/user',
    //   data: userData
    // })
    // .done(function(data) {
    //   self.clearForm()
    // })
    // .fail(function(jqXhr) {
    //   console.log('failed to register');
    // });

    alert("Username:\n" + document.getElementById('signupUsername').value + "\n\nPassword:\n" + document.getElementById('signupPassword').value + "\n\nEmail:\n" + document.getElementById("signupEmail").value);
  }

  render() {
    return (
      <div className="signupContainer">
        <form onSubmit={this.createUser}>
          <input id="signupUsername" type="text" placeholder="Enter your username..." />
          <input id="signupPassword" type="password" placeholder="Enter your password..." />
          <input id="signupEmail" type="text" placeholder="Enter your email..." />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SignupForm; 
