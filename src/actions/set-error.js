import { SET_ERROR } from './types';

export default function setError(bool) {
  return {
    type: SET_ERROR,
    error: bool
  }
}