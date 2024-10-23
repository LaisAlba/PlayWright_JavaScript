const {getInstancePracticePage} = require("../page-objects/practicePage");
const functionsInstance = require('../utils/functions')
class PracticeInteraction {
  constructor() {
    this.elements = getInstancePracticePage();
    this.functions = functionsInstance;
  }

  async clickPracticeButton() {
    await  this.functions.SmartField(page, "practice button", this.elements.practiceMenuButton, null);
  }
  async clickLoginTest() {
    await  this.functions.SmartField(page, "practice test link", this.elements.loginTestLink, null);
  }
  async clickTestException() {
    await  this.functions.SmartField(page, "practice test exception link", this.elements.testExceptionLink, null);
  }
}

module.exports = { PracticeInteraction }