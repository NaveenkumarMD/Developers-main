import { LOGIN, SIGNUP } from '../Actions/types'
const initialState = null
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log("login working")
      return {
        ...state,
        userdetails: action.payload
      }
    case SIGNUP:
      console.log("Signup running")
      return {
        ...state,
        usedetails: action.payload
      }
    default:
      return state
  }
}
