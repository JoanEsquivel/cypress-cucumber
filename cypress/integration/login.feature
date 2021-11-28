Feature: Login page

    Feature Login page will work depending on the user credentials.
    Scenario: Success Login
        Given A user opens a saucelabs website
        When A user enters the username "standard_user"
        And A user enters the password "secret_sauce"
        And A user clicks on the login button
        Then the url will contains the /inventory subdirectory
    Scenario: Failure Login
        Given A user opens a saucelabs website
        When A user enters the username "locked_out_user"
        And A user enters the password "secret_sauce"
        And A user clicks on the login button
        Then The error message `Epic sadface: Sorry, this user has been locked out.` is displayed
