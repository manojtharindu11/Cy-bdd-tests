Feature: User Login

    # As a valid user
    # I want to login in to application

    # Scenario: Success Login
    #     Given I navigate to the login page
    #     When I submit valid credentials
    #     Then I should see homepage

    Scenario Outline: Login with multiple users
        Given I navigate to the login page
        When I login with "<username>" and "<password>"
        Then I should see the message "<message>"

        Examples:
            | username        | password     | message                               |
            | standard_user   | secret_sauce | Products                              |
            | locked_out_user | secret_sauce | Sorry, this user has been locked out. |