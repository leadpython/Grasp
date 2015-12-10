import React from "react";

import Request from "superagent";



class SignupForm extends React.Component {
  createUser(e) {
    console.log("In create user........");
    debugger
    e.preventDefault();
    var self = this;
    var userData = {
      username: document.getElementById('signupUsername').value,
      firstname: document.getElementById('signupFirstname').value,
      secondname: document.getElementById('signupLastname').value,
      password: document.getElementById('signupPassword').value,
      email: document.getElementById('signupEmail').value
    };
    // Request
    //  .post('http://localhost:3000/api/signup')
    //  .send(userData)
    //  .end(function(err, res){
    //    if (res.ok) {
    //     //redender log in page
    //      alert('yay got ' + JSON.stringify(res.body));
    //    } else {
    //      alert('Oh no! error ' + res.text);
    //    }
    //  });


    alert("Username:\n" + document.getElementById('signupUsername').value + "\n\nPassword:\n" + document.getElementById('signupPassword').value + "\n\nEmail:\n" + document.getElementById("signupEmail").value);
  }
  render() {
    return (
      <div className="signupContainer">
      <h1 id="signupTitle" >SIGNUP</h1>
        <button onClick={this.createUser}>Submit</button>
          <input id="signupUsername" type="text" placeholder="Enter your username..." /> <br /><br />
          <input id="signupPassword" type="password" placeholder="Enter your password..." /> <br /><br />
          <input id="signupEmail" type="text" placeholder="Enter your email..." /> <br /><br />
          <input id="signupFirstname" type="text" placeholder="Enter your first name..." /> <br /><br />
          <input id="signupLastname" type="text" placeholder="Enter your last name..." /> <br /><br />
          <input id="createAccount" type="submit" value="CREATE ACCOUNT" />
        <br/>
        Already have an account? <a href="/login"> LOGIN!</a>
      </div>
    );
  }
}

export default SignupForm; 
