Feature: TEST CASE-4
//Test Case 4: Logout User

//4. Click on 'Signup / Login' button
//5. Verify 'Login to your account' is visible
//6. Enter correct email address and password
//7. Click 'login' button
//8. Verify that 'Logged in as username' is visible
//9. Click 'Logout' button
//10. Verify that user is navigated to login page

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