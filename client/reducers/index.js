// MODULES =============================
// Actions 
import {UPDATE_MESSAGE, ADD_MESSAGE} from 'actions/message-actions'

// REDUCER =============================================
// Reducers specify how the application's state changes in response.
// In Redux, all application state is stored as a single object.
export default function (initialState) {
  // The reducer is a pure function that takes the previous state and an action,
  // and returns the next state. 
  return (state = initialState, action) => {
    switch(action.type) {
      case UPDATE_MESSAGE:
        // Never mutate the state, but create a new copy of the state. 
        return Object.assign({}, state, { currentMessage: action.message });
      case ADD_MESSAGE:
        const text = state.currentMessage.trim();

        if (text) {
          let messages = state.messages.map(message => Object.assign({}, message));
          messages.push({id: messages.length + 1, text});

          return {
            messages,
            currentMessage: ''
          };
        }
      default:
        // Always return the previous state for any unknown action. 
        return state;
    }
  }
}
