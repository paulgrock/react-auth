const auth = {
  login(email, pw, cb) {
    if (email === "paulgrock@gmail.com" && pw === "password") {
      localStorage.setItem('loggedIn', true);
      cb(true);
    } else {
      cb(false);
    }
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
