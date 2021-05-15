import { combineReducers, createStore } from 'redux';
import {apiReducer }from './reducers'


const rootReducer = combineReducers({
    api: apiReducer
});

const store = createStore(rootReducer);

window.store = store;

export default store;