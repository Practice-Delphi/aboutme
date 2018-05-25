import { combineReducers } from 'redux';

// import test reducer
import { isTestPass } from './testreducer';

// Here be all reducers combine
export default combineReducers({
    isTestPass,
});