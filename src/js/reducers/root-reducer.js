import {combineReducers} from 'redux';
import authenticateReducer from './authenticate-reducer';

const rootReducer = combineReducers({
  authenticateReducer
});

export default rootReducer;