class LoginPage {
  constructor() {
  }
  get usernameText() { return "//li[contains(text(),'Use next credentials to execute Login:')]/b[1]"; }
  get passwordText() { return "//li[contains(text(),'Use next credentials to execute Login:')]/b[2]"; }
  get usernameInput() { return '#username'; }
  get passwordInput() { return '#password'; }
  get loginButton(){ return "#submit"; }
}
const loginPageInstance = (() => {
  let instance;
  return { getInstanceLoginPage: () => instance || (instance = new LoginPage()) };
})();

module.exports = loginPageInstance;
