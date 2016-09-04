import fetch from 'isomorphic-fetch';

const auth = {
  login(email, password, cb) {
    fetch('/api/auth', {
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
        cb(true);
    }).catch(() => {
      cb(false);
    })
  },
  logOut() {
    localStorage.removeItem('loggedIn');
  },
  loggedIn() {
    if (localStorage.getItem('loggedIn') === "true") {
      return true;
    }
    return false;
  }
}

export default auth;
