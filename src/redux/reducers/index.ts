import { combineReducers } from 'redux';
import personalReducer from './personalReducer';

const rootReducer = combineReducers({ personalReducer });

export default rootReducer;
