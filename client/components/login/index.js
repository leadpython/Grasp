import React from "react";

class LoginForm extends React.Component {
  loginUser(e) {
    e.preventDefault();
    // var self = this;
    // var userData = {
    //   username: document.getElementById('signupUsername').value,
    //   password: document.getElementById('signupPassword').value,
    //   email: document.getElementById('signupEmail').value
    // };

    alert("Username:\n" + document.getElementById('signupUsername').value + "\n\nPassword:\n" + document.getElementById('signupPassword').value);
  }

  render() {
    return (
      <div className="signupContainer">
      <h1 id="loginTitle" >LOGIN</h1>
        <form onSubmit={this.createUser}>
          <input id="signupUsername" type="text" placeholder="Enter your username..." /> <br /><br />
          <input id="signupPassword" type="password" placeholder="Enter your password..." /> <br /><br />
          <input id="login" type="submit" value="LOGIN" />
        </form>
      </div>
    );
  }
}

export default LoginForm; 
