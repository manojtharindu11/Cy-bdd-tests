Feature: User Login

    As a valid user
    I want to login in to application

    Scenario: Success Login
        Given I navigate to the login page
        When I submit valid credentials
        Then I should see homepage