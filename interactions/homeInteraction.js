const {getInstanceHomePage} = require("../page-objects/homePage");
const functionsInstance = require('../utils/functions')
class HomeInteraction {
  constructor() {
    this.elements = getInstanceHomePage();
    this.functions = functionsInstance;
  }

  async clickHomeButton() {
    await  this.functions.SmartField(page, "home menu button", this.elements.homeMenuButton, null);
  }
  async  fillAllInputs() {
    const inputs = await page.$$('input');
      for (const input of inputs) {
    await input.fill('teste');
    }

     console.log('Todos os campos de entrada foram preenchidos com o valor "teste".');
  }

  async fillNewsLetter() {
  page.setDefaultTimeout(10000);
    await page.waitForTimeout(3000)

    await this.fillAllInputs();

   // await  this.functions.SmartField(page, "home name news letter", this.elements.nameNewsLetterInput, "teste");
   // await  this.functions.SmartField(page, "home email news letter", this.elements.emailNewsLetterInput, "teste@gmail.com");
    //await  this.functions.SmartField(page, this.elements.submitNewsLetterButton, null);
  }
}

module.exports = { HomeInteraction }