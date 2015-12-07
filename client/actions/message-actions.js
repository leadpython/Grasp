// ACTION TYPES =================================
// Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.
export const UPDATE_MESSAGE = 'update-message';
export const ADD_MESSAGE = 'add-message';

// ACTION CREATORS ==============================
export function updateMessage(message) {
  // Actions are plain objects. They must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. 
  // It is a good idea to pass as little data in each action as possible.
  return { type: UPDATE_MESSAGE, message };
}

export function addMessage() {
  return { type: ADD_MESSAGE };
}
