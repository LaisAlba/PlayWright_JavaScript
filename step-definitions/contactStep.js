const {Given, When, Then, defineStep} = require('@cucumber/cucumber')
const {ContactInteraction} = require('../interactions/contactInteraction')
const contactInteraction = new ContactInteraction()

When('I click in contact menu', async () => {
   await contactInteraction.clickContactButton();
});

When('I fill the contact fields', async ()  => {
   await contactInteraction.fillContactFields();
});