import React from 'react';
import {} from './style.less';
import SignupForm from '../signup';
import LoginForm from '../login';
import Header from '../header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SignupForm />
        <LoginForm />
      </div>
    );
  }
}

export default App;
