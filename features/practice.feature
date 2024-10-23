Feature: Practice action

  Background:
    Given I visit a login page
    When I fill the login form with "GETWINDOWS" and "GETWINDOWS"
    And I click in practice menu

  Scenario: Practice test and click in login page
    And I click in test login page
    Then I wait for 3 seconds

  Scenario: Practice test and click in test exception
    And I click in test exception
   Then I wait for 3 seconds