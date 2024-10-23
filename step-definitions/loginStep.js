const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginInteraction } = require('../interactions/loginInteraction')

const loginInteraction = new LoginInteraction()

Given('I visit a login page', async ()=> {
  await loginInteraction.navigateToLoginScreen()
})



Then('I should see the home page', async ()=> {
    await loginInteraction.assertUserIsLoggedIn()
})

Then('I wait for 3 seconds', async ()=> {
  await loginInteraction.pause()
})

When(/^I fill the login form with "([^"]*)" and "([^"]*)"$/, async (username, password)=> {
    await loginInteraction.submitLoginWithParameters(username, password)
  }
)
