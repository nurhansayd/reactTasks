

import {applyMiddleware, createStore} from "redux"
import reducers from "./combineReducer"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(reducers, composeWithDevTools((applyMiddleware(thunk))))

export default store;


