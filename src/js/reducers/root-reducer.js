import {combineReducers} from 'redux';
import authenticateReducer from './authenticate-reducer';
//import {sessionReducer} from 'redux-react-session';

const rootReducer = combineReducers({
  //sessionReducer,
  authenticateReducer
});

export default rootReducer;