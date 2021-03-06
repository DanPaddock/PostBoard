import { createStore, combineReducers } from "redux";
import assignmentsReducer from "../reducers/assignments";
import filtersReducer from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      assignments: assignmentsReducer,
      filters: filtersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
