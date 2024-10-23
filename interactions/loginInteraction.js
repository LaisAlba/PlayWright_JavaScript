const Config = require('../setup/ambient/ambient');
const {getInstanceLoginPage} = require("../page-objects/loginPage");
const functionsInstance = require('../utils/functions')
class LoginInteraction {
  constructor() {
    this.config = Config.config;
    this.elements = getInstanceLoginPage();
    this.functions = functionsInstance;
  }

  async navigateToLoginScreen() {
    try {
      await page.goto(this.config.URL)
    } catch (error) {
      throw new Error(`Erro ao navegar para a tela de login: ${error.message}`);
    }
  }

  async validateLoginParameters(username, password) {
    if (!username || !password) {
      throw new Error('Username e password são obrigatórios');
    }
  }

    async fillUsername(username){
        await  this.functions.SmartField(page, "login UserName",  this.elements.usernameInput, username);
    }
    async fillPassword(password){
        await  this.functions.SmartField(page, "login password",  this.elements.passwordInput, password);
    }
    async clickLoginButton(){
        await  this.functions.SmartField(page,"login button",  this.elements.loginButton, null);
    }

  async submitLoginWithParameters(username, password) {
    await this.validateLoginParameters(username,password);
    if(username==="GETWINDOWS")
      username = await this.functions.getTexts(this.elements.usernameText,page);
    if(password==="GETWINDOWS")
      password = await this.functions.getTexts(this.elements.passwordText,page);
    await  this.fillUsername(username);
    await  this.fillPassword(password);
    await  this.clickLoginButton();
  }

  async assertUserIsLoggedIn() {
    await page.waitForSelector("#loop-container > div > article > div.post-header > h1")
  }

  async pause() {
    await page.waitForTimeout(3000)
  }
}

module.exports = { LoginInteraction }