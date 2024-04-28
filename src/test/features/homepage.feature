
Feature: to test home page functionality

  Scenario: Home page test
    Given User is on home page
    When User enter login details
    Then Login should be successfull
    And Home page should be displayed
