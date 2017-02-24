import toggleLogin from './toggle-login';
import setError from './set-error';

export default function(email, password) {
  return (dispatch) => {
    return fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      }).then((response) => {
        if (response.status > 400) {
          let error = new Error("Unauthorized response")
          error.status = response.status;
          error.response = response;
          error.statusText = response.statusText;
          throw error;
        }
        return response;
      }).then((body) => {
          localStorage.setItem('loggedIn', true);
          dispatch(toggleLogin(true));
      }).catch(() => {
        dispatch(setError(true));
      })
  }
}