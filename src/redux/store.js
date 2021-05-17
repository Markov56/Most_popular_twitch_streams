import { applyMiddleware, combineReducers, createStore } from 'redux';
import { apiReducer }from './reducers';
import thunkMiddleware  from 'redux-thunk'


const rootReducer = combineReducers({
    api: apiReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;