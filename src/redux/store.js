import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import weatherReducer from "./weatherDuck";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  weather: weatherReducer,
});

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store?.getState()));

export default store;
