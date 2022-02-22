
import { combineReducers } from "redux";
import movielistReducer from './movielistReducer'
import starReducer from "./starReducer";


export default combineReducers({
    star: starReducer,
    moviesList: movielistReducer
})