import AuthReducer from './Authreducers'
import {combineReducers} from 'redux'
export default combineReducers({
    auth:AuthReducer
})