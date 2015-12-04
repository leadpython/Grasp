// ES5: var React = require('react');
import React from "react";

// ES5: var Greeting = React.createClass({})
class Greeting extends React.Component {
  render() {
    return (
      <div className="greeting">
        Hello, {this.props.name}!
      </div>
    );
  }
}

// ES5: module.exports = Greeting;
export default Greeting; 
