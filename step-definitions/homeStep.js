const {Given, When, Then, defineStep} = require('@cucumber/cucumber')
const {HomeInteraction} = require('../interactions/homeInteraction')
const homeInteraction = new HomeInteraction()


When('I click in home menu', async () => {
   await homeInteraction.clickHomeButton();

});
When('I fill name and email for newsletter', async ()  => {
   await homeInteraction.fillNewsLetter();

});
