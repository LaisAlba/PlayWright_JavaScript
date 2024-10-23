Feature: Login action

  As a user
  I want to login into application

  Scenario Outline: Try to login with invalid credentials
    Given I visit a login page
    When I fill the login form with "<username>" and "<password>"
    And I click in home menu
    And I fill name and email for newsletter
    Then I wait for 3 seconds

    Examples:
      | username   | password   |
      | GETWINDOWS | GETWINDOWS |
