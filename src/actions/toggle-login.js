import { TOGGLE_LOGIN } from './types';

export default function toggleLogin(bool) {
  return {
    type: TOGGLE_LOGIN,
    loggedIn: bool
  }
}