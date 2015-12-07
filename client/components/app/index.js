import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {} from './style.less';
import SignupForm from '../signup';
import LoginForm from '../login';
import Header from '../header';
import MessageList from 'components/message-list';
import MessageEntryBox from 'components/message-entry-box';
import AddTodo from 'components/add-to-do';
import TodoList from 'components/todo-list';
import Footer from 'components/footer';

/* Import all of the exported action creator functions and constants in the 
message-actions module and make them available in a single object */
import * as messageActionCreators from 'actions/message-actions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SignupForm />
        <LoginForm />
        <MessageList messages={this.props.messages}/>
        <MessageEntryBox
          value={this.props.currentMessage}
          onChange={this.props.updateMessage}
          onSubmit={this.props.addMessage}/>
        <AddTodo
          onAddClick={text =>
            console.log('add todo', text)
          } />
        <TodoList
          todos={
            [
              {
                text: 'Use Redux',
                completed: true
              },
              {
                text: 'Learn to connect it to React',
                completed: false
              }
            ]
          }
          onTodoClick={index =>
            console.log('todo clicked', index)
          } />
        <Footer
          filter='SHOW_ALL'
          onFilterChange={filter =>
            console.log('filter change', filter)
          } />
      </div>
    );
  }
}

// Injects values from the state in the store to the components properties.
function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentMessage: state.currentMessage
  };
}

// Injects action creator functions into the component properties that dispatch the returned objects to the store
function mapDispatchToProps(dispatch) {
  /* 
  bindActionCreators turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly. 
  */
  return bindActionCreators(messageActionCreators, dispatch);
}

// Create a connector that injects properties and action creators to a component. 
const connector = connect(mapStateToProps, mapDispatchToProps); 
// Create a new component from App with the ability to connect to the store
const ConnectedApp = connector(App); 
export default ConnectedApp;
