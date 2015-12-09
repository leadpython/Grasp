import React from "react";

class SignupForm extends React.Component {
  createUser(e) {
    e.preventDefault();
    var self = this;
    var userData = {
      username: document.getElementById('signupUsername').value,
      password: document.getElementById('signupPassword').value,
      email: document.getElementById('signupEmail').value
    };

    alert("Username:\n" + document.getElementById('signupUsername').value + "\n\nPassword:\n" + document.getElementById('signupPassword').value + "\n\nEmail:\n" + document.getElementById("signupEmail").value);
  }

  render() {
    return (
      <div className="signupContainer">
      <h1 id="signupTitle" >SIGNUP</h1>
        <form onSubmit={this.createUser}>
          <input id="signupUsername" type="text" placeholder="Enter your username..." /> <br /><br />
          <input id="signupPassword" type="password" placeholder="Enter your password..." /> <br /><br />
          <input id="signupEmail" type="text" placeholder="Enter your email..." /> <br /><br />
          <input id="signupFirstname" type="text" placeholder="Enter your first name..." /> <br /><br />
          <input id="signupLastname" type="text" placeholder="Enter your last name..." /> <br /><br />
          <input id="createAccount" type="submit" value="CREATE ACCOUNT" />
        </form>
        <br/>
        Already have an account? <a href="/login"> LOGIN!</a>
      </div>
    );
  }
}

export default SignupForm; 
