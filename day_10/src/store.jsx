import {  createStore } from "redux"

// const store = createStore(
//     reducer, /* preloadedState, */
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

import rootReducer from "./reducers/index";

const store = createStore(rootReducer);

export default rootReducer;