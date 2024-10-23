Feature: Contact action

  Scenario: Try to contact with invalid credentials
    Given I visit a login page
    When I fill the login form with "GETWINDOWS" and "GETWINDOWS"
    And I click in contact menu
    Then I wait for 3 seconds
    And I fill the contact fields
    Then I wait for 3 seconds
