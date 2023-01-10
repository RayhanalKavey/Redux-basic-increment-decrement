# Redux

## Action Creator: What to do?

- Action creator is a pure function, which creates action.
- Reusable, portable and easy to test

```
action=> index.js

export const incNumber = (num) => {
 return {
   type: "INCREMENT",
   payload: num,
 };
};
export const decNumber = (num) => {
 return {
   type: "DECREMENT",
   payload: num,
 };
};
```

## Reducer

- Reducers are functions that take the current state and an action as an argument and return the state result

```
reducer->incrementDecrement.js
const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
 switch (action.type) {
   case "INCREMENT":
     return state + 1;
   case "DECREMENT":
     return state - 1;
   default:
     return state;
 }
};
export default changeTheNumber;
```

```
reducer->In index

import changeTheNumber from "./increaseDecrease";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
 changeTheNumber,
});
export default rootReducer;
```

## Stores:

- The Redux store brings together the state, actions, and reducers that make up your app.
- It’s important to note that you’ll only have a single store in a redux
- Every redux store has a single root reducer function.

```
store.js

Import {createStore} from ‘redux’;
Const store = createStore(rootReducers);
store.js
import { configureStore } from "redux";
import rootReducer from "./reducers/index";
const store = configureStore(rootReducer);
export default store;
```

## REDUX principle

- Single source of truth
- The global state of your application is stored as an object inside a single store.
- State is READ-only
- The only way to change the state is to dispatch an action
- Immutability, one-way data flow, predictability of outcome
- Changes are made with pure reducer functions

## Install

Npm i redux react-redux

## Relevant Resources

- [Redux official Website](https://redux.js.org/introduction/installation).
- [Redux Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en).
- [Redux extension GitHub-To makes chrome extension workable follow the instruction to copy text to the store.](https://github.com/reduxjs/redux-devtools/tree/main/extension#installation).

## Live Link

- Increment value 5 and decrement value 1 are set to the application.
- [Test Live](https://redux-increment-decrement.netlify.app/).
