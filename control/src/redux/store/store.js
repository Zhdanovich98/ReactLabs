import {combineReducers } from 'redux';
import usersReducers from "../reducers/usersReducer.js";
import {createStore} from 'redux';

let store = createStore(Reducer);
let Reducer = combineReducers({
     usersReducers
});
export default store;