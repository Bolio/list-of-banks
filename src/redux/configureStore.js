import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import listBanks from "./modules/listBanks/index";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composeEnhancers = compose(applyMiddleware(thunk), devTools) || compose;

const rootReducer = () =>
  combineReducers({
    banks: listBanks,
  });

export default function configureStore() {
  const store = createStore(rootReducer(), composeEnhancers);

  // Add more reducers
  // store.replaceReducer(
  //   combineReducers({
  //     banks: listBanks,
  //   })
  // );

  return store;
}
