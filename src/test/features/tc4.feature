Feature: TEST CASE-4


    Background: Launch Browser
        When Navigate to url 'http://automationexercise.com'
        Then Verify that home page is visible successfully
        
    Scenario: Logout User              
        Then Click on Signup-Login button
        Then Verify 'Login to your account' is visible
        Then Enter correct email address and password
        Then Click 'Login' button
        Then Verify that Logged in as username is visible
        Then Click 'Logout' button
        Then Verify that user is navigated to login page