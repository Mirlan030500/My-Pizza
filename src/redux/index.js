import { combineReducers, createStore } from 'redux';
import { authReducer } from './reducers/authReducer';
import { basketReducer } from './reducers/basketReducer';



export const store = createStore(combineReducers({
    auth: authReducer,
    basket: basketReducer
}));