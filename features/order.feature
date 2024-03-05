Feature: Orders

    @tag1
    Scenario: Unregistered user checkout Flow
        Given I am on the home page
        When I click on Dresses
        And I click on a product
        And I select size and color
        And I click the Add to Card button
        # REVIEW: "When" steps are for actions, not outcomes
        And I see a message "Product successfully added to your shopping cart"
        And I click the Proceed to Checkout button
        # And A "SHOPPING-CART SUMMARY" is displayed
        And I click on the final Proceed to Checkout button
        Then I should be prompted to create an account or sign in