import {USER_LOGIN_SUCCESS, USER_LOGOUT} from '../actions/users'

let initialState = null


export default function (state = initialState, action ) {
  switch (action.type) {
  case USER_LOGIN_SUCCESS:
    return action.payload

  case USER_LOGOUT:
    return null

  default:
    return state
  }
}