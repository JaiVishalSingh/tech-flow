// store.js
import { createStore } from 'redux';
import rootReducer from './reducers';  // Import the root reducer combining all other reducers

const store = createStore(
  rootReducer,
  // Optional: Add Redux DevTools Extension support
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
