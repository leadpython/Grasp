import React from 'react';

class MessageList extends React.Component {
  render() {
    return (
      <ol className='message-list'>
        {this.props.messages.map((message, index) => {
          return (
            <li key={`message-${index}`}>
              {message.text}
            </li>
          );
        })}
      </ol>
    );
  }
}

export default MessageList;
