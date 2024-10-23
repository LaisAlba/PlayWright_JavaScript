const {When} = require('@cucumber/cucumber')
const {PracticeInteraction} = require('../interactions/practiceInteraction')
const practiceInteraction = new PracticeInteraction()


When('I click in practice menu', async () => {
   await practiceInteraction.clickPracticeButton();

});

When('I click in test login page', async () => {
   await practiceInteraction.clickLoginTest();

});
When('I click in test exception', async () => {
   await practiceInteraction.clickTestException();

});