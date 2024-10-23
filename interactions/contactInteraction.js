const {getInstanceContactPage} = require("../page-objects/contactPage");
const functionsInstance = require('../utils/functions')
class ContactInteraction {
  constructor() {
    this.elements = getInstanceContactPage();
    this.functions = functionsInstance;
  }

  async clickContactButton() {
    await  this.functions.SmartField(page, "contact button", this.elements.contactButton, null);
  }

  async fillNameInput(nameInput){
      await  this.functions.SmartField(page, "contact name", this.elements.contactNameInput, nameInput);
  }

  async fillLastNameInput(lastNameInput){
      await  this.functions.SmartField(page, "contact last name", this.elements.contactLastNameInput, lastNameInput);
  }

  async fillEmailInput(emailInput){
      await  this.functions.SmartField(page, "contact email", this.elements.contactEmailInput, emailInput);
  }

  async fillCommentInput(commentInput){
      await  this.functions.SmartField(page, "contact comment", this.elements.contactCommentInput, commentInput);
  }

  async fillContactFields() {
    await  this.fillNameInput("lais")
    await  this.fillLastNameInput("Vieira")
    await  this.fillEmailInput("teste@teste.com")
    await  this.fillCommentInput("isso e um texto de teste")
  }
}

module.exports = { ContactInteraction }