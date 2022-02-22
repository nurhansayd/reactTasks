

import {createStore} from "redux"
import starReducer from "./starReducer"
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(starReducer, composeWithDevTools() )

export default store;


