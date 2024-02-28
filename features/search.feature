Feature: Search functionality

    @tag2
    Scenario: User can search for a product
        Given I am on the home page
        When I click on the search box
        And I type "Blouse"
        And I click on the search button
        Then I should see product list containing "Blouse" 