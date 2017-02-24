import {TOGGLE_LOGIN, SET_ERROR} from './actions/types';

const initialState = {
  loggedIn: false,
  error: false
}

export default function authApp(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_LOGIN:
      return Object.assign({}, state, {
        loggedIn: action.loggedIn,
        error: false
      })

    case SET_ERROR:
      return Object.assign({}, state, {
        error: action.error
      })

    default:
      return state;
  }
} 